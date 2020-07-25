const express = require('express');
const router = express.Router();
const config = require('../db/config');
const { app } = require('firebase-admin');
const firebase = require('firebase/app')
require('firebase/firebase-auth')

router.post('/create',(req,res)=>{
    config.admin.auth().createUser(
      {
        email: req.body.email,
        emailVerified: true,
        password: req.body.password,
        displayName: req.body.displayName,
        photoUrl: req.body.photoUrl
    }
    ).then((result)=>{
      console.log(result);
      res.send({"message":"Success"});
    }).catch((error)=>{
      console.log(error);
      res.send({"message":"Error"});
    });
  });
  
  
router.post('/signin',(req,res)=>{
  
    const email = req.body.email;
    const password = req.body.password;
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((result)=>{
       res.send(result); 
    })
    .catch((error)=>{
        res.send(error);
    });
  });
  
  

module.exports = router;
