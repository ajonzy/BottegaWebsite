var express = require('express');
var router = express.Router();

router.post('/send_instructor_endorsement_email', function(req, res, next) {
    const body = req.body;

    const first = body.first;
    const last = body.last;
    const phone = body.phone;
    const email = body.email;
    const city = body.city;
    const state = body.state;
    const district = body.district;
    const school = body.school;
    const cactus = body.cactus;

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'alex@bottega.tech',
        from: 'alex@bottega.tech',
        subject: 'Instructor Endorsement Request',
        text: `First Name: ${first}\n\nLast Name: ${last}\n\nPhone Number: ${phone}\n\nEmail: ${email}\n\nCity: ${city}\n\nState: ${state}\n\nDistrict: ${district}\n\nSchool: ${school}\n\nCACTUS Number: ${cactus}`
    };
    sgMail.send(msg);
    res.send("Done")
});

module.exports = router;