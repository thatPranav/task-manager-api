const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jawajipranav@gmail.com',
        subject: 'Thanks for joining!',
        text: `Welcome to the app, ${name}. Let me know how you get along.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jawajipranav@gmail.com',
        subject: 'Sorry to see you go',
        text: `Hi ${name}, why did you cancel the service?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}