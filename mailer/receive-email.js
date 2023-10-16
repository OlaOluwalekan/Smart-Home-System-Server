const nodemailer = require('nodemailer')

const receiveEmail = (subject, message, sender) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
      user: 'overseehomes@gmail.com',
      pass: process.env.EMAIL_PASSWORD,
    },
  })

  const emailOptions = {
    from: sender,
    to: 'overseehomes@gmail.com',
    subject: `${subject} from ${sender}`,
    text: message,
  }

  transporter.sendMail(emailOptions, (err, info) => {
    if (err) {
      console.log(err)
    } else {
      console.log('email sent successfully')
    }
  })
}

module.exports = receiveEmail
