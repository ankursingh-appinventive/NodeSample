const express = require("express")
const app = express();
app.get('/',(req,res)=>{
    res.send("Welcome to server");
})

app.get('/add/:a/:b',(req,res)=>{
    let num1 = parseInt(req.params.a)
    let num2 = parseInt(req.params.b)
    let sum = (num1+num2).toString();
    // let result = toString(sum);
    res.send(sum);
})

app.listen(5000, ()=>{
    console.log("Listning on port 5000")
})