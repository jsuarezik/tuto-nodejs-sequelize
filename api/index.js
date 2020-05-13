require('dotenv').config()
import express from 'express' // require('express')
import bodyParser from 'body-parser'
import routes from './routes'
const app = express(); //Server

const port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.use('/api/v1' , routes );

app.listen(port, () => {
    console.log(`Server running in port ${port}`);
})

export default app
