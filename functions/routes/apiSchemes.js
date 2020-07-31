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
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                     data2 =  {
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                     data3 =  {
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                }
                else{
                    data1 = {
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                     data2 =  {
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                     data3 =  {
                        "title":"National Payment Scheme",
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
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                     data2 =  {
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                     data3 =  {
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                }
                else{
                    
                    data1 = {
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                     data2 =  {
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                     data3 =  {
                        "title":"National Payment Scheme",
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
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                     data2 =  {
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                     data3 =  {
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                }
                else{
                    data1 = {
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                     data2 =  {
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                     data3 =  {
                        "title":"National Payment Scheme",
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
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                     data2 =  {
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                     data3 =  {
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                }
                else{
                    data1 = {
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                     data2 =  {
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                     data3 =  {
                        "title":"National Payment Scheme",
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
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                     data2 =  {
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                     data3 =  {
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                }
                else{

                    data1 = {
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                     data2 =  {
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                     data3 =  {
                        "title":"National Payment Scheme",
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
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                     data2 =  {
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                     data3 =  {
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                }
                else{
                    data1 = {
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                     data2 =  {
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                     data3 =  {
                        "title":"National Payment Scheme",
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
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                     data2 =  {
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                     data3 =  {
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                }
                else{
                    
                    data1 = {
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                     data2 =  {
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                     data3 =  {
                        "title":"National Payment Scheme",
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
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                     data2 =  {
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                     data3 =  {
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                }
                else{
                    
                    data1 = {
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                     data2 =  {
                        "title":"National Payment Scheme",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme.",
                        "Description":"National Pension System or NPS is a government-sponsored pension scheme. It was launched in January 2004 for government employees. However, in 2009, it was opened to all sections. The scheme allows subscribers to contribute regularly in a pension account during their working life. On retirement, subscribers can withdraw a part of the corpus in a lumpsum and use the remaining corpus to buy an annuity to secure a regular income after retirement.",
                        "Benefits":"t is voluntary - A Subscriber can contribute at any point of time in a Financial Year and also change the amount he wants to set aside and save every year",
                        "eligibility":"Any Indian citizen between 18 and 60 years can join NPS. The only condition is that the person must comply with know your customer (KYC) norms.",
                        "documentsRequired":"1. PRAN card (original)\n2. Attested copy of proof of identity\n3. Attested copy of proof of address\n4. A cancelled cheque"
                    }
                     data3 =  {
                        "title":"National Payment Scheme",
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
