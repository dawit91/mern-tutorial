import { useState, useEffect } from "react"
import { FaSignInAlt } from "react-icons/fa"


function Login() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { email, password} = formData
    const onChange = (e) => {
        setFormData( (previousState) => ({
            ...previousState,
            [e.target.name]: e.target.value
        }))
    }
    const onSubmit = () => {}
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