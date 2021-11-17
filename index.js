const express = require('express')
const bodyParser = require('body-parser');

// const keys = require('./config/keys')

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())

require("./routes/emailRoutes.js")(app)

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
 
    const path = require('path')
    app.get('*', (req, res) => {
       res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
 }

const PORT = process.env.PORT || 5000
app.listen(PORT)