const express=require('express');
const app=express();
const cookieParser = require('cookie-parser')
const bodyparser=require('body-parser')
const path=require('path')
const fileUpload=require('express-fileupload')
const errorMiddleware=require('./middlewares/error')

app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}))
app.use(cookieParser())
app.use(fileUpload())
//const dotenv=require('dotenv')
if (process.env.NODE_ENV !== 'PRODUCTION') require('dotenv').config({ path: 'backend/config/config.env' })
//dotenv.config({path:'backend/config/config.env'})

//import all routes

const auth=require('./routes/auth')


app.use('/api/v1',auth)

if (process.env.NODE_ENV === 'PRODUCTION') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
    })
}
//middle ware to handle errors
app.use(errorMiddleware)
module.exports=app