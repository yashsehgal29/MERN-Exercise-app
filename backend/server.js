require('dotenv').config()
const express=require('express');
const workoutRoutes = require('./routes/workouts')
const cors=require('cors')
//express app
const mongoose=require('mongoose')
const app= express();
app.use(cors())
// middleware this will be excecuted with each call request
app.use(express.json())

app.use((req, res, next) =>{
    console.log(req.path,req.method)
    next()
})
//set up route handler
app.use("/api/workouts",workoutRoutes)
//connect database
mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            //listening to reuests
            app.listen(process.env.PORT,()=>{
            console.log(`Server running on http://localhost:${process.env.PORT}`)
            })
        })
        .catch((err)=>{
            console.log(err)
        })

