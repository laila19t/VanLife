import React, { useState,useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../api";
import { userAuthContext } from "../App";

export default function Login(){
   const navigate = useNavigate()
   const [status, setStatus] = useState("idle")
   const [error, setError] = useState(null)
   const [formData, setFormData] = useState({
    email: "",
    password: ""
   })
   const location = useLocation()
   const from = location.state?.from || '/host'
   const [logged,isLogged] = useContext(userAuthContext);



    function handleSubmit(e){
       e.preventDefault()
       console.log('h')
       setStatus("submitting")
       loginUser(formData.email,formData.password)
       .then(data => {
           localStorage.setItem("loggedin", true)
           isLogged(true)
           setError(null)
           navigate(from, { replace: true })
       })
       .catch(err => {
           setError(err)
       })
       .finally(() => {
           setStatus("idle")
       })
    
    } 

    function handleChange(e) {
        console.log(e.target.value)
        const {name, value} = e.target
        setFormData(prevFormData =>  ({
                ...prevFormData,
                [name] :value
            })
        )
    }

    return(
        <div className="login-container">
            {location.state ? <h2 className="login-first">{location.state.message}</h2> : null}
            <h1>Sign in to your account</h1>
            {error && <h3 className="login-first">{error.message}</h3>}
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="inputs-container">
                <input type="text"
                       placeholder="Email address"
                       id="email"
                       name="email"
                       onChange={handleChange}/>
                <input type="password"
                       placeholder="Password"
                       id="password"
                       name="password"
                       onChange={handleChange}/>
                </div>
                <button disabled={status==="submitting" ? true : false}>  {status === "submitting" 
                        ? "Logging in..." 
                        : "Log in"
                    }</button>
            </form>
            <p>Don't have an account? <Link to='/signup'>Create one now</Link></p>
        </div>
    )
}