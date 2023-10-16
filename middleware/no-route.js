const noRoute = (req, res) =>
  res.status(400).send(`route ${req.url} does not exist`)

module.exports = noRoute
