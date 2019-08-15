var express = require('express');
var router = express.Router();

router.post('/send_syllabus_email', function(req, res, next) {
    const body = req.body;

    const first = body.first;
    const last = body.last;
    const phone = body.phone;
    const email = body.email;

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'alex@bottega.tech',
        from: 'alex@bottega.tech',
        subject: 'Syllabus Request',
        text: `First Name: ${first}\n\nLast Name: ${last}\n\nPhone Number: ${phone}\n\nEmail: ${email}`,
        // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail.send(msg);
    res.send("Done")
});

module.exports = router;