const express = require('express');
const router = express.Router();
const config = require('../db/config');
const { app } = require('firebase-admin');
const { request } = require('express');
const db = config.admin.firestore();
var http = require('http');
const smsConfig = require('../db/config');
const firebase = require('firebase/app');
const { merge } = require('./apiAccount');
var request1 = require('request');


router.post('/feedbackNotifications',async (req,res)=>{
    console.log("hi")
    try{
        //update things in database accodingly.
        console.log("hia")
        var feedback = req.body.feedback;
        var deviceId = req.body.deviceId;
        console.log(feedback)
        console.log(deviceId)
        var docRef = db.collection("devices").doc(deviceId);
        docRef.get().then(function(doc) {
            if (doc.exists) {
                feedbacks = doc.data()['feedbacks']
                feedbacks.push(feedback)
                docRef.update({"feedbacks":feedbacks},{merge:true})
            } else {
                docRef.set({"feedbacks":[feedback]});
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
        
        ans = (await docRef.get()).data()['feedbacks']
            var options = {
            uri: 'https://18ebd5d5d353.ngrok.io/notification',
            method: 'POST',
            json: {
                "feedbacks": ans
            }
            };
            request1(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log("HI");
                console.log(body) // Print the shortened url.
                docRef.update({"Interests":body},{merge:true})
            }
            var number = deviceId;
            const from = 'Jan Dhan Darshak 2.0';
            const to = '91' + number;
            let text = "Hello"

            Object.keys(body).forEach(function(key) {
                message = key + "\n" + body[key]+"\n"+"\n"
                smsConfig.smsConfig.message.sendSms(from, to,message);
             });
            console.log(text);
            res.send({"result":body})
            });
    }
    catch(error){
        res.send({"result":"error"});
    }
});

router.get('/bank/:bank/touchPoint/:touchPoint/reviews',async (req,res)=>{
    console.log(req.params.bank);
    const collection = db.collection('Banks').doc(req.params.bank).collection('Feedback');
    let response = [];
    let averageRating = 0;
    let docCount = 0;
    let star1 = 0;
    let star2 = 0;
    let star3 = 0;
    let star4 = 0;
    let star5 = 0;
        await collection.get().then(querySnapshot => {
            let docs = querySnapshot.docs;
            console.log(docs);
            for(let doc of docs){
                    if(doc.data().touchPoint == req.params.touchPoint){
                        if(doc.data().rating == 1){
                            star1 += 1;
                        }
                        else if(doc.data().rating == 2){
                            star2 += 1;
                        }
                        else if(doc.data().rating == 3){
                            star3 += 1;
                        }
                        else if(doc.data().rating == 4){
                            star4 += 1;
                        }
                        else if(doc.data().rating == 5){
                            star5 += 1;
                        }
                        else{
                            //None.
                        }
                        const item = {
                            feebackId: doc.id,
                            feebdack: doc.data().feedback,
                            location: doc.data().locationAddress,
                            feedbackBy: doc.data().name,
                            rating: doc.data().rating,
                            date: doc.data().date,
                            issue: doc.data().issue
                        }
                        docCount = docCount + 1;
                        averageRating += doc.data().rating;
                        response.push(item);
                    }
            }
            return response; //each should return the value.
        });
        //  Finally we return the response.
        let averageRatingSend = averageRating/docCount;
        res.send({"response":response,"averageRating":averageRatingSend,"totalReviews":docCount,"ratingDetails":{
            "1star":star1,"2star":star2,"3star":star3,"4star":star4,"5star":star5,
        }});

});

router.get('/bank/:bank/feedbackChart',async (req,res)=>{
    let issue1 = 0;
    let issue2 = 0;
    let issue3 = 0;
    let issue4 = 0;
    let issue5 = 0;
    let issue6 = 0;

    const collection = db.collection('Banks').doc(req.params.bank).collection('Feedback');

    await collection.get().then(querySnapshot => {
        let docs = querySnapshot.docs;
        console.log(docs);
        for(let doc of docs){
            if(doc.data().issue == 1){
                issue1 += 1;
            }        
            else if(doc.data().issue == 2){
                issue2 += 1;
            } 
            else if(doc.data().issue == 3){
                issue3 += 1;
            } 
            else if(doc.data().issue == 4){
                issue4 += 1;
            } 
            else if(doc.data().issue == 5){
                issue5 += 1;
            } 
            else if(doc.data().issue == 6){
                issue6 += 1;
            } 
        }
    });
    //  Finally we return the response.
    res.send({"response":{
        "ATM Empty":issue1,"ATM Not Working":issue2,"BANK Employee misconduct":issue3,"Regarding bribery":issue4,"Other Bank related Issues":issue5,"Other ATM related issues.":issue6
    }});
});

module.exports = router;