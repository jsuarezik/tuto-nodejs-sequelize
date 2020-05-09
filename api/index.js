require('dotenv').config()
import express from 'express' // require('express')
import bodyParser from 'body-parser'

const app = express(); //Server

const port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.get('*' ,  (req, res) => {
    res.send('Hello world')
});

app.listen(port, () => {
    console.log(`Server running in port ${port}`);
})

export default app
