const express = require('express');
const router = express.Router();
const config = require('../db/config');
const { app } = require('firebase-admin');
const { request } = require('express');
const db = config.admin.firestore();


router.get('/getUpdates', async (req,res)=>{
    try{


        const collection = db.collection('bankUpdates');
        let response = [];
        //Once we get all of it, what we do is, we get each doc.
        //This happens in streams.
        await collection.get().then(querySnapshot => {
            let docs = querySnapshot.docs;
            for(let doc of docs){
                const item = {
                    id: doc.id,
                    title: doc.data().title,
                    description: doc.data().description,
                    imageUrl: doc.data().imageUrl,
                    date: doc.data().date,
                    location: doc.data().location,
                    time: doc.data().time,
                    postBy: doc.data().postBy,
                    additionalFileUrl: doc.data().additionalFileUrl
                }
                response.push(item);
            }
            return response; //each should return the value.
        });
        //  Finally we return the response.
        res.send({"response":response});
    }
    catch(error){
        console.log(error);
        res.send({"response":"Some error occured"});
    }
})

router.post('/postUpdate',async (req,res)=>{

    try{
        var data = {
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            date: req.body.date,
            location: req.body.location,
            time: req.body.time,
            postBy: req.body.postBy,
            additionalFileUrl: req.body.additionalFileUrl
        }
        console.log(data);
        await db.collection('bankUpdates').doc('/'+req.body.id+'/').create(data);
        return res.send({"message":"success"});
   }
   catch(error){
       console.log(error)
       res.send({"message":"Error"});
   }
});

module.exports = router;