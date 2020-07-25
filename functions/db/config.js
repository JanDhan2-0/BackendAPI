const functions = require('firebase-functions');
const admin = require("firebase-admin");
const serviceAccount = require('../serviceAccountKey.json');
const Nexmo = require('nexmo');

const nexmo = new Nexmo({
    apiKey: '7b415efd',
    apiSecret: 'HOOYzZKFoVbwtm3H',
  });
  
const firebaseConfig = {
    apiKey: "AIzaSyCpgYoUag6cnCnql0Bi-Thp3rxD4qGGUOo",
    authDomain: "jandhandarshakapi.firebaseapp.com",
    databaseURL: "https://jandhandarshakapi.firebaseio.com",
    projectId: "jandhandarshakapi",
    storageBucket: "jandhandarshakapi.appspot.com",
    messagingSenderId: "529082194904",
    appId: "1:529082194904:web:d1d4adffd2d3668fd8b0ad",
    measurementId: "G-CZ5MP223F4"
  };


module.exports.functions = functions;
module.exports.admin = admin;
module.exports.serviceAccount = serviceAccount;
module.exports.smsConfig = nexmo;
module.exports.firebaseAuthConfig = firebaseConfig;