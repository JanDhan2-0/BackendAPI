const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const config = require('./db/config');
const port = process.env.PORT||5000;

config.admin.initializeApp({
  credential: config.admin.credential.cert(config.serviceAccount),
  databaseURL: "https://jandhandarshakapi.firebaseio.com",
  storageBucket: "jandhandarshakapi.appspot.com",
});

//For Auth.
const firebase = require('firebase/app')
require('firebase/firebase-auth')
firebase.initializeApp(config.firebaseAuthConfig);

const accountRoutes = require('./routes/apiAccount');
const messageRoutes = require('./routes/apiMessage');
const feedbackRoutes = require('./routes/apiFeedback');
const missingRoutes = require('./routes/apiMissing');
const requestRoutes = require('./routes/apiRequest');
const schemesRoutes = require('./routes/apiSchemes');
const authRoutes = require('./routes/apiAuth');

const app = express();
app.use(bodyParser.urlencoded({urlencoded: false}));
app.use(bodyParser.json())
app.use(cors({origin: true}))

app.use('/account',accountRoutes); 
app.use('/message',messageRoutes);
app.use('/feedback',feedbackRoutes);
app.use('/missing',missingRoutes);
app.use('/request',requestRoutes);
app.use('/authentication',authRoutes);
app.use('/schemes',schemesRoutes);

app.get('/',(req,res)=>{
    res.send("Welcome to Jan Dhan Darshak 2.0 and Hello World");
});


app.listen(port,()=>{
  console.log(`Server started at port 5000`);
}); 