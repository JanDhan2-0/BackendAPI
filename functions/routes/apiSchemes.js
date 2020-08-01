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
                        "title": "Pradhan Mantri Jan Dhan Yojana",
                        "url": "https://pmjdy.gov.in/",
                        "description": "Pradhan Mantri Jan-Dhan Yojana (PMJDY) is National Mission for Financial Inclusion to ensure access to financial services, namely, Banking/ Savings & Deposit Accounts, Remittance, Credit, Insurance, Pension in an affordable manner.",
                        "image": "https://i.ibb.co/L0y5nFB/PM-JDYlogo.jpg",
                        "Benefits":"Interest on deposit.\nAccidental insurance cover of Rs. 2 lakhs\nNo minimum balance required.\nThe scheme provide life cover of Rs. 30,000/- payable on death of the beneficiary, subject to fulfillment of the eligibility condition.\nEasy Transfer of money across India\nBeneficiaries of Government Schemes will get Direct Benefit Transfer in these accounts.",
                        "eligibility":"",
                        "documentsRequired":"Any of the below \n the passport,\nthe driving licence,\nthe Permanent Account Number (PAN) Card,\nthe Voter’s Identity Card issued by Election Commission of India",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      },
                      data2 = {
                        "title": "Pradhan Mantri Mudra Yojana",
                        "url": "https://www.mudra.org.in/",
                        "description": "Pradhan Mantri MUDRA Yojana (PMMY) is a scheme launched by the Hon’ble Prime Minister on April 8, 2015 for providing loans up to 10 lakh to the non-corporate, non-farm small/micro enterprises. These loans are classified as MUDRA loans under PMMY. These loans are given by Commercial Banks, RRBs, Small Finance Banks, MFIs and NBFCs.",
                        "image": "https://www.saraswatbank.com/images/Thumbnail_393_pmmy%20log.jpg",
                        "Benefits":"MUDRA Architecture Indigenously Conceived for Indian context\nInclusion of Last Mile Financiers - a game changing idea\nHelp expand Access to finance for micro enterprises\nLower Cost of Finance\nCredit plus Approach\nMass Entrepreneurship Development and Growth\nEmployment Generation, Higher GDP Growth",
                        "eligibility":"",
                        "documentsRequired":"Mudra application form\nVehicle loan application form\n2 passport size colour photographs\nPhoto Identity proof\nAddress proof\nIncome proof\nBank statement (last 6 months)",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      },
                      data3 = {
                        "title": "Pradhan Mantri Jeevan Jyoti Bima Yojana",
                        "url": "https://financialservices.gov.in/insurance-divisions/Government-Sponsored-Socially-Oriented-Insurance-Schemes/Pradhan-Mantri-Jeevan-Jyoti-Bima-Yojana(PMJJBY)",
                        "description": "PM Jeevan Jyoti Bima Yojana was established to provide life insurance security to the poor and low-income section of the society. This scheme can be availed by people aged between 18 years to 50 years. They must have a bank account to be eligible for Pradhan Mantri Jeevan Jyoti Bima Yojana. ",
                        "image": "https://www.hindikiduniya.com/wp-content/uploads/Pradhan-Mantri-Jeevan-Jyoti-Bima-Yojana.jpg",
                        "Benefits":"PMJJBY provides a death coverage of Rs2,00,000 to the beneficiary of the policy in the case of the sudden demise of the insured person.\nAs PMJJBY is a pure term insurance plan, it does not offer any maturity or surrender benefit.\nThe premium paid towards the policy is eligible for tax benefits as under section 80C of the Income Tax Act.\nPMJJBY provides a risk coverage of 1 year. However, as this is renewable policy, it can be renewed yearly.",
                        "eligibility":"Any person who is between 18- 50 years old and has a savings account can enroll for this scheme through the participating banks.\nOne can join this scheme with only one saving bank account even if they have multiple bank accounts\nTo avail of the benefits offered by this policy, it is mandatory to link your Aadhar card to the eligible/participatory bank account.",
                        "documentsRequired":"",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      }
                }
                else{
                    data1 = {
                        "title": "Indira Gandhi National Old Age Pension Scheme ",
                        "url": "http://www.nsap.nic.in/statedashboard.do?method=intialize",
                        "description": "The Indira Gandhi National Old Age Pension Scheme is a non-contributory old age pension scheme that covers Indians who are 60 years and above and live below the poverty line. All individuals above the age of 60 who live below the poverty line are eligible to apply for this pension. All pension beneficiaries aged 60–79 receive a monthly pension",
                        "image":"https://www.pmawasyojana.co.in/wp-content/uploads/2018/04/Indira-Gandhi-National-Old-Age-Pension-Scheme-Uttar-Pradesh.jpg",
                        "Benefits":"A monthly pension of Rs 600 - Rs 1000 depending upon the state share of the pension.",
                        "eligibility":"Age : 60 years and above\nShould be Below Poverty Line (BPL).",
                        "documentsRequired":"",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      },
                      data2 = {
                        "title": "Pradhan Mantri Vaya Vandana Scheme",
                        "url": "https://financialservices.gov.in/insurance-divisions/Government-Sponsored-Socially-Oriented-Insurance-Schemes/Pradhan-Mantri-Vaya-Vandana-Yojana(PMVVY)",
                        "description": "Based on the success and popularity of Varishtha Pension Bima Yojana 2003 (VPBY-2003), Varishtha Pension Bima Yojana 2014 (VPBY-2014) schemes, and to protect elderly persons aged 60 years and above against a future fall in their interest income due to the uncertain market conditions, as also to provide social security during old age, it is decided to launch a simplified scheme of assured pension of 8% ",
                        "image":"https://thestateindia.com/wp-content/uploads/2020/02/images-9-9-1280x720.jpeg",
                        "Benefits":"A monthly pension of Rs 600 - Rs 1000 depending upon the state share of the pension.",
                        "eligibility":"Age : 60 years and above\nShould be Below Poverty Line (BPL).",
                        "documentsRequired":"",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      },
                      data3 = {
                        "title": "Pradhan Mantri Kisan Pension Yojana",
                        "url": "https://pmkmy.gov.in/",
                        "description": "Under this scheme, a minimum fixed pension of Rs.3,000/- is provided to the small and marginal farmers, subject to certain exclusion criteria, on attaining the age of 60 years. It is a voluntary and contributory pension scheme. The eligible farmer is required to contribute to a Pension Fund between Rs.55 to Rs.200 per month depending on the entry age.",
                        "image":"https://www.jankalyanportal.in/wp-content/uploads/2019/07/Online-Registration-Pradhan-Mantri-Kisan-Pension-Yojana-2019-Rs.-3000-Scheme-PMKPY.jpg",
                        "Benefits":"Assured pension of Rs. 3000/- month\nVoluntary and Contributory Pension Scheme\nMatching Contribution by the Government of India",
                        "eligibility":"For Small and Marginal Farmers\nCultivable land up to 2 hectares as per land records of the concerned State/UT",
                        "documentsRequired":"",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      }
                }
            }
            else if(area == 1 && gender == 2){
                if(age < 60){
                    data1 = {
                        "title": "Udyogini Yojana Scheme",
                        "url": "https://mhrd.gov.in/rmsa",
                        "description": "Implemented by the Women Development Corporation, Udyogini is a scheme to provide subsidised loans to aspiring women entrepreneurs from rural and underdeveloped areas. Various financial institutions provide loans under the scheme.By offering necessary financial support, the scheme aims to promote entrepreneurship, financial empowerment and self-reliance among women in these areas. The Udyogini scheme also aims to build micro-enterprises that support the overall growth of the country.",
                        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyQeYmRoaf65nrn3FHYY6RDUJFgZIHg68POw&usqp=CAU",
                        "Benefits":"High-value loan amount\nApplicants can avail a loan of up to Rs.3 lakh under this scheme, provided they meet the basic eligibility criteria.\n\nLoans available for 88 small-scale industries\nThe Udyogini loan can be availed to start businesses categorised under 88 small-scale industries. Some of them are fish business, bakery, grocery, sewing, library, incense stick manufacturing, trade related to poultry and dairy, etc. Interest-free loans under the scheme are also available for women starting a business in the agriculture sector.\nTraining for skill development\nThis scheme also aims to impart functional skills to women regarding business planning, pricing, costing, feasibility, etc. alongside financial support.\np to 30% loan subsidy\nThe Government proposes up to 30% subsidy on loans extended under this scheme to make repayment affordable for women.\nTransparent evaluation of the beneficiary\nThe evaluation process of Udyogini Yojana application form ensures a transparent assessment for beneficiary selection.",
                        "eligibility":"Women enterprises consisting of all units managed by one or more women entrepreneurs in proprietary concern or in which she/they individually or jointly have a share capital of not less than 51% as partners/share holders /directors of private limited company/members of co-operative society.",
                        "documentsRequired":"Duly filled Application Form\nPassport-sized photographs\nAadhaar Card\nBirth Certificate\nBelow Poverty Line (BPL) card\nCaste Certificate\nCopy of Bank passbook (account, bank and branch names, holder name, IFSC and MICR)\nIncome Certificate\nRation Card",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      }
                      data2 = {
                        "title": "Cent Kalyani Scheme ",
                        "url": "https://www.centralbankofindia.co.in/English/Cent_Kalyani.aspx",
                        "description": "Cent Kalyani Scheme is a unique loan scheme from the Central Bank of India. It aims at financing women’s business dreams and helps them expand their business too. This means, women can apply for this scheme to fund their working capital, purchasing machinery or equipment or other relevant business needs. Women from micro and small enterprises can avail this loan scheme.",
                        "image":"https://livfinfinance.files.wordpress.com/2018/09/cent-kalyani-scheme.jpg?w=760",
                        "Benefits":"",
                        "eligibility":"Woman Entrepreneurs, above 18 years of age.\nNo income ceiling for assistance.",
                        "documentsRequired":"KYC norms to be ensured. Name changed after marriage to be kept in record.\nStandard Application form approved by IBA (already circulated and is available in website)\nBalance Sheets for the past 2 years along with estimated & projected Balance Sheets and other financial statements, where ever applicable.",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      }
                      data3 = {
                        "title": "Annapurna Scheme",
                        "url": "http://www.fcp.bih.nic.in/Annapurna.htm",
                        "description": "Annapurna Yojna is a centrally sponsored scheme which has been executed since 1st April, 2001 in this state. This scheme has been amalgamated in to the State Plan since year 2002-03. Under this scheme old destitutes who are not getting the National old age pension (NOAPS) but have its eligibility, are being provided 10 kg food-grain (6 kg wheat + 4 kg rice) per month free of cost as Food Security.",
                        "image":"https://pradhanmantrivikasyojana.in/wp-content/uploads/2017/04/annapurna-yojna-2.jpg",                     
                        "Benefits":"10 Kgs of food grains is distributed per month free of cost to destitute above the age of 65 years with no or meager subsistence.  ",
                        "eligibility":"Should be a destitute women",
                        "documentsRequired":"",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      } 
                }
                else{
                    data1 = {
                        "title": "Indira Gandhi National Old Age Pension Scheme ",
                        "url": "http://www.nsap.nic.in/statedashboard.do?method=intialize",
                        "description": "The Indira Gandhi National Old Age Pension Scheme is a non-contributory old age pension scheme that covers Indians who are 60 years and above and live below the poverty line. All individuals above the age of 60 who live below the poverty line are eligible to apply for this pension. All pension beneficiaries aged 60–79 receive a monthly pension",
                        "image":"https://www.pmawasyojana.co.in/wp-content/uploads/2018/04/Indira-Gandhi-National-Old-Age-Pension-Scheme-Uttar-Pradesh.jpg",
                        "Benefits":"A monthly pension of Rs 600 - Rs 1000 depending upon the state share of the pension.",
                        "eligibility":"Age : 60 years and above\nShould be Below Poverty Line (BPL).",
                        "documentsRequired":"",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      },
                      data2 = {
                        "title": "Annapurna Scheme",
                        "url": "http://www.fcp.bih.nic.in/Annapurna.htm",
                        "description": "Annapurna Yojna is a centrally sponsored scheme which has been executed since 1st April, 2001 in this state. This scheme has been amalgamated in to the State Plan since year 2002-03. Under this scheme old destitutes who are not getting the National old age pension (NOAPS) but have its eligibility, are being provided 10 kg food-grain (6 kg wheat + 4 kg rice) per month free of cost as Food Security.",
                        "image":"https://pradhanmantrivikasyojana.in/wp-content/uploads/2017/04/annapurna-yojna-2.jpg",                     
                        "Benefits":"10 Kgs of food grains is distributed per month free of cost to destitute above the age of 65 years with no or meager subsistence.  ",
                        "eligibility":"Should be a destitute women",
                        "documentsRequired":"",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      },
                      data3 = {
                        "title": "Pradhan Mantri Vaya Vandana Scheme",
                        "url": "https://financialservices.gov.in/insurance-divisions/Government-Sponsored-Socially-Oriented-Insurance-Schemes/Pradhan-Mantri-Vaya-Vandana-Yojana(PMVVY)",
                        "description": "Based on the success and popularity of Varishtha Pension Bima Yojana 2003 (VPBY-2003), Varishtha Pension Bima Yojana 2014 (VPBY-2014) schemes, and to protect elderly persons aged 60 years and above against a future fall in their interest income due to the uncertain market conditions, as also to provide social security during old age, it is decided to launch a simplified scheme of assured pension of 8% ",
                        "image":"https://thestateindia.com/wp-content/uploads/2020/02/images-9-9-1280x720.jpeg",
                        "Benefits":"A monthly pension of Rs 600 - Rs 1000 depending upon the state share of the pension.",
                        "eligibility":"Age : 60 years and above\nShould be Below Poverty Line (BPL).",
                        "documentsRequired":"",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      }
                }
            }
            else if(area == 2 && gender == 1){
                if(age < 60){
                    data1 = {
                        "title": "Pradhan Mantri Jan Dhan Yojana",
                        "url": "https://pmjdy.gov.in/",
                        "description": "Pradhan Mantri Jan-Dhan Yojana (PMJDY) is National Mission for Financial Inclusion to ensure access to financial services, namely, Banking/ Savings & Deposit Accounts, Remittance, Credit, Insurance, Pension in an affordable manner.",
                        "image": "https://i.ibb.co/L0y5nFB/PM-JDYlogo.jpg",
                        "Benefits":"Interest on deposit.\nAccidental insurance cover of Rs. 2 lakhs\nNo minimum balance required.\nThe scheme provide life cover of Rs. 30,000/- payable on death of the beneficiary, subject to fulfillment of the eligibility condition.\nEasy Transfer of money across India\nBeneficiaries of Government Schemes will get Direct Benefit Transfer in these accounts.",
                        "eligibility":"",
                        "documentsRequired":"Any of the below \n the passport,\nthe driving licence,\nthe Permanent Account Number (PAN) Card,\nthe Voter’s Identity Card issued by Election Commission of India",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      },
                      data2 = {
                        "title": "Pradhan Mantri Mudra Yojana",
                        "url": "https://www.mudra.org.in/",
                        "description": "Pradhan Mantri MUDRA Yojana (PMMY) is a scheme launched by the Hon’ble Prime Minister on April 8, 2015 for providing loans up to 10 lakh to the non-corporate, non-farm small/micro enterprises. These loans are classified as MUDRA loans under PMMY. These loans are given by Commercial Banks, RRBs, Small Finance Banks, MFIs and NBFCs.",
                        "image": "https://www.saraswatbank.com/images/Thumbnail_393_pmmy%20log.jpg",
                        "Benefits":"MUDRA Architecture Indigenously Conceived for Indian context\nInclusion of Last Mile Financiers - a game changing idea\nHelp expand Access to finance for micro enterprises\nLower Cost of Finance\nCredit plus Approach\nMass Entrepreneurship Development and Growth\nEmployment Generation, Higher GDP Growth",
                        "eligibility":"",
                        "documentsRequired":"Mudra application form\nVehicle loan application form\n2 passport size colour photographs\nPhoto Identity proof\nAddress proof\nIncome proof\nBank statement (last 6 months)",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      },
                      data3 = {
                        "title": "Pradhan Mantri Jeevan Jyoti Bima Yojana",
                        "url": "https://financialservices.gov.in/insurance-divisions/Government-Sponsored-Socially-Oriented-Insurance-Schemes/Pradhan-Mantri-Jeevan-Jyoti-Bima-Yojana(PMJJBY)",
                        "description": "PM Jeevan Jyoti Bima Yojana was established to provide life insurance security to the poor and low-income section of the society. This scheme can be availed by people aged between 18 years to 50 years. They must have a bank account to be eligible for Pradhan Mantri Jeevan Jyoti Bima Yojana. ",
                        "image": "https://www.hindikiduniya.com/wp-content/uploads/Pradhan-Mantri-Jeevan-Jyoti-Bima-Yojana.jpg",
                        "Benefits":"PMJJBY provides a death coverage of Rs2,00,000 to the beneficiary of the policy in the case of the sudden demise of the insured person.\nAs PMJJBY is a pure term insurance plan, it does not offer any maturity or surrender benefit.\nThe premium paid towards the policy is eligible for tax benefits as under section 80C of the Income Tax Act.\nPMJJBY provides a risk coverage of 1 year. However, as this is renewable policy, it can be renewed yearly.",
                        "eligibility":"Any person who is between 18- 50 years old and has a savings account can enroll for this scheme through the participating banks.\nOne can join this scheme with only one saving bank account even if they have multiple bank accounts\nTo avail of the benefits offered by this policy, it is mandatory to link your Aadhar card to the eligible/participatory bank account.",
                        "documentsRequired":"",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      }
                }
                else{
                    data1 = {
                        "title": "Indira Gandhi National Old Age Pension Scheme ",
                        "url": "http://www.nsap.nic.in/statedashboard.do?method=intialize",
                        "description": "The Indira Gandhi National Old Age Pension Scheme is a non-contributory old age pension scheme that covers Indians who are 60 years and above and live below the poverty line. All individuals above the age of 60 who live below the poverty line are eligible to apply for this pension. All pension beneficiaries aged 60–79 receive a monthly pension",
                        "image":"https://www.pmawasyojana.co.in/wp-content/uploads/2018/04/Indira-Gandhi-National-Old-Age-Pension-Scheme-Uttar-Pradesh.jpg",
                        "Benefits":"A monthly pension of Rs 600 - Rs 1000 depending upon the state share of the pension.",
                        "eligibility":"Age : 60 years and above\nShould be Below Poverty Line (BPL).",
                        "documentsRequired":"",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      },
                      data2 = {
                        "title": "Pradhan Mantri Vaya Vandana Scheme",
                        "url": "https://financialservices.gov.in/insurance-divisions/Government-Sponsored-Socially-Oriented-Insurance-Schemes/Pradhan-Mantri-Vaya-Vandana-Yojana(PMVVY)",
                        "description": "Based on the success and popularity of Varishtha Pension Bima Yojana 2003 (VPBY-2003), Varishtha Pension Bima Yojana 2014 (VPBY-2014) schemes, and to protect elderly persons aged 60 years and above against a future fall in their interest income due to the uncertain market conditions, as also to provide social security during old age, it is decided to launch a simplified scheme of assured pension of 8% ",
                        "image":"https://thestateindia.com/wp-content/uploads/2020/02/images-9-9-1280x720.jpeg",
                        "Benefits":"A monthly pension of Rs 600 - Rs 1000 depending upon the state share of the pension.",
                        "eligibility":"Age : 60 years and above\nShould be Below Poverty Line (BPL).",
                        "documentsRequired":"",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      },
                      data3 = {
                        "title": "Pradhan Mantri Kisan Pension Yojana",
                        "url": "https://pmkmy.gov.in/",
                        "description": "Under this scheme, a minimum fixed pension of Rs.3,000/- is provided to the small and marginal farmers, subject to certain exclusion criteria, on attaining the age of 60 years. It is a voluntary and contributory pension scheme. The eligible farmer is required to contribute to a Pension Fund between Rs.55 to Rs.200 per month depending on the entry age.",
                        "image":"https://www.jankalyanportal.in/wp-content/uploads/2019/07/Online-Registration-Pradhan-Mantri-Kisan-Pension-Yojana-2019-Rs.-3000-Scheme-PMKPY.jpg",
                        "Benefits":"Assured pension of Rs. 3000/- month\nVoluntary and Contributory Pension Scheme\nMatching Contribution by the Government of India",
                        "eligibility":"For Small and Marginal Farmers\nCultivable land up to 2 hectares as per land records of the concerned State/UT",
                        "documentsRequired":"",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      }
                }
            }
            else{
                if(age < 60){
                    data1 = {
                        "title": "Udyogini Yojana Scheme",
                        "url": "https://mhrd.gov.in/rmsa",
                        "description": "Implemented by the Women Development Corporation, Udyogini is a scheme to provide subsidised loans to aspiring women entrepreneurs from rural and underdeveloped areas. Various financial institutions provide loans under the scheme.By offering necessary financial support, the scheme aims to promote entrepreneurship, financial empowerment and self-reliance among women in these areas. The Udyogini scheme also aims to build micro-enterprises that support the overall growth of the country.",
                        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyQeYmRoaf65nrn3FHYY6RDUJFgZIHg68POw&usqp=CAU",
                        "Benefits":"High-value loan amount\nApplicants can avail a loan of up to Rs.3 lakh under this scheme, provided they meet the basic eligibility criteria.\n\nLoans available for 88 small-scale industries\nThe Udyogini loan can be availed to start businesses categorised under 88 small-scale industries. Some of them are fish business, bakery, grocery, sewing, library, incense stick manufacturing, trade related to poultry and dairy, etc. Interest-free loans under the scheme are also available for women starting a business in the agriculture sector.\nTraining for skill development\nThis scheme also aims to impart functional skills to women regarding business planning, pricing, costing, feasibility, etc. alongside financial support.\np to 30% loan subsidy\nThe Government proposes up to 30% subsidy on loans extended under this scheme to make repayment affordable for women.\nTransparent evaluation of the beneficiary\nThe evaluation process of Udyogini Yojana application form ensures a transparent assessment for beneficiary selection.",
                        "eligibility":"Women enterprises consisting of all units managed by one or more women entrepreneurs in proprietary concern or in which she/they individually or jointly have a share capital of not less than 51% as partners/share holders /directors of private limited company/members of co-operative society.",
                        "documentsRequired":"Duly filled Application Form\nPassport-sized photographs\nAadhaar Card\nBirth Certificate\nBelow Poverty Line (BPL) card\nCaste Certificate\nCopy of Bank passbook (account, bank and branch names, holder name, IFSC and MICR)\nIncome Certificate\nRation Card",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      }
                      data2 = {
                        "title": "Cent Kalyani Scheme ",
                        "url": "https://www.centralbankofindia.co.in/English/Cent_Kalyani.aspx",
                        "description": "Cent Kalyani Scheme is a unique loan scheme from the Central Bank of India. It aims at financing women’s business dreams and helps them expand their business too. This means, women can apply for this scheme to fund their working capital, purchasing machinery or equipment or other relevant business needs. Women from micro and small enterprises can avail this loan scheme.",
                        "image":"https://livfinfinance.files.wordpress.com/2018/09/cent-kalyani-scheme.jpg?w=760",
                        "Benefits":"",
                        "eligibility":"Woman Entrepreneurs, above 18 years of age.\nNo income ceiling for assistance.",
                        "documentsRequired":"KYC norms to be ensured. Name changed after marriage to be kept in record.\nStandard Application form approved by IBA (already circulated and is available in website)\nBalance Sheets for the past 2 years along with estimated & projected Balance Sheets and other financial statements, where ever applicable.",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      }
                      data3 = {
                        "title": "Annapurna Scheme",
                        "url": "http://www.fcp.bih.nic.in/Annapurna.htm",
                        "description": "Annapurna Yojna is a centrally sponsored scheme which has been executed since 1st April, 2001 in this state. This scheme has been amalgamated in to the State Plan since year 2002-03. Under this scheme old destitutes who are not getting the National old age pension (NOAPS) but have its eligibility, are being provided 10 kg food-grain (6 kg wheat + 4 kg rice) per month free of cost as Food Security.",
                        "image":"https://pradhanmantrivikasyojana.in/wp-content/uploads/2017/04/annapurna-yojna-2.jpg",                     
                        "Benefits":"10 Kgs of food grains is distributed per month free of cost to destitute above the age of 65 years with no or meager subsistence.  ",
                        "eligibility":"Should be a destitute women",
                        "documentsRequired":"",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      } 
                }
                else{
                    data1 = {
                        "title": "Indira Gandhi National Old Age Pension Scheme ",
                        "url": "http://www.nsap.nic.in/statedashboard.do?method=intialize",
                        "description": "The Indira Gandhi National Old Age Pension Scheme is a non-contributory old age pension scheme that covers Indians who are 60 years and above and live below the poverty line. All individuals above the age of 60 who live below the poverty line are eligible to apply for this pension. All pension beneficiaries aged 60–79 receive a monthly pension",
                        "image":"https://www.pmawasyojana.co.in/wp-content/uploads/2018/04/Indira-Gandhi-National-Old-Age-Pension-Scheme-Uttar-Pradesh.jpg",
                        "Benefits":"A monthly pension of Rs 600 - Rs 1000 depending upon the state share of the pension.",
                        "eligibility":"Age : 60 years and above\nShould be Below Poverty Line (BPL).",
                        "documentsRequired":"",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      },
                      data2 = {
                        "title": "Annapurna Scheme",
                        "url": "http://www.fcp.bih.nic.in/Annapurna.htm",
                        "description": "Annapurna Yojna is a centrally sponsored scheme which has been executed since 1st April, 2001 in this state. This scheme has been amalgamated in to the State Plan since year 2002-03. Under this scheme old destitutes who are not getting the National old age pension (NOAPS) but have its eligibility, are being provided 10 kg food-grain (6 kg wheat + 4 kg rice) per month free of cost as Food Security.",
                        "image":"https://pradhanmantrivikasyojana.in/wp-content/uploads/2017/04/annapurna-yojna-2.jpg",                     
                        "Benefits":"10 Kgs of food grains is distributed per month free of cost to destitute above the age of 65 years with no or meager subsistence.  ",
                        "eligibility":"Should be a destitute women",
                        "documentsRequired":"",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      },
                      data3 = {
                        "title": "Pradhan Mantri Vaya Vandana Scheme",
                        "url": "https://financialservices.gov.in/insurance-divisions/Government-Sponsored-Socially-Oriented-Insurance-Schemes/Pradhan-Mantri-Vaya-Vandana-Yojana(PMVVY)",
                        "description": "Based on the success and popularity of Varishtha Pension Bima Yojana 2003 (VPBY-2003), Varishtha Pension Bima Yojana 2014 (VPBY-2014) schemes, and to protect elderly persons aged 60 years and above against a future fall in their interest income due to the uncertain market conditions, as also to provide social security during old age, it is decided to launch a simplified scheme of assured pension of 8% ",
                        "image":"https://thestateindia.com/wp-content/uploads/2020/02/images-9-9-1280x720.jpeg",
                        "Benefits":"A monthly pension of Rs 600 - Rs 1000 depending upon the state share of the pension.",
                        "eligibility":"Age : 60 years and above\nShould be Below Poverty Line (BPL).",
                        "documentsRequired":"",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      }
                }
            }
        }
        else{
            if(area == 1 && gender == 1){
                if(age < 60){

                    data1= {
                        "title": "Aam Aadmi Bima Yojana",
                        "url": "http://bor.up.nic.in/aabyaudit/index.html",
                        "description": "Aam admi bima yojana, a Social Security Scheme for rural landless household was launched on 2nd October, 2007. The head of the family or one earning member in the family of such a household is covered under the scheme. The premium of Rs.200/- per person per annum is shared equally by the Central Government and the State Government.",
                        "image": "https://4.bp.blogspot.com/-p4a3X0XPlSo/W2MRVMgsFiI/AAAAAAAACkA/Lt4PihnZLSYTrJKzg0oHJibm5Znx4BDVQCLcBGAs/w1200-h630-p-k-no-nu/Aam%2BAdmi%2BBeema%2BYojna..png",
                        "Benefits":"In case of natural death of the insured, the policy offers an amount of Rs.30,000 death benefit to the surviving beneficiaries or the family members of the policyholder.\nIn case the insured suffers an accidental death or suffers a permanent total disability due to an accident leading to loss of both the eyes or both the limbs, Loss of one eye & one limb, in an accident the policy offers an amount of Rs.75,000 to the surviving beneficiaries or the family members of the policyholder.  \nIn case the insured suffers a partial permanent disability due to an accident leading to loss of one eye or one limb, the policy offers an amount of Rs.37,500 to the surviving beneficiaries or the family members of the policyholder.",
                        "eligibility":"A person aged between 18 to 59 years can avail this insurance facility.\nAvailable only to the head of the family or the earning member of the family below the poverty line in the rural areas with landless households.\nDocumentation requirement should be fulfilled.",
                        "documentsRequired":"Name in the Voter's List\nRation Card\nAadhaar Card (Unique Identification Card)\nExtract from the school and birth certificate",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      },
                      data2 = {
                        "title": "Rashtiya Swasthiya Bima Yojana (RSBY)",
                        "url": "http://www.rsby.gov.in/how_works.html",
                        "description": "RSBY has been launched by Ministry of Labour and Employment, Government of India to provide health insurance coverage for Below Poverty Line (BPL) families. The objective of RSBY is to provide protection to BPL households from financial liabilities arising out of health shocks that involve hospitalization.",
                        "image":"https://www.acko.com/wp-content/uploads/2020/05/rsby-rashtriya-swasthya-bima-yojana.png",
                        "Benefits":"Coverage:\nTotal cover of INR 30,000 is given for the family on family floater basis for a year. Hospitalisation and in-patient care for most common illnesses are covered. The policy covers transportation charges of up to INR 1,000 for the policy period. INR 100 will be paid as transportation cost for each hospitalisation.\nCashless facility:\nCashless medical treatment facility can be availed at any empanelled hospitals across the nation by using RSBY card (smart card) issued under the RSBY scheme\nThe network of hospitals:\nThere are public and private hospitals are empanelled under the RSBY scheme which gives BPL populations to access the healthcare facility through RSBY card (smart card) anywhere in the country",
                        "eligibility":"The beneficiary is any Below Poverty Line (BPL) family, whose information is included in the district BPL list prepared by the State government. The eligible family needs to come to the enrollment station, and the identity of the household head needs to be confirmed by the authorized official.",
                        "documentsRequired":"",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      }
                      data3 = {
                        "title": "Pradhan Mantri Jan Arogya Yojana (PMJAY)",
                        "url": "https://pmjay.gov.in/about/pmjay",
                        "description": "Under this scheme, a minimum fixed pension of Rs.3,000/- is provided to the small and marginal farmers, subject to certain exclusion criteria, on attaining the age of 60 years. It is a voluntary and contributory pension scheme. The eligible farmer is required to contribute to a Pension Fund between Rs.55 to Rs.200 per month depending on the entry age.",
                        "image":"https://1.bp.blogspot.com/-yeSwmOVrBKQ/W6dzvsUACYI/AAAAAAAAF0U/7fzx6KYUMaM9V-0BAuE8moH1upi-Kl9cgCLcBGAs/s1600/xxx.jpeg",
                        "Benefits":"PMJAY takes care of all the uncovered hospital expenses with ease.\nPMJAY offers a cashless and paperless facility to all its beneficiaries.\nPMJAY covers the transport allowances of the beneficiary during the pre and post-hospitalization period.\nPMJAY covers the day-care expenses within the insurance package itself.",
                        "eligibility":"",
                        "documentsRequired":"A certified document confirming your age and identification.\nExisting contact details of the buyer\nIncome certificate\nCaste certificate\nA document stating the current family status.",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      }
                    }
                    else{
                      data1= {
                        "title": "Aam Aadmi Bima Yojana",
                        "url": "http://bor.up.nic.in/aabyaudit/index.html",
                        "description": "Aam admi bima yojana, a Social Security Scheme for rural landless household was launched on 2nd October, 2007. The head of the family or one earning member in the family of such a household is covered under the scheme. The premium of Rs.200/- per person per annum is shared equally by the Central Government and the State Government.",
                        "image": "https://4.bp.blogspot.com/-p4a3X0XPlSo/W2MRVMgsFiI/AAAAAAAACkA/Lt4PihnZLSYTrJKzg0oHJibm5Znx4BDVQCLcBGAs/w1200-h630-p-k-no-nu/Aam%2BAdmi%2BBeema%2BYojna..png",
                        "Benefits":"In case of natural death of the insured, the policy offers an amount of Rs.30,000 death benefit to the surviving beneficiaries or the family members of the policyholder.\nIn case the insured suffers an accidental death or suffers a permanent total disability due to an accident leading to loss of both the eyes or both the limbs, Loss of one eye & one limb, in an accident the policy offers an amount of Rs.75,000 to the surviving beneficiaries or the family members of the policyholder.  \nIn case the insured suffers a partial permanent disability due to an accident leading to loss of one eye or one limb, the policy offers an amount of Rs.37,500 to the surviving beneficiaries or the family members of the policyholder.",
                        "eligibility":"A person aged between 18 to 59 years can avail this insurance facility.\nAvailable only to the head of the family or the earning member of the family below the poverty line in the rural areas with landless households.\nDocumentation requirement should be fulfilled.",
                        "documentsRequired":"Name in the Voter's List\nRation Card\nAadhaar Card (Unique Identification Card)\nExtract from the school and birth certificate",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      },
                      data2 = {
                        "title": "Rashtiya Swasthiya Bima Yojana (RSBY)",
                        "url": "http://www.rsby.gov.in/how_works.html",
                        "description": "RSBY has been launched by Ministry of Labour and Employment, Government of India to provide health insurance coverage for Below Poverty Line (BPL) families. The objective of RSBY is to provide protection to BPL households from financial liabilities arising out of health shocks that involve hospitalization.",
                        "image":"https://www.acko.com/wp-content/uploads/2020/05/rsby-rashtriya-swasthya-bima-yojana.png",
                        "Benefits":"Coverage:\nTotal cover of INR 30,000 is given for the family on family floater basis for a year. Hospitalisation and in-patient care for most common illnesses are covered. The policy covers transportation charges of up to INR 1,000 for the policy period. INR 100 will be paid as transportation cost for each hospitalisation.\nCashless facility:\nCashless medical treatment facility can be availed at any empanelled hospitals across the nation by using RSBY card (smart card) issued under the RSBY scheme\nThe network of hospitals:\nThere are public and private hospitals are empanelled under the RSBY scheme which gives BPL populations to access the healthcare facility through RSBY card (smart card) anywhere in the country",
                        "eligibility":"The beneficiary is any Below Poverty Line (BPL) family, whose information is included in the district BPL list prepared by the State government. The eligible family needs to come to the enrollment station, and the identity of the household head needs to be confirmed by the authorized official.",
                        "documentsRequired":"",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      }
                      data3 = {
                        "title": "Pradhan Mantri Jan Arogya Yojana (PMJAY)",
                        "url": "https://pmjay.gov.in/about/pmjay",
                        "description": "Under this scheme, a minimum fixed pension of Rs.3,000/- is provided to the small and marginal farmers, subject to certain exclusion criteria, on attaining the age of 60 years. It is a voluntary and contributory pension scheme. The eligible farmer is required to contribute to a Pension Fund between Rs.55 to Rs.200 per month depending on the entry age.",
                        "image":"https://1.bp.blogspot.com/-yeSwmOVrBKQ/W6dzvsUACYI/AAAAAAAAF0U/7fzx6KYUMaM9V-0BAuE8moH1upi-Kl9cgCLcBGAs/s1600/xxx.jpeg",
                        "Benefits":"PMJAY takes care of all the uncovered hospital expenses with ease.\nPMJAY offers a cashless and paperless facility to all its beneficiaries.\nPMJAY covers the transport allowances of the beneficiary during the pre and post-hospitalization period.\nPMJAY covers the day-care expenses within the insurance package itself.",
                        "eligibility":"",
                        "documentsRequired":"A certified document confirming your age and identification.\nExisting contact details of the buyer\nIncome certificate\nCaste certificate\nA document stating the current family status.",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      }
                }
            }
            else if(area == 1 && gender == 2){
                if(age < 60){
                    data1= {
                        "title": "Aam Aadmi Bima Yojana",
                        "url": "http://bor.up.nic.in/aabyaudit/index.html",
                        "description": "Aam admi bima yojana, a Social Security Scheme for rural landless household was launched on 2nd October, 2007. The head of the family or one earning member in the family of such a household is covered under the scheme. The premium of Rs.200/- per person per annum is shared equally by the Central Government and the State Government.",
                        "image": "https://4.bp.blogspot.com/-p4a3X0XPlSo/W2MRVMgsFiI/AAAAAAAACkA/Lt4PihnZLSYTrJKzg0oHJibm5Znx4BDVQCLcBGAs/w1200-h630-p-k-no-nu/Aam%2BAdmi%2BBeema%2BYojna..png",
                        "Benefits":"In case of natural death of the insured, the policy offers an amount of Rs.30,000 death benefit to the surviving beneficiaries or the family members of the policyholder.\nIn case the insured suffers an accidental death or suffers a permanent total disability due to an accident leading to loss of both the eyes or both the limbs, Loss of one eye & one limb, in an accident the policy offers an amount of Rs.75,000 to the surviving beneficiaries or the family members of the policyholder.  \nIn case the insured suffers a partial permanent disability due to an accident leading to loss of one eye or one limb, the policy offers an amount of Rs.37,500 to the surviving beneficiaries or the family members of the policyholder.",
                        "eligibility":"A person aged between 18 to 59 years can avail this insurance facility.\nAvailable only to the head of the family or the earning member of the family below the poverty line in the rural areas with landless households.\nDocumentation requirement should be fulfilled.",
                        "documentsRequired":"Name in the Voter's List\nRation Card\nAadhaar Card (Unique Identification Card)\nExtract from the school and birth certificate",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      },
                      data2 = {
                        "title": "Rashtiya Swasthiya Bima Yojana (RSBY)",
                        "url": "http://www.rsby.gov.in/how_works.html",
                        "description": "RSBY has been launched by Ministry of Labour and Employment, Government of India to provide health insurance coverage for Below Poverty Line (BPL) families. The objective of RSBY is to provide protection to BPL households from financial liabilities arising out of health shocks that involve hospitalization.",
                        "image":"https://www.acko.com/wp-content/uploads/2020/05/rsby-rashtriya-swasthya-bima-yojana.png",
                        "Benefits":"Coverage:\nTotal cover of INR 30,000 is given for the family on family floater basis for a year. Hospitalisation and in-patient care for most common illnesses are covered. The policy covers transportation charges of up to INR 1,000 for the policy period. INR 100 will be paid as transportation cost for each hospitalisation.\nCashless facility:\nCashless medical treatment facility can be availed at any empanelled hospitals across the nation by using RSBY card (smart card) issued under the RSBY scheme\nThe network of hospitals:\nThere are public and private hospitals are empanelled under the RSBY scheme which gives BPL populations to access the healthcare facility through RSBY card (smart card) anywhere in the country",
                        "eligibility":"The beneficiary is any Below Poverty Line (BPL) family, whose information is included in the district BPL list prepared by the State government. The eligible family needs to come to the enrollment station, and the identity of the household head needs to be confirmed by the authorized official.",
                        "documentsRequired":"",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      }
                      data3 = {
                        "title": "Pradhan Mantri Jan Arogya Yojana (PMJAY)",
                        "url": "https://pmjay.gov.in/about/pmjay",
                        "description": "Under this scheme, a minimum fixed pension of Rs.3,000/- is provided to the small and marginal farmers, subject to certain exclusion criteria, on attaining the age of 60 years. It is a voluntary and contributory pension scheme. The eligible farmer is required to contribute to a Pension Fund between Rs.55 to Rs.200 per month depending on the entry age.",
                        "image":"https://1.bp.blogspot.com/-yeSwmOVrBKQ/W6dzvsUACYI/AAAAAAAAF0U/7fzx6KYUMaM9V-0BAuE8moH1upi-Kl9cgCLcBGAs/s1600/xxx.jpeg",
                        "Benefits":"PMJAY takes care of all the uncovered hospital expenses with ease.\nPMJAY offers a cashless and paperless facility to all its beneficiaries.\nPMJAY covers the transport allowances of the beneficiary during the pre and post-hospitalization period.\nPMJAY covers the day-care expenses within the insurance package itself.",
                        "eligibility":"",
                        "documentsRequired":"A certified document confirming your age and identification.\nExisting contact details of the buyer\nIncome certificate\nCaste certificate\nA document stating the current family status.",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      }
                    }
                    else{
                      data1= {
                        "title": "Aam Aadmi Bima Yojana",
                        "url": "http://bor.up.nic.in/aabyaudit/index.html",
                        "description": "Aam admi bima yojana, a Social Security Scheme for rural landless household was launched on 2nd October, 2007. The head of the family or one earning member in the family of such a household is covered under the scheme. The premium of Rs.200/- per person per annum is shared equally by the Central Government and the State Government.",
                        "image": "https://4.bp.blogspot.com/-p4a3X0XPlSo/W2MRVMgsFiI/AAAAAAAACkA/Lt4PihnZLSYTrJKzg0oHJibm5Znx4BDVQCLcBGAs/w1200-h630-p-k-no-nu/Aam%2BAdmi%2BBeema%2BYojna..png",
                        "Benefits":"In case of natural death of the insured, the policy offers an amount of Rs.30,000 death benefit to the surviving beneficiaries or the family members of the policyholder.\nIn case the insured suffers an accidental death or suffers a permanent total disability due to an accident leading to loss of both the eyes or both the limbs, Loss of one eye & one limb, in an accident the policy offers an amount of Rs.75,000 to the surviving beneficiaries or the family members of the policyholder.  \nIn case the insured suffers a partial permanent disability due to an accident leading to loss of one eye or one limb, the policy offers an amount of Rs.37,500 to the surviving beneficiaries or the family members of the policyholder.",
                        "eligibility":"A person aged between 18 to 59 years can avail this insurance facility.\nAvailable only to the head of the family or the earning member of the family below the poverty line in the rural areas with landless households.\nDocumentation requirement should be fulfilled.",
                        "documentsRequired":"Name in the Voter's List\nRation Card\nAadhaar Card (Unique Identification Card)\nExtract from the school and birth certificate",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      },
                      data2 = {
                        "title": "Rashtiya Swasthiya Bima Yojana (RSBY)",
                        "url": "http://www.rsby.gov.in/how_works.html",
                        "description": "RSBY has been launched by Ministry of Labour and Employment, Government of India to provide health insurance coverage for Below Poverty Line (BPL) families. The objective of RSBY is to provide protection to BPL households from financial liabilities arising out of health shocks that involve hospitalization.",
                        "image":"https://www.acko.com/wp-content/uploads/2020/05/rsby-rashtriya-swasthya-bima-yojana.png",
                        "Benefits":"Coverage:\nTotal cover of INR 30,000 is given for the family on family floater basis for a year. Hospitalisation and in-patient care for most common illnesses are covered. The policy covers transportation charges of up to INR 1,000 for the policy period. INR 100 will be paid as transportation cost for each hospitalisation.\nCashless facility:\nCashless medical treatment facility can be availed at any empanelled hospitals across the nation by using RSBY card (smart card) issued under the RSBY scheme\nThe network of hospitals:\nThere are public and private hospitals are empanelled under the RSBY scheme which gives BPL populations to access the healthcare facility through RSBY card (smart card) anywhere in the country",
                        "eligibility":"The beneficiary is any Below Poverty Line (BPL) family, whose information is included in the district BPL list prepared by the State government. The eligible family needs to come to the enrollment station, and the identity of the household head needs to be confirmed by the authorized official.",
                        "documentsRequired":"",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      }
                      data3 = {
                        "title": "Pradhan Mantri Jan Arogya Yojana (PMJAY)",
                        "url": "https://pmjay.gov.in/about/pmjay",
                        "description": "Under this scheme, a minimum fixed pension of Rs.3,000/- is provided to the small and marginal farmers, subject to certain exclusion criteria, on attaining the age of 60 years. It is a voluntary and contributory pension scheme. The eligible farmer is required to contribute to a Pension Fund between Rs.55 to Rs.200 per month depending on the entry age.",
                        "image":"https://1.bp.blogspot.com/-yeSwmOVrBKQ/W6dzvsUACYI/AAAAAAAAF0U/7fzx6KYUMaM9V-0BAuE8moH1upi-Kl9cgCLcBGAs/s1600/xxx.jpeg",
                        "Benefits":"PMJAY takes care of all the uncovered hospital expenses with ease.\nPMJAY offers a cashless and paperless facility to all its beneficiaries.\nPMJAY covers the transport allowances of the beneficiary during the pre and post-hospitalization period.\nPMJAY covers the day-care expenses within the insurance package itself.",
                        "eligibility":"",
                        "documentsRequired":"A certified document confirming your age and identification.\nExisting contact details of the buyer\nIncome certificate\nCaste certificate\nA document stating the current family status.",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      }              
                }
            }
            else if(area == 2 && gender == 1){
                if(age < 60){

                    data1= {
                        "title": "Aam Aadmi Bima Yojana",
                        "url": "http://bor.up.nic.in/aabyaudit/index.html",
                        "description": "Aam admi bima yojana, a Social Security Scheme for rural landless household was launched on 2nd October, 2007. The head of the family or one earning member in the family of such a household is covered under the scheme. The premium of Rs.200/- per person per annum is shared equally by the Central Government and the State Government.",
                        "image": "https://4.bp.blogspot.com/-p4a3X0XPlSo/W2MRVMgsFiI/AAAAAAAACkA/Lt4PihnZLSYTrJKzg0oHJibm5Znx4BDVQCLcBGAs/w1200-h630-p-k-no-nu/Aam%2BAdmi%2BBeema%2BYojna..png",
                        "Benefits":"In case of natural death of the insured, the policy offers an amount of Rs.30,000 death benefit to the surviving beneficiaries or the family members of the policyholder.\nIn case the insured suffers an accidental death or suffers a permanent total disability due to an accident leading to loss of both the eyes or both the limbs, Loss of one eye & one limb, in an accident the policy offers an amount of Rs.75,000 to the surviving beneficiaries or the family members of the policyholder.  \nIn case the insured suffers a partial permanent disability due to an accident leading to loss of one eye or one limb, the policy offers an amount of Rs.37,500 to the surviving beneficiaries or the family members of the policyholder.",
                        "eligibility":"A person aged between 18 to 59 years can avail this insurance facility.\nAvailable only to the head of the family or the earning member of the family below the poverty line in the rural areas with landless households.\nDocumentation requirement should be fulfilled.",
                        "documentsRequired":"Name in the Voter's List\nRation Card\nAadhaar Card (Unique Identification Card)\nExtract from the school and birth certificate",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      },
                      data2 = {
                        "title": "Rashtiya Swasthiya Bima Yojana (RSBY)",
                        "url": "http://www.rsby.gov.in/how_works.html",
                        "description": "RSBY has been launched by Ministry of Labour and Employment, Government of India to provide health insurance coverage for Below Poverty Line (BPL) families. The objective of RSBY is to provide protection to BPL households from financial liabilities arising out of health shocks that involve hospitalization.",
                        "image":"https://www.acko.com/wp-content/uploads/2020/05/rsby-rashtriya-swasthya-bima-yojana.png",
                        "Benefits":"Coverage:\nTotal cover of INR 30,000 is given for the family on family floater basis for a year. Hospitalisation and in-patient care for most common illnesses are covered. The policy covers transportation charges of up to INR 1,000 for the policy period. INR 100 will be paid as transportation cost for each hospitalisation.\nCashless facility:\nCashless medical treatment facility can be availed at any empanelled hospitals across the nation by using RSBY card (smart card) issued under the RSBY scheme\nThe network of hospitals:\nThere are public and private hospitals are empanelled under the RSBY scheme which gives BPL populations to access the healthcare facility through RSBY card (smart card) anywhere in the country",
                        "eligibility":"The beneficiary is any Below Poverty Line (BPL) family, whose information is included in the district BPL list prepared by the State government. The eligible family needs to come to the enrollment station, and the identity of the household head needs to be confirmed by the authorized official.",
                        "documentsRequired":"",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      }
                      data3 = {
                        "title": "Pradhan Mantri Jan Arogya Yojana (PMJAY)",
                        "url": "https://pmjay.gov.in/about/pmjay",
                        "description": "Under this scheme, a minimum fixed pension of Rs.3,000/- is provided to the small and marginal farmers, subject to certain exclusion criteria, on attaining the age of 60 years. It is a voluntary and contributory pension scheme. The eligible farmer is required to contribute to a Pension Fund between Rs.55 to Rs.200 per month depending on the entry age.",
                        "image":"https://1.bp.blogspot.com/-yeSwmOVrBKQ/W6dzvsUACYI/AAAAAAAAF0U/7fzx6KYUMaM9V-0BAuE8moH1upi-Kl9cgCLcBGAs/s1600/xxx.jpeg",
                        "Benefits":"PMJAY takes care of all the uncovered hospital expenses with ease.\nPMJAY offers a cashless and paperless facility to all its beneficiaries.\nPMJAY covers the transport allowances of the beneficiary during the pre and post-hospitalization period.\nPMJAY covers the day-care expenses within the insurance package itself.",
                        "eligibility":"",
                        "documentsRequired":"A certified document confirming your age and identification.\nExisting contact details of the buyer\nIncome certificate\nCaste certificate\nA document stating the current family status.",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      }
                    }
                    else{
                      data1= {
                        "title": "Aam Aadmi Bima Yojana",
                        "url": "http://bor.up.nic.in/aabyaudit/index.html",
                        "description": "Aam admi bima yojana, a Social Security Scheme for rural landless household was launched on 2nd October, 2007. The head of the family or one earning member in the family of such a household is covered under the scheme. The premium of Rs.200/- per person per annum is shared equally by the Central Government and the State Government.",
                        "image": "https://4.bp.blogspot.com/-p4a3X0XPlSo/W2MRVMgsFiI/AAAAAAAACkA/Lt4PihnZLSYTrJKzg0oHJibm5Znx4BDVQCLcBGAs/w1200-h630-p-k-no-nu/Aam%2BAdmi%2BBeema%2BYojna..png",
                        "Benefits":"In case of natural death of the insured, the policy offers an amount of Rs.30,000 death benefit to the surviving beneficiaries or the family members of the policyholder.\nIn case the insured suffers an accidental death or suffers a permanent total disability due to an accident leading to loss of both the eyes or both the limbs, Loss of one eye & one limb, in an accident the policy offers an amount of Rs.75,000 to the surviving beneficiaries or the family members of the policyholder.  \nIn case the insured suffers a partial permanent disability due to an accident leading to loss of one eye or one limb, the policy offers an amount of Rs.37,500 to the surviving beneficiaries or the family members of the policyholder.",
                        "eligibility":"A person aged between 18 to 59 years can avail this insurance facility.\nAvailable only to the head of the family or the earning member of the family below the poverty line in the rural areas with landless households.\nDocumentation requirement should be fulfilled.",
                        "documentsRequired":"Name in the Voter's List\nRation Card\nAadhaar Card (Unique Identification Card)\nExtract from the school and birth certificate",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      },
                      data2 = {
                        "title": "Rashtiya Swasthiya Bima Yojana (RSBY)",
                        "url": "http://www.rsby.gov.in/how_works.html",
                        "description": "RSBY has been launched by Ministry of Labour and Employment, Government of India to provide health insurance coverage for Below Poverty Line (BPL) families. The objective of RSBY is to provide protection to BPL households from financial liabilities arising out of health shocks that involve hospitalization.",
                        "image":"https://www.acko.com/wp-content/uploads/2020/05/rsby-rashtriya-swasthya-bima-yojana.png",
                        "Benefits":"Coverage:\nTotal cover of INR 30,000 is given for the family on family floater basis for a year. Hospitalisation and in-patient care for most common illnesses are covered. The policy covers transportation charges of up to INR 1,000 for the policy period. INR 100 will be paid as transportation cost for each hospitalisation.\nCashless facility:\nCashless medical treatment facility can be availed at any empanelled hospitals across the nation by using RSBY card (smart card) issued under the RSBY scheme\nThe network of hospitals:\nThere are public and private hospitals are empanelled under the RSBY scheme which gives BPL populations to access the healthcare facility through RSBY card (smart card) anywhere in the country",
                        "eligibility":"The beneficiary is any Below Poverty Line (BPL) family, whose information is included in the district BPL list prepared by the State government. The eligible family needs to come to the enrollment station, and the identity of the household head needs to be confirmed by the authorized official.",
                        "documentsRequired":"",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      }
                      data3 = {
                        "title": "Pradhan Mantri Jan Arogya Yojana (PMJAY)",
                        "url": "https://pmjay.gov.in/about/pmjay",
                        "description": "Under this scheme, a minimum fixed pension of Rs.3,000/- is provided to the small and marginal farmers, subject to certain exclusion criteria, on attaining the age of 60 years. It is a voluntary and contributory pension scheme. The eligible farmer is required to contribute to a Pension Fund between Rs.55 to Rs.200 per month depending on the entry age.",
                        "image":"https://1.bp.blogspot.com/-yeSwmOVrBKQ/W6dzvsUACYI/AAAAAAAAF0U/7fzx6KYUMaM9V-0BAuE8moH1upi-Kl9cgCLcBGAs/s1600/xxx.jpeg",
                        "Benefits":"PMJAY takes care of all the uncovered hospital expenses with ease.\nPMJAY offers a cashless and paperless facility to all its beneficiaries.\nPMJAY covers the transport allowances of the beneficiary during the pre and post-hospitalization period.\nPMJAY covers the day-care expenses within the insurance package itself.",
                        "eligibility":"",
                        "documentsRequired":"A certified document confirming your age and identification.\nExisting contact details of the buyer\nIncome certificate\nCaste certificate\nA document stating the current family status.",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      }
                }
            }
            else{
                if(age < 60){
                    data1= {
                        "title": "Aam Aadmi Bima Yojana",
                        "url": "http://bor.up.nic.in/aabyaudit/index.html",
                        "description": "Aam admi bima yojana, a Social Security Scheme for rural landless household was launched on 2nd October, 2007. The head of the family or one earning member in the family of such a household is covered under the scheme. The premium of Rs.200/- per person per annum is shared equally by the Central Government and the State Government.",
                        "image": "https://4.bp.blogspot.com/-p4a3X0XPlSo/W2MRVMgsFiI/AAAAAAAACkA/Lt4PihnZLSYTrJKzg0oHJibm5Znx4BDVQCLcBGAs/w1200-h630-p-k-no-nu/Aam%2BAdmi%2BBeema%2BYojna..png",
                        "Benefits":"In case of natural death of the insured, the policy offers an amount of Rs.30,000 death benefit to the surviving beneficiaries or the family members of the policyholder.\nIn case the insured suffers an accidental death or suffers a permanent total disability due to an accident leading to loss of both the eyes or both the limbs, Loss of one eye & one limb, in an accident the policy offers an amount of Rs.75,000 to the surviving beneficiaries or the family members of the policyholder.  \nIn case the insured suffers a partial permanent disability due to an accident leading to loss of one eye or one limb, the policy offers an amount of Rs.37,500 to the surviving beneficiaries or the family members of the policyholder.",
                        "eligibility":"A person aged between 18 to 59 years can avail this insurance facility.\nAvailable only to the head of the family or the earning member of the family below the poverty line in the rural areas with landless households.\nDocumentation requirement should be fulfilled.",
                        "documentsRequired":"Name in the Voter's List\nRation Card\nAadhaar Card (Unique Identification Card)\nExtract from the school and birth certificate",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      },
                      data2 = {
                        "title": "Rashtiya Swasthiya Bima Yojana (RSBY)",
                        "url": "http://www.rsby.gov.in/how_works.html",
                        "description": "RSBY has been launched by Ministry of Labour and Employment, Government of India to provide health insurance coverage for Below Poverty Line (BPL) families. The objective of RSBY is to provide protection to BPL households from financial liabilities arising out of health shocks that involve hospitalization.",
                        "image":"https://www.acko.com/wp-content/uploads/2020/05/rsby-rashtriya-swasthya-bima-yojana.png",
                        "Benefits":"Coverage:\nTotal cover of INR 30,000 is given for the family on family floater basis for a year. Hospitalisation and in-patient care for most common illnesses are covered. The policy covers transportation charges of up to INR 1,000 for the policy period. INR 100 will be paid as transportation cost for each hospitalisation.\nCashless facility:\nCashless medical treatment facility can be availed at any empanelled hospitals across the nation by using RSBY card (smart card) issued under the RSBY scheme\nThe network of hospitals:\nThere are public and private hospitals are empanelled under the RSBY scheme which gives BPL populations to access the healthcare facility through RSBY card (smart card) anywhere in the country",
                        "eligibility":"The beneficiary is any Below Poverty Line (BPL) family, whose information is included in the district BPL list prepared by the State government. The eligible family needs to come to the enrollment station, and the identity of the household head needs to be confirmed by the authorized official.",
                        "documentsRequired":"",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      }
                      data3 = {
                        "title": "Pradhan Mantri Jan Arogya Yojana (PMJAY)",
                        "url": "https://pmjay.gov.in/about/pmjay",
                        "description": "Under this scheme, a minimum fixed pension of Rs.3,000/- is provided to the small and marginal farmers, subject to certain exclusion criteria, on attaining the age of 60 years. It is a voluntary and contributory pension scheme. The eligible farmer is required to contribute to a Pension Fund between Rs.55 to Rs.200 per month depending on the entry age.",
                        "image":"https://1.bp.blogspot.com/-yeSwmOVrBKQ/W6dzvsUACYI/AAAAAAAAF0U/7fzx6KYUMaM9V-0BAuE8moH1upi-Kl9cgCLcBGAs/s1600/xxx.jpeg",
                        "Benefits":"PMJAY takes care of all the uncovered hospital expenses with ease.\nPMJAY offers a cashless and paperless facility to all its beneficiaries.\nPMJAY covers the transport allowances of the beneficiary during the pre and post-hospitalization period.\nPMJAY covers the day-care expenses within the insurance package itself.",
                        "eligibility":"",
                        "documentsRequired":"A certified document confirming your age and identification.\nExisting contact details of the buyer\nIncome certificate\nCaste certificate\nA document stating the current family status.",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      }
                    }
                    else{
                      data1= {
                        "title": "Aam Aadmi Bima Yojana",
                        "url": "http://bor.up.nic.in/aabyaudit/index.html",
                        "description": "Aam admi bima yojana, a Social Security Scheme for rural landless household was launched on 2nd October, 2007. The head of the family or one earning member in the family of such a household is covered under the scheme. The premium of Rs.200/- per person per annum is shared equally by the Central Government and the State Government.",
                        "image": "https://4.bp.blogspot.com/-p4a3X0XPlSo/W2MRVMgsFiI/AAAAAAAACkA/Lt4PihnZLSYTrJKzg0oHJibm5Znx4BDVQCLcBGAs/w1200-h630-p-k-no-nu/Aam%2BAdmi%2BBeema%2BYojna..png",
                        "Benefits":"In case of natural death of the insured, the policy offers an amount of Rs.30,000 death benefit to the surviving beneficiaries or the family members of the policyholder.\nIn case the insured suffers an accidental death or suffers a permanent total disability due to an accident leading to loss of both the eyes or both the limbs, Loss of one eye & one limb, in an accident the policy offers an amount of Rs.75,000 to the surviving beneficiaries or the family members of the policyholder.  \nIn case the insured suffers a partial permanent disability due to an accident leading to loss of one eye or one limb, the policy offers an amount of Rs.37,500 to the surviving beneficiaries or the family members of the policyholder.",
                        "eligibility":"A person aged between 18 to 59 years can avail this insurance facility.\nAvailable only to the head of the family or the earning member of the family below the poverty line in the rural areas with landless households.\nDocumentation requirement should be fulfilled.",
                        "documentsRequired":"Name in the Voter's List\nRation Card\nAadhaar Card (Unique Identification Card)\nExtract from the school and birth certificate",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      },
                      data2 = {
                        "title": "Rashtiya Swasthiya Bima Yojana (RSBY)",
                        "url": "http://www.rsby.gov.in/how_works.html",
                        "description": "RSBY has been launched by Ministry of Labour and Employment, Government of India to provide health insurance coverage for Below Poverty Line (BPL) families. The objective of RSBY is to provide protection to BPL households from financial liabilities arising out of health shocks that involve hospitalization.",
                        "image":"https://www.acko.com/wp-content/uploads/2020/05/rsby-rashtriya-swasthya-bima-yojana.png",
                        "Benefits":"Coverage:\nTotal cover of INR 30,000 is given for the family on family floater basis for a year. Hospitalisation and in-patient care for most common illnesses are covered. The policy covers transportation charges of up to INR 1,000 for the policy period. INR 100 will be paid as transportation cost for each hospitalisation.\nCashless facility:\nCashless medical treatment facility can be availed at any empanelled hospitals across the nation by using RSBY card (smart card) issued under the RSBY scheme\nThe network of hospitals:\nThere are public and private hospitals are empanelled under the RSBY scheme which gives BPL populations to access the healthcare facility through RSBY card (smart card) anywhere in the country",
                        "eligibility":"The beneficiary is any Below Poverty Line (BPL) family, whose information is included in the district BPL list prepared by the State government. The eligible family needs to come to the enrollment station, and the identity of the household head needs to be confirmed by the authorized official.",
                        "documentsRequired":"",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
                      }
                      data3 = {
                        "title": "Pradhan Mantri Jan Arogya Yojana (PMJAY)",
                        "url": "https://pmjay.gov.in/about/pmjay",
                        "description": "Under this scheme, a minimum fixed pension of Rs.3,000/- is provided to the small and marginal farmers, subject to certain exclusion criteria, on attaining the age of 60 years. It is a voluntary and contributory pension scheme. The eligible farmer is required to contribute to a Pension Fund between Rs.55 to Rs.200 per month depending on the entry age.",
                        "image":"https://1.bp.blogspot.com/-yeSwmOVrBKQ/W6dzvsUACYI/AAAAAAAAF0U/7fzx6KYUMaM9V-0BAuE8moH1upi-Kl9cgCLcBGAs/s1600/xxx.jpeg",
                        "Benefits":"PMJAY takes care of all the uncovered hospital expenses with ease.\nPMJAY offers a cashless and paperless facility to all its beneficiaries.\nPMJAY covers the transport allowances of the beneficiary during the pre and post-hospitalization period.\nPMJAY covers the day-care expenses within the insurance package itself.",
                        "eligibility":"",
                        "documentsRequired":"A certified document confirming your age and identification.\nExisting contact details of the buyer\nIncome certificate\nCaste certificate\nA document stating the current family status.",
                        "tooltip":"National Pension System or NPS is a government-sponsored pension scheme."
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
