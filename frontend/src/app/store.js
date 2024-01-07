import {configureStore}from "@reduxjs/toolkit"
import workoutreducer from "../features/Workout/WorkoutSlice"
 export const store=configureStore({
    reducer:{
        workout:workoutreducer
    }
})
