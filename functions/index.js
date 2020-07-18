const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const config = require('./db/config');


config.admin.initializeApp({
  credential: config.admin.credential.cert(config.serviceAccount),
  databaseURL: "https://jandhandarshakapi.firebaseio.com",
  storageBucket: "jandhandarshakapi.appspot.com"
});

const accountRoutes = require('./routes/apiAccount');
const messageRoutes = require('./routes/apiMessage');
const feedbackRoutes = require('./routes/apiFeedback');
const missingRoutes = require('./routes/apiMissing');
const requestRoutes = require('./routes/apiRequest');

const app = express();
app.use(bodyParser.urlencoded({urlencoded: false}));
app.use(bodyParser.json())
app.use(cors({origin: true}))

app.use('/account',accountRoutes); 
app.use('/message',messageRoutes);
app.use('/feedback',feedbackRoutes);
app.use('/missing',missingRoutes);
app.use('/request',requestRoutes);

app.get('/',(req,res)=>{
    res.send("Welcome to Jan Dhan Darshak 2.0 and Hello World");
});

//Uncomment this to deploy.
// exports.app = config.functions.https.onRequest(app)

app.listen(5000||process.env.PORT,()=>{
  console.log(`Server started at port 5000`);
}); 