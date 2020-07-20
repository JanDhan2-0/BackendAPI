1. API for getting reviews (GET)
    1. url: localhost:5000/feedback/bank/:bank/touchPoint/:touchPoint/reviews
    2. /:bank - To be passed. (SBI,HDFC,BOB,PNB)
    3. /:touchPoint - To be passed. (ATM/BANK)
    4. response = {"response":response,"averageRating":averageRatingSend,"totalReviews":docCount, "ratingDetails":{
            "1star":star1,"2star":star2,"3star":star3,"4star":star4,"5star":star5,
        }}
    5. response each dcument schema = {
                            feebackId: doc.id,
                            feebdack: doc.data().feedback,
                            location: doc.data().locationAddress,
                            feedbackBy: doc.data().name,
                            rating: doc.data().rating,
                            date: doc.data().date,
                            issue: doc.data().issue
                        }

2. API for Chart for problem vs number of people reporting that. (GET)
        1. url: localhost:5000/feedback/bank/:bank/feedbackChart
    2. /:bank - To be passed. (SBI,HDFC,BOB,PNB)
    3. response = {"response":{
        "ATM Empty":issue1,"ATM Not Working":issue2,"BANK Employee misconduct":issue3,"Regarding bribery":issue4,"Other Bank related Issues":issue5,"Other ATM related issues.":issue6
    }}

3. API for broadcasting updates to the bank (POST)
    1. url: localhost:5000/message/getUpdates/
    2. post body: title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            date: req.body.date,
            location: req.body.location,
            time: req.body.time,
            postBy: req.body.postBy,
            additionalFileUrl: req.body.additionalFileUrl
    3. The above data iis to be sent.
    4. Corresponding get api will fetch at the application.

4. API for missingBankLocations vs count
    1. url: localhost:5000/missing/bank/:bank/touchPoint/:touchPoint/getDetails
    2. send bank and touchPoint in the request params.
    3. The resulting data is as follows.
                [
            {
                " Pachenda Rd, Gandhi Colony": {
                    "latitude": 29.47990684187036,
                    "longitude": 77.71990575827658,
                    "count": 3,
                    "reports": [
                        {
                            "bank": "SBI",
                            "latittude": 29.479906914837198,
                            "longitude": 77.71990366280079,
                            "missingRequestId": "288282",
                            "name": "Raghav",
                            "phone": "8384852943",
                            "touchPoint": "BANK"
                        },
                        {
                            "bank": "SBI",
                            "latittude": 29.479907206704567,
                            "longitude": 77.71990802139044,
                            "missingRequestId": "866265",
                            "name": "Raghav",
                            "phone": "8384852943",
                            "touchPoint": "BANK"
                        },
                        {
                            "bank": "SBI",
                            "latittude": 29.479906622969832,
                            "longitude": 77.71990567445755,
                            "missingRequestId": "955061",
                            "name": "Raghav",
                            "phone": "8384852943",
                            "touchPoint": "BANK"
                        }
                    ]
                }
            },
            {
                " Abis": {
                    "latitude": "31.1975844",
                    "longitude": "29.959833900000007",
                    "count": 1,
                    "reports": [
                        {
                            "bank": "SBI",
                            "latittude": 31.1975844,
                            "longitude": 29.959833900000007,
                            "missingRequestId": "685022",
                            "name": "Rahul",
                            "phone": "8384852943",
                            "touchPoint": "BANK"
                        }
                    ]
                }
            }
        ]
    Array of objects, with object key as the area and the value contains each of number of requests and the details of those requests and the avergae latitude and longitude of the place.
    
5. Request vs count same as above, just the url changes
    url: localhost:5000/request/bank/:bank/touchPoint/:touchPoint/getDetails

Status
    1. Information Broadcasting API - Done
    
    2. Charts 3 API - Done (Just that area names does not look very proper because of geocode api, and clubbing distance is 500metres.)
    
    3. Feedback API according to stars - Done.
    
    4. Account Details Api - This is going very very very confusing schema wise. 
                            Need to discuss with Nimish and Tanisha. - Not Done.
<<<<<<< HEAD

6. 
    1. url: localhost:5000/account/bank/:bank/documentOtp/:otp/changeStatus/status - Sends message to user also. (POST)
            status: Approved/Rejected.
            bank: Any of the registered banks.
            otp: to be passed given by the user.
    2. url: localhost:5000/account/bank/:bank/documentOtp/:otp/getData
            bank: Any of the registered banks.
            otp: to be passed given by the user.
            data received as: 
            {
    "phone": "8384852943",
    "formId": "SBI253665",
    "aadharUrl": "https://firebasestorage.googleapis.com/v0/b/jandhandarshakapi.appspot.com/o/Aadhar%2Faadhaar_card253665?alt=media&token=b8495056-170c-45aa-b5dc-36c5b8169a50",
    "signatureUrl": "https://firebasestorage.googleapis.com/v0/b/jandhandarshakapi.appspot.com/o/Signature%2Fsig253665?alt=media&token=219e72da-4f68-44f4-a15f-9e47af967b1e",
    "email": "raghav.ddps2@gmail.com",
    "dob": "12/02/2020",
    "purpose": "A/C Creation",
    "status": "Approved",
    "name": "Raghav M",
    "account_creation_date": "2020-07-18",
    "address": "Ankit Vihar",
    "uniqueId": 253665,
    "bank": "SBI",
    "panUrl": "https://firebasestorage.googleapis.com/v0/b/jandhandarshakapi.appspot.com/o/PAN%2Fpan_card253665?alt=media&token=6e2f82fa-457d-4c93-9824-33c2941fecd0"
}
    3. Get Report
        url: localhost:5000/account/bank/:bank/documentOtp/:otp/getReport
        usual parameters. Send the report.
        This might not work - If not working, please let me know. I will fix it.
    
    4. GET All Account Uploads.
        url: localhost:5000/account/bank/:bank/getAll
        bank: SBI/HDFC/BOB
        This will give all the document uploads.
=======
>>>>>>> 200474501f46593646e9da8ad63dfbbd6bc28be9
