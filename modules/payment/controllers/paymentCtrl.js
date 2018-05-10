'use strict';

const
    path = require ('path'),
    // crypto = require ('crypto'),
    // random = require ('random-number'),
    uudi = require ('node-uuid'),
    TAXID = require(path.resolve('./config/lib/const/constV')),
    PAYMENT = require('../models/paymentModel');

exports.Payment = ((req, res, next)=> {

    let uudi1 = uudi.v4();
    console.log(uudi1);

    let Pay = new PAYMENT (req.body);

   Pay.save((err, saveObj) => {
       if(err){
           res.json({obj:err , message:' data not saved'})
       } else {
           res.json({obj:saveObj, message : 'data saved'})
       }

   })


});
