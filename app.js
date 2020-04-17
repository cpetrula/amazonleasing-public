const express = require('express')
const app = express()
const path = require('path');
const port = process.env.PORT || 3000
global.__basedir = __dirname;
app.use(express.static(__basedir+'/dist'))

app.listen(port, () => console.log(`Listening on port ${port}!`))