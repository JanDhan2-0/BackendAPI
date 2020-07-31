const express = require('express');
const router = express.Router();
const config = require('../db/config');
const { app } = require('firebase-admin');
const { request, response } = require('express');
const db = config.admin.firestore();

/**
 * DOC
 *  area - Urban(1)/Rural(2)
 *  gender - Male(1)/Female(2)
 *  schemeType - Financial(1)/Health(2)
 */

router.get('/getSchemes', async (req,res)=>{
    try{
        let age = parseInt(req.query.age);
        let area = parseInt(req.query.area);
        let schemeType = parseInt(req.query.schemeType);
        let gender = parseInt(req.query.gender);
        let response = []
        console.log(typeof age)
        console.log(typeof area)
        console.log(age,area,schemeType,gender)
        var data1,data2,data3;
        //these scmhemes are to be changed.
        if(schemeType === 1){
            if(area == 1 && gender == 1){
                if(age < 60){
                     data1 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme1",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                    data2 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme2",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                    data3 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme3",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                }
                else{
                    data1 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme4",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                    data2 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme5",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                    data3 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme6",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                }
            }
            else if(area == 1 && gender == 2){
                if(age < 60){
                    data1 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme7",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                    data2 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme8",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                    data3 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme9",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                }
                else{
                    data1 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme10",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                    data2 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme11",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                    data3 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme12",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                }
            }
            else if(area == 2 && gender == 1){
                if(age < 60){
                    data1 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme13",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                    data2 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme14",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                    data3 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme15",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                }
                else{
                    data1 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme16",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                    data2 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme17",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                    data3 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme18",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                }
            }
            else{
                if(age < 60){

                    data1 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme19",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                    data2 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme20",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                    data3 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme21",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                }
                else{
                    data1 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme22",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                    data2 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme23",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                    data3 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme24",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                }
            }
        }
        else{
            if(area == 1 && gender == 1){
                if(age < 60){

                    data1 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme25",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                    data2 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme26",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                    data3 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme27",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                }
                else{

                    data1 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme28",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                    data2 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme29",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                    data3 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme30",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                }
            }
            else if(area == 1 && gender == 2){
                if(age < 60){
                    data1 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme31",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                    data2 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme32",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                    data3 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme33",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                }
                else{
                    data1 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme34",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                    data2 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme35",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                    data3 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme36",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                }
            }
            else if(area == 2 && gender == 1){
                if(age < 60){
                    data1 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme37",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                    data2 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme38",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                    data3 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme39",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                }
                else{
                    
                    data1 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme40",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                    data2 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme41",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                    data3 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme42",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                }
            }
            else{
                if(age < 60){
                    data1 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme43",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                    data2 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme44",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                    data3 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme45",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                }
                else{
                    
                    data1 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme46",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                    data2 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme47",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                    data3 = {
                        "image":"https://www.sentinelassam.com/wp-content/uploads/2020/01/Cabinet-Secretariat-Government-of-India.jpg",
                        "title":"National Payment Scheme48",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                }
            }
        }
        response.push(data1);
        response.push(data2);
        response.push(data3);
        res.send({"response":response});
    }
    catch(error){
        console.log(error);
        res.send({"message":error});
    }
})


module.exports = router;
