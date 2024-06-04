const express=require('express');
const mongoose=require('mongoose');
const cors = require('cors');
const resturantRoutes=require('./routes/resturantRoutes.js')

require('dotenv').config()

const app=express();

app.use(express.json());

app.use(cors());

app.use('/api/resturants',resturantRoutes)

//connect to the mongo db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('Connected to the DB');
    app.listen(process.env.PORT,()=>{
        console.log('Nodejs app is runing');
    });
}).catch((error)=>{
    console.log(error);
})