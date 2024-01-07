import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addWorkout } from '../features/Workout/WorkoutSlice'

function Workoutform() {
  const dispatch=useDispatch()
  const [title,settitle]=useState('')
  const [load,setload] = useState('')
  const [reps,setreps] = useState('')
   const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    try {
      const response = await fetch('/api/workouts', {
        method: 'POST',
        body: JSON.stringify(workout),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        const jsonData = await response.json();
        settitle('');
        setload('');
        setreps('');
        console.log('New workout added successfully ', jsonData);

        // Ensure to dispatch the resolved value of the Promise
        dispatch(addWorkout(jsonData));
      }
    } catch (error) {
      console.error('Error adding workout:', error);
    }
  };
  return (
    <form className="flex flex-col items-center gap-3 p-4 border border-black 2 h-1/4 rounded-xl"  onSubmit={handleSubmit}>
      <h1 className="text-xl font-extrabold text-center">Fill Your Exercise</h1>
      <div>
         <label htmlFor="title" className='w-64 h-10 text-xl font-bold text-center text-black'
         > 
         Exercise Title :
         </label>
         <input className="h-10 px-5 w-96 bg-zinc-300 rounded-xl" name='title' type="text" onChange={(e)=>settitle(e.target.value)} value={title}/>
      </div>
      <div>
        <label className='w-64 h-10 text-xl font-bold text-center text-black' htmlFor="Load" 
        >
           Load
        </label>
        <input className="h-10 px-5 w-96 bg-zinc-300 rounded-xl" name="load" type="text" onChange={(e)=>setload(e.target.value)} value={load}/>
       </div>
     <div>
        <label className='w-64 h-10 text-xl font-bold text-center text-black'  htmlFor="Reps"
        >
          Reps
        </label>
        <input className="h-10 px-5 w-96 bg-zinc-300 rounded-xl" name="Reeps" type="text" onChange={(e)=>setreps(e.target.value)} value={reps}/>
    </div>
    <button  className='justify-center w-1/3 h-10 text-white bg-slate-900 text-whiteoutline-none rounded-xl hover:bg-slate-600'> SUBMIT</button>
  </form>
  )
}

export default Workoutform
