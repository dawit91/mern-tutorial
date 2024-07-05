import { useState, useEffect } from "react"
import { FaUser } from "react-icons/fa"
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { register, reset } from "../features/auth/authSlice"

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const {name, email, password, password2} = formData

    const {user, isSuccess, isLoading, isError, message} = useSelector( (state) => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect( () => {
        if(isError) {
            toast.error(message)
        }

        if(isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])
    
    const onChange = (e) => {
        setFormData( (previousState) => ({
            ...previousState,
            [e.target.name]: e.target.value
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if(password !== password2) {
            toast.error('Passwords do not match')
        }
        else {
            const userData = {
                name,
                email,
                password,
            }

            dispatch(register(userData))
        }

    }

    if(isLoading) {
        // return <Spinner />
        return <h1>Loading</h1>
    }
  return (
    <>
        <section className="heading">
            <h1>
                <FaUser />Register
            </h1>
            <p>Please create an account</p>
        </section>
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                <input type="text" className="form-control" id='name' value={name} name="name" placeholder="Enter your name" onChange={onChange}/>
                </div>
                <div className="form-group">
                <input type="text" className="form-control" id='email' value={email} name="email" placeholder="Enter your email" onChange={onChange}/>
                </div>
                <div className="form-group">
                <input type="password" className="form-control" id='password' value={password} name="password" placeholder="Enter password" onChange={onChange}/>
                </div>
                <div className="form-group">
                <input type="password" className="form-control" id='password2' value={password2} name="password2" placeholder="Confirm password" onChange={onChange}/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-block">Submit</button>
                </div>
            </form>
        </section>
    </>
  )
}

export default Register