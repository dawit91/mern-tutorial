import { useState, useEffect } from "react"
import { FaSignInAlt } from "react-icons/fa"
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { login,reset } from "../features/auth/authSlice"
import {toast} from 'react-toastify'

function Login() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { email, password} = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isSuccess, isLoading, isError, message, user} = useSelector(
        (state) => state.auth
    )

    useEffect( () => {
        if(isError){
            toast.error(message)
        }
        if(isSuccess || user) {
            navigate('/')
        }
        dispatch(reset())
    }, [user, isError, isSuccess, message,dispatch, navigate ])
    const onChange = (e) => {
        setFormData( (previousState) => ({
            ...previousState,
            [e.target.name]: e.target.value
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
       const userData = {
        email,
        password
       } 

       dispatch(login(userData))
    }

    if(isLoading) {
        return <h1>Loading</h1>
    }
  return (
    <>
        <section className="heading">
            <h1>
                <FaSignInAlt /> Login
            </h1>
            <p>Login & create goal setting</p>
        </section>
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                <input type="text" className="form-control" id='email' value={email} name="email" placeholder="Enter your email" onChange={onChange}/>
                </div>
                <div className="form-group">
                <input type="password" className="form-control" id='password' value={password} name="password" placeholder="Enter password" onChange={onChange}/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-block">Submit</button>
                </div>
            </form>
        </section>
    </>
  )
}

export default Login