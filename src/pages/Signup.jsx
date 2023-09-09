import React, { useState } from "react";
import { useLocation, useNavigate,Link } from "react-router-dom";
import { SignUp } from "../api";

export default function Signup(){
   const navigate = useNavigate()
   const [status, setStatus] = useState("idle")
   const [error, setError] = useState(null)
   const [formData, setFormData] = useState({
    email: "",
    password: "",
    rePassword: ""
   })
   const location = useLocation()
   const from = location.state?.from || '/host'



    function handleSubmit(e){
       e.preventDefault()
       if(formData.password!==formData.rePassword){
        setError("Password do not match")
        return
       }
       if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)){
        setError("Email is not valid")
        return
       }
       setStatus("submitting")
       SignUp(formData.email,formData.password)
       .then(data => {
           localStorage.setItem("loggedin", true)
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
            <h1>Create your account</h1>
            {error && <h3 className="login-first">{error.message ? error.message : error}</h3>}
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
                <input type="password"
                       placeholder="Repeat password"
                       id="re-password"
                       name="rePassword"
                       onChange={handleChange}/>
                </div>
                <button disabled={status==="submitting" ? true : false}>  {status === "submitting" 
                        ? "Signing up..." 
                        : "Sign up"
                    }</button>
            </form>
            <p>Already have an account? <Link to='/login'>Sign in</Link></p>
        </div>
    )
}