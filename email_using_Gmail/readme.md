[stack overflow link](https://stackoverflow.com/questions/72626410/how-do-i-send-email-from-nodemailer-in-nodejs-using-gmail)

[link to see other method of mail](https://www.courier.com/blog/how-to-send-emails-with-node-js)

[Freecodecamp link](https://www.freecodecamp.org/news/use-nodemailer-to-send-emails-from-your-node-js-server)

## one way

less secure apps is deprecated util 14/06/2022

you need to enable two step auth in your google account https://myaccount.google.com/signinoptions/two-step-verification?rapt=AEjHL4Nm5j8lzlmlfGjIPZ3JQPadURur-daRW6csSgARqTeML2jsYhw3cctrxLoOZXEWpIivj6eXEcaFt_EfQct4VY40OwxOEg

and create App Password https://myaccount.google.com/apppasswords?rapt=AEjHL4PZB2jtGe1EVQ1dS_jyte5bhU_hn44yc3rDR0k3BnmcIqzmocSf5sBDIN88P8vB7-owMYAWLK6m37OyA-_2C6IE7qapTg

so google will send a App password that you can login with nodemailer


## another one



At the time of writing, Less Secure Apps is no longer supported by google. And you can't use your google account password.

You're gonna have to generate a new app password.

App passwords only work if 2-step verification is turned on. Follow this steps to get the app password

    Go to https://myaccount.google.com/security
    Enable 2FA
    Create App Password for Email
    Copy that password (16 characters) into the pass parameter in Nodemailer auth.

const client = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "username@gmail.com",
        pass: "Google-App-Password-Without-Spaces"
    }
});

client.sendMail(
    {
        from: "sender",
        to: "recipient",
        subject: "Sending it from Heroku",
        text: "Hey, I'm being sent from the cloud"
    }
)



