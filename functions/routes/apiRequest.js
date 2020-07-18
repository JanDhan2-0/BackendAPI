const express = require('express');
const router = express.Router();
const config = require('../db/config');
const { app } = require('firebase-admin');
const { request } = require('express');
const db = config.admin.firestore();
const axios = require('axios');

function distanceCalc(lat1, lon1, lat2, lon2, unit) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		if (unit=="K") { dist = dist * 1.609344 }
		if (unit=="N") { dist = dist * 0.8684 }
		return dist;
	}
}

router.get('/bank/:bank/touchPoint/:touchPoint/getDetails',async (req,res)=>{
    
    //console.log(req.params.bank);
    var result = [];
    const collection = db.collection('Banks').doc(req.params.bank).collection('Request');
    let response = {"details":[]};
        await collection.get().then(querySnapshot => {
            let docs = querySnapshot.docs;
            //console.log(docs);
            for(let doc of docs){
                if(doc.data().touchPoint == req.params.touchPoint){
                    //console.log(doc.data().touchPoint)
                    const item = {
                        "bank":doc.data().bank,
                        "latittude":parseFloat(doc.data().latitude),
                        "longitude":parseFloat(doc.data().longitude),
                        "location":doc.data().locationAddress,
                        "missingRequestId":doc.id,
                        "name":doc.data().name,
                        "phone":doc.data().phone,
                        "touchPoint":doc.data().touchPoint,
                        "comments":doc.data().comments
                    }
                    //console.log(item);
                    //console.log(response["details"].length)
                    //console.log(response);
                    if(response["details"].length == 0){
                        response["details"].push({
                            "latitude": parseFloat(doc.data().latitude),
                            "longitude":parseFloat(doc.data().longitude),
                            "reports":[item]
                        });
                    }
                    else{
                        var latitude = parseFloat(doc.data().latitude);
                        var longitude = parseFloat(doc.data().longitude);
                        var flag = 0;
                        detail = response["details"];
                        for(var i=0;i<detail.length;i++){
                            // //console.log(detail);
                            var latitudeComp = detail[i]["latitude"];
                            var longitudeComp = detail[i]["longitude"];
                            //console.log(longitudeComp,latitudeComp,latitude,longitude);
                            var distance = distanceCalc(latitude,longitude,latitudeComp,longitudeComp,"K");
                            console.log(distance+"KM");
                            if(distance < 0.5){
                                //console.log( (latitude + latitudeComp)/2);
                                detail[i]['latitude'] = (parseFloat(latitude) + parseFloat(latitudeComp))/2;
                                //console.log(detail[i]["latitude"]+"hi");
                                detail[i]["longitude"] = (parseFloat(longitude) + parseFloat(longitudeComp))/2
                                detail[i]["reports"].push(item);
                                //console.log(detail[i]["reports"]);
                                flag = 1;
                                break;
                            }
                        }
                        if(flag == 0){
                            //form a new entry
                            response["details"].push({
                                "latitude": doc.data().latitude,
                                "longitude":doc.data().longitude,
                                "reports":[item]
                            });
                        }
                    }
                }
            }
            return response; //each should return the value.
        });
        console.log(response["details"]);
        let detailArr = response["details"];
        for(let detail of detailArr){
            var latitude = detail['latitude'];
            var longitude = detail['longitude'];
            console.log(latitude,longitude);
            var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyCILGP87TZPkXUobQfqDp9mkPA7IXnEGXU`;            
            await axios.get(geocodeUrl)
            .then(response => {
                var Jsondata = response.data;
                var area = Jsondata["results"][0]["formatted_address"]
                console.log(area);
                var chars = area.split(',');
                var cutArea = "";
                if(chars.length <= 3){
                    cutArea = chars.slice(0,chars.length-2);
                }
                else{
                    cutArea = chars.slice(0,chars.length-3);
                }
                cutArea = cutArea.join(',')
                    // console.log(cutArea);
                var temp = {}
                temp[cutArea] = {
                    "latitude":latitude,
                    "longitude":longitude,
                    "count":detail["reports"].length,
                    "reports":detail["reports"]
                }
                console.log("hi")
                result.push(temp);
                console.log(result);
                return result;
            })
            .catch(error => {
            console.log(error);
            });
            
        }
    res.send(result); 
});


module.exports = router;