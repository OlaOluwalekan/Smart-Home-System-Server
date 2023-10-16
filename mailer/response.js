const sendEmail = require('./send-email')
const mailReceivedTemp = require('./templates/mail-recieved')

const mailReceived = (receiver, subject, name) => {
  sendEmail(
    `Response to your enquiry  on ${subject}`,
    mailReceivedTemp(name),
    receiver
  )
}

module.exports = { mailReceived }
