const express =require('express')
const app = express()
const port =16666

state = 'reeling in'
cloNum = 0

app.use(express.static(__dirname+'/pub'));

app.get("/get",function(req, res) {
  if(req == undefined)
    state = req.query.state
    cloNum = req.query.cloNum
    console.log(cloNum)
    res.send()
});


app.get("/ajax_data",function(req, res) {
  res.send({'state':state, 'cloNum':cloNum})
});

app.listen(port,()=>{
  console.log(`Listening on port ${port}`)
});
