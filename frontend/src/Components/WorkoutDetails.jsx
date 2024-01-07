import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { removeWorkout } from '../features/Workout/WorkoutSlice';

function WorkoutDetails({workout}) {
  const [Isdelete,setisdelete] =useState(false)
  const dispatch=useDispatch()
  const handleClick=async()=>{
    setisdelete(true)
    const response=await fetch('/api/workouts/'+workout._id,{
      method:'DELETE'
    })
    const Json=await response.json();
    if(response.ok){
      dispatch(removeWorkout(workout._id))
    }
  }
  return (
    <div className="flex justify-between p-10 my-10 duration-1000 ease-out bg-white shadow-lg rounded-xl h-fit transiton-all">
      <div>
        <h2 className="pb-5 font-serif text-2xl font-extrabold text-green-700 uppercase"> {workout.title}</h2>
        <p><strong>Load (kg) :</strong> {workout.load}</p>
        <p><strong>Reps :</strong> {workout.reps}</p>
      </div>
      <button className="px-3 py-2 bg-red-600 rounded-lg hover:bg-red-500 h-1/3" onClick={handleClick}>
        
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button>
      

    
    </div>
  )
}

export default WorkoutDetails
