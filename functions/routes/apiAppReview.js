const express = require('express');
const router = express.Router();
const config = require('../db/config');
const { app } = require('firebase-admin');
const { request } = require('express');
const db = config.admin.firestore();
const axios = require('axios');

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
                        const item = {
                            feebdack: doc.data().feedback,
                            location: doc.data().locationAddress,
                            rating: doc.data().rating,
                            date: doc.data().date,
                            tags: doc.data().tags,
                            sentiment: doc.data().sentiment
                        }
                            response.push(item);
                        docCount = docCount + 1;
                        averageRating += doc.data().rating;
                    }
            }
            return response; //each should return the value.
        });
        //  Finally we return the response.
        let averageRatingSend = averageRating/docCount;
        res.send({"response":response,"averageRating":averageRatingSend,"totalReviews":docCount,
        });

});


module.exports = router;