import { useEffect } from 'react'
import {useWorkoutsContext} from "../hooks/useWorkoutsContext"

import Workoutdetails from '../components/Workoutdetails'
import Workoutform from '../components/Workoutform'



function Home() {
 // const [workouts, setWorkouts]=useState(null)
  const {workouts, dispatch} = useWorkoutsContext()

  useEffect(()=>{
    const fetchWorkouts= async () =>{
      const response = await fetch ('/api/workouts')
      const json =await response.json()

      if (response.ok){
        dispatch({type: 'SET_WORKOUTS',payload: json})
      }
    }
    fetchWorkouts()
  },[dispatch])
  return ( 
    <div className='home'>
        <div className='workouts'>
          {workouts && workouts.map((workout)=>( 
            <Workoutdetails key={workout._id} workout={workout} />
          ))}
        </div>
        <Workoutform /> 
    </div>
  )
}

export default Home