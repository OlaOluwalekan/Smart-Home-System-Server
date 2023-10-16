const nodemailer = require('nodemailer')

const sendEmail = (subject, message, receiver) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
      user: 'overseehomes@gmail.com',
      pass: process.env.EMAIL_PASSWORD,
    },
  })

  const emailOptions = {
    from: 'overseehomes@gmail.com',
    to: receiver,
    subject: subject,
    html: message,
  }

  transporter.sendMail(emailOptions, (err, info) => {
    if (err) {
      console.log(err)
    } else {
      console.log(`email sent successfully to ${receiver}`)
    }
  })
}

module.exports = sendEmail
