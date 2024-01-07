import {createSlice} from "@reduxjs/toolkit"

const WorkoutSlice=createSlice({
    name:"workout",
    initialState:[],
    reducers:{
        addWorkout:(state,action)=>{
            return [action.payload, ...state]
        },
        removeWorkout:(state,action)=>{
             const workoutIdToRemove = action.payload;
            return state.filter((workout) => workout._id !== workoutIdToRemove);
        }
    }
})
export const {addWorkout,removeWorkout}=WorkoutSlice.actions
export default WorkoutSlice.reducer