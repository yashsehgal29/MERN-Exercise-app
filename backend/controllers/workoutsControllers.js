const Workout=require('../models/WorkoutModels')
const mongoose=require('mongoose')
//post a workout
const createWorkout=async(req,res)=>{
    const {title,load,reps}=req.body
    try{
        const workout=await Workout.create({title,load,reps})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}
//get all workout
const getworkouts=async(req,res)=>{
    const workouts=await Workout.find({}).sort({createdAt:-1})
    res.status(200).json(workouts)
}
//get a single workout


const getworkout=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout exists"})
    }
    const workout=await Workout.findById(id)
    if(!workout){
        return res.status(404).json({err: "element not found !"})
    }
    res.status(200).json(workout)

}

//delete a workout
const deleteworkout=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout exists"})
    }
    const workout=await Workout.findOneAndDelete({_id: id})
    if(!workout){
        return res.status(404).json({err: "element not found !"})
    }
    res.status(200).json(workout)
    
}

//update a workout
const upddateworkout=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout exists"})
    }
    const workout=await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!workout){
        return res.status(404).json({err: "element not found !"})
    }
    res.status(200).json(workout)

}

module.exports={
    createWorkout,
    getworkout,
    getworkouts,
    deleteworkout,
    upddateworkout
}