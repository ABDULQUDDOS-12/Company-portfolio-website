const express = require('express').Router();
const appRoute = require('./routes/routes.js')
const app = express();
const PORT = process.env.PORT||5000;
app.use(express.json())
app.use('/api',appRoute)
app.listen(PORT,()=>{
    console.log("Server is started ....!")
})