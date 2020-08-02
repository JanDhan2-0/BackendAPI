const express = require('express');
const router = express.Router();
const config = require('../db/config');
const db = config.admin.firestore();

router.get('/getAtmReports',async (req,res)=>{
    const collection = db.collection('ATMs');
    let response = []
        await collection.get().then(querySnapshot => {
            let docs = querySnapshot.docs;
            console.log(docs);
            for(let doc of docs){
                    if(doc.data().numberOfReports > 10){
                        response.push(doc.data());
                    }    
                }
            });
        res.send({"reports":response});
        });


router.post('/updateAtmData/:place_id',async (req,res)=>{
    //All we have to do set the reports to zero. - Marking that it is functional.
    try{
        db.collection('ATMs').doc(req.params.place_id).update({"numberOfReports":0});
        res.send({"message":"Success"});
    }
    catch(error){
        res.send({"message":"error"});
    }    
});

module.exports = router;