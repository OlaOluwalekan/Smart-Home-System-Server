const receiveEmail = require('../mailer/receive-email')
const { mailReceived } = require('../mailer/response')

const contactUsEmail = async (req, res) => {
  const { name, subject, message, email } = req.body
  receiveEmail(subject, message, email)
  mailReceived(email, subject, name)
  res.status(200).json({ message: 'sent' })
}

module.exports = { contactUsEmail }
