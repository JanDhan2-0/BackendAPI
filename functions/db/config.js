const functions = require('firebase-functions');
const admin = require("firebase-admin");
const serviceAccount = require('../serviceAccountKey.json');
const Nexmo = require('nexmo');

const nexmo = new Nexmo({
    apiKey: '7b415efd',
    apiSecret: 'HOOYzZKFoVbwtm3H',
  });

module.exports.functions = functions;
module.exports.admin = admin;
module.exports.serviceAccount = serviceAccount;
module.exports.smsConfig = nexmo;