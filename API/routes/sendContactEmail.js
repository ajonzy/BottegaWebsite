var express = require('express');
var router = express.Router();

router.post('/send_contact_email', function(req, res, next) {
    const body = req.body;

    const first = body.first;
    const last = body.last;
    const phone = body.phone;
    const email = body.email;
    const purpose = body.purpose;
    const message = body.message;

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'alex@bottega.tech',
        from: 'alex@bottega.tech',
        subject: 'Information Request',
        text: `First Name: ${first}\n\nLast Name: ${last}\n\nPhone Number: ${phone}\n\nEmail: ${email}\n\nPurpose of Inquiry: ${purpose}\n\nMessage: ${message}`
    };
    sgMail.send(msg);
    res.send("Done")
});

module.exports = router;