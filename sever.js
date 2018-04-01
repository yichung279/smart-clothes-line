const express =require('express')
const app = express()
const fs = require('fs')
const port =16666
var key = fs.readFileSync('ssl/privkey.pem')
var cert = fs.readFileSync( 'ssl/cert.pem' )
var ca = fs.readFileSync( 'ssl/fullchain.pem' )
var options = {
  key: key,
  cert: cert,
  ca: ca
}
state = 'reeling in'
cloNum = 0

app.use(express.static(__dirname+'/pub'));

app.get("/get", (req, res) => {
  console.log('reseive request')
  console.log(req.query.state)
  if(req != undefined)
    state = req.query.state
    res.send('aaa')
});


app.get("/ajax_data",function(req, res) {
  res.send({'state':state, 'cloNum':cloNum})
});

var https = require('https')
https.createServer(options, app).listen(port)
