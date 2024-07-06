import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import GoalForm from "../components/GoalForm"
import { getGoals } from "../features/goals/goalSlice"


function Dashboard() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user} = useSelector((state) => state.auth)
  const {goals, isSuccess, isError, isLoading, message} = useSelector( (state) => state.goals)
  useEffect(() => {
    if(!user) {
      navigate('/login')
    }
    if(isError) {
      console.log(message)
    }
    if(isSuccess) {
      dispatch(getGoals())
    }
  },[user,navigate])
  return (
    <>
    <section className="heading">Welcome {user && user.name}</section>
    <GoalForm />
    </>
  )
}

export default Dashboard