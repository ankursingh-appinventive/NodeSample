const express = require('express')
//.........................................................
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
//.........................................................

const {plus,minus,mul,div,mod,sqr} = require("./calc");

const app = express()
const port = 5500
app.use(express.json());
//.........................................................................................
const options ={
    definition: {
        openapi : '3.0.0',
        info: {
            title: 'NodeJS calculator api',
            version: '1.0.0'
        },
        servers:[
            {
                url: 'http://localhost:5500/'
            }
        ]
    },
    apis: ['./index.js']
}

const swaggerSpec = swaggerJSDoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
//............................................................................................
/**
 * @swagger
 * /:
 *  get:
 *      summary: this api is used for calculator and check working or not
 *      description: this api is used for calculator and check working or not
 *      responses:
 *          200:
 *              description: To test calculator
 */



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/add', (req, res) => {
    let result = plus(req.body.x,req.body.y);
    res.send(`${req.body.x} + ${req.body.y} = ${result}`)
    // res.send('Hello World!')
})

app.post('/subs', (req, res) => {
    let result = minus(req.body.x,req.body.y);
    res.send(`${req.body.x} - ${req.body.y} = ${result}`)
    // res.send('Hello World!')
})

app.post('/mult', (req, res) => {
    let result = mul(req.body.x,req.body.y);
    res.send(`${req.body.x} * ${req.body.y} = ${result}`)
    // res.send('Hello World!')
})

app.post('/division', (req, res) => {
    let result = div(req.body.x,req.body.y);
    res.send(`${req.body.x} / ${req.body.y} = ${result}`)
    // res.send('Hello World!')
})

app.post('/mod', (req, res) => {
    let result = mod(req.body.x,req.body.y);
    res.send(`${req.body.x} % ${req.body.y} = ${result}`)
    // res.send('Hello World!')
})

app.post('/square', (req, res) => {
    let result = sqr(req.body.x);
    res.send(`Square of ${req.body.x} = ${result}`)
    // res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Calculator is listening on port ${port}`)
})