import React from 'react'
import { useEffect,useState } from 'react'
function Home() {
    const [workouts,setworkouts] =useState(null)
    useEffect(()=>{
        const fetchworkouts=async()=>{
            const response=await fetch('/api/workouts')
            const Json=await response.json()
            if(response.ok){
                setworkouts(Json)
            }
        }
        fetchworkouts()
    },[])
  return (
    <div >
        <div>
            {workouts && workouts.map((workout)=>(
                <p key={workout._id}>{workout.title}</p>
            ))}
        </div>
      
    </div>
  )
}

export default Home
