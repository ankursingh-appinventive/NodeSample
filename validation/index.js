const { Console } = require('console');
const express = require('express')
const app = express()
const port = 3000;
app.use(express.json());
const joi = require('joi')


// definition of joi schema
const schema = joi.object({
    id : joi.number().required(),
    name : joi.string().min(3).max(20).required(),
    age : joi.number().min(18).max(60).required()
});

let Employees = [
    {id:20, name:"Ankur", age:20}
];

app.post('/employee',(req,res) => {
    const {id, name, age} = req.body
    const newEmp = {id, name, age}
    const response = schema.validate(newEmp);
    if(response){
        return res.send(response);
    }
    Employees.push(newEmp);
    // res.json(newEmp);
    // res.send("Employee added")
});

app.listen(port, ()=>{
    console.log("listning to port",port);
})

console.log(Employees)