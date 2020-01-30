const sgMail = require('@sendgrid/mail');

module.exports = app => {
    app.get('/api/inbound_email/:full_name/:email/:message', (req, res) => {


        sgMail.setApiKey("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");
        const msg = {
        to: "kchie002@gmail.com",
        from: 'kchie002@gmail.com',
        subject: 'Web Portfolio Email ALERT',
        text: 'From:' + req.params.full_name + 'at' + req.params.email,
        html: '<h1>From: ' + req.params.full_name + ' at ' + req.params.email + '</h1><br />' + req.params.message,
        };
        sgMail.send(msg);

        sgMail.setApiKey("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");
        const msg2 = {
        to: req.params.email,
        from: 'kchie002@gmail.com',
        subject: 'Thank you for reaching out!',
        text: 'I will review your email as soon as I can!',
        html: '<h3>Thank you for contacting me!</h3><p><strong>I will be reviewing your message as soon as I can!</strong></p><p>In the meantime if you do have any further comments or questions for me, please respond to this email and I  will get your message!</p> <p>Have a wonderful day!</p><p>Thank you,<br />Kathy Chiem</p>',
        };
        sgMail.send(msg2);
    })

    // app.get('/', (req, res) => {
    //     console.log(ip.address())
    // })
}