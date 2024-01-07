import React from 'react'
import { useEffect,useState } from 'react'
import WorkoutDetails from './WorkoutDetails'
import Workoutform from './Workoutform'
import { useDispatch,useSelector } from 'react-redux'
import { addWorkout } from '../features/Workout/WorkoutSlice'
function Home() {
    // const [workouts, setWorkouts] = useState(null)
  const dispatch=useDispatch()
 
  useEffect(() => {
    const fetchWorkouts = async () => {
  try {
    const response = await fetch('/api/workouts');
    const json = await response.json();
    console.log('Fetched workouts:', json);

    if (response.ok) {
      json.forEach((workout) => {
        dispatch(addWorkout(workout));
      });
    }
  } catch (error) {
    console.error('Error fetching workouts:', error);
  }
};

    fetchWorkouts()
  }, [])
   const workouts=useSelector((state)=>state.workout)
   console.log("Workouts :", workouts)
  return (
    <div className='flex justify-around pt-10 ' >
        <div className='w-1/3'>
            
            {workouts && workouts.map((workout)=>(
                <WorkoutDetails key={workout._id} workout={workout}/>
            ))}
            </div>
           <div className=" h-fit">
            <Workoutform/>
           </div>
      
    </div>
  )
}

export default Home
