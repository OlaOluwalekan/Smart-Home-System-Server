require('dotenv').config()
require('express-async-errors')

// IMPORTATIONS

// EXPRESS APP INITIALIZATION
const express = require('express')
const app = express()

// CORS
const cors = require('cors')

// IMPORT ERROR MIDDLEWARE
const noRouteMiddleware = require('./middleware/no-route')
const ErrorHandlerMiddleware = require('./middleware/error-handler')

// IMPORT ROUTES
const emailRoutes = require('./routes/email')

// USE MIDDLEWARE
app.use(cors())

// USE BODY PARSER
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Home')
})

// USE EMAIL ROUTES
app.use('/api/v1/email', emailRoutes)

// USE ERROR MIDDLEWARES
app.use(noRouteMiddleware)
app.use(ErrorHandlerMiddleware)

const port = process.env.PORT || 9000

app.listen(port, console.log(`server is listening on port ${port}...`))
