const express = require('express');
const router = express.Router();
const config = require('../db/config');
const { app } = require('firebase-admin');
const db = config.admin.firestore();
const smsConfig = require('../db/config');
const basicInfoPdf = require('../utils/basicInfoPDF');
const docPDF = require('../utils/docPDF');
const merge = require('easy-pdf-merge');                                                                                                    
const fs = require("fs");

router.get('/bank/:bank/documentOtp/:otp/getData',async(req,res)=>{
    try{
        let _bankName = req.params.bank;
        let otpCode = req.params.otp;
        console.log(_bankName,otpCode);
        const document =  db.collection('Banks').doc(req.params.bank).collection('Account').doc(otpCode.toString());
        let product = await document.get();
        let response = product.data();
        console.log(response);
        res.send(response);
    }
    catch(error){
        res.send({"message":"error"});
    }
});

router.get('/bank/:bank/getAll',async (req,res)=>{
    const collection = db.collection('Banks').doc(req.params.bank).collection('Account');
    let response = [];
        await collection.get().then(querySnapshot => {
            let docs = querySnapshot.docs;
            for(let doc of docs){
                        const item = {
                            "otp":doc.id,
                            "formId": doc.data().formId,
                            "date":doc.data().account_creation_date,
                            "name": doc.data().name,
                            "phoneNo":doc.data().phone,
                            "purpose":doc.data().purpose,
                            "status":doc.data().status
                        }
                        response.push(item);
                    }
                    return response;
            });
             //each should return the value.
            res.send({"response":response});
        });


router.post('/bank/:bank/documentOtp/:otp/changeStatus/:status',async(req,res)=>{
    try{
        let _bankName = req.params.bank;
        let otpCode = req.params.otp;
        let status = req.params.status
        console.log(status)
        console.log(_bankName,otpCode);
        const document =  db.collection('Banks').doc(req.params.bank).collection('Account').doc(otpCode.toString());
        let product = await document.get();
        let response = product.data();
        response['status'] = status
        console.log(response);
        db.collection('Banks').doc(req.params.bank).collection('Account').doc(otpCode.toString()).update(response);
        const from = 'Jan Dhan Darshak 2.0';
        const to = '91'+response["phone"];
        var text = "";

        console.log(from,to,text);
        if(status == 'Approved'){
            text = "Your documents have been approved";
        }
        else{
            text = "Your documents have been rejected";
        }
        console.log(from,to,text);
        smsConfig.smsConfig.message.sendSms(from, to, text);
        res.send({"message":"success"});
    }
    catch(error){
        res.send({"message":"error"});
    }
});

router.get('/bank/:bank/documentOtp/:otp/getReport',async(req,res)=>{
    try{
        let _bankName = req.params.bank;
        let otpCode = req.params.otp;
        console.log(_bankName+" "+otpCode);
        const document = db.collection('Banks').doc(req.params.bank).collection('Account').doc(otpCode.toString());
        var fullPath = `${__dirname}`;
         let product = await document.get();
        let response = product.data();
   
        var path1 = fullPath+"/reports/"+req.params.otp+"1.pdf";
        var path2 = fullPath+"/reports/"+req.params.otp+"2.pdf";
        var path3 = fullPath+"/reports/"+req.params.otp+"3.pdf";
        var path4 = fullPath+"/reports/"+req.params.otp+"4.pdf";
        var path5 = fullPath+"/reports/"+req.params.otp+".pdf";
        await basicInfoPdf.createInvoice(response,path1);
        await docPDF.createInvoice(response['aadharUrl'],path2,"AADHAR CARD");
        await docPDF.createInvoice(response['panUrl'],path3,"PAN CARD");
        await docPDF.createInvoice(response['signatureUrl'],path4,"Signature");
        fs.createWriteStream(path5);
        await merge([path1,path2,path3,path4],path5, function(err){
            if(err) {
              return console.log(err)
            }
            console.log('Successfully merged!')
        });
    }
    catch(error){
        res.send({"message":"error"});
    }

    res.download(path5);
});

router.post('/sendOtp',async                                                                                                                                                                                                                                                                                                                                                                                                                                                                                (req,res)=>{
    try {
        var number = req.body.number;
        var otp = req.body.otp;
        const from = 'Jan Dhan Darshak 2.0';
        const to = '91'+number;
        const text = "Hello, Thank you for submitting using the service. Please produce the given OTP"+
        ", so that your account can be created successfully. Go Paperless! Go Cashless!. Your OTP is "+otp;
        smsConfig.smsConfig.message.sendSms(from, to, text);
        return res.send({"message":"success"});      
    } catch (error) {
        console.log("error");
        res.send({"message":"Some error"});
    }
    
})

module.exports = router;
