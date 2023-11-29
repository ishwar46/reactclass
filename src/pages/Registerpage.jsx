import React, { useState } from "react";

const RegisterPage = () => {
    //Step 1: Create a state variable for each input field

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //Step 2: Create a function to handle the onChange event for each input field

    const changeFirstname = (e) => { 
        setFirstname(e.target.value)
    }

    const changeLastname = (e) => {
        setLastname(e.target.value)
    }

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    //handle clicking the submit button

    const handleSubmit = (e) => { 
        e.preventDefault(
            console.log(firstname, lastname, email, password)
       )
    }

    return (
        <>
            <h1 className='m-3'>Create an Account</h1>
            <form className="m-3 w-25">
                <div className="mb-3">
                    <label>{ firstname}</label>
                    {/* <label htmlFor="inputText" className="form-label">First Name</label> */}
                    <input onChange={changeFirstname} type="text" required className="form-control mb-2" id="firstname"/>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="inputText" className="form-label">Last Name</label>
                    <input onChange={changeLastname}type="text" required className="form-control mb-2" id="firstname"/>
                    
                </div>

                <div className="mb-3">
                    <label htmlFor="InputEmail" className="form-label">Email address</label>
                    <input onChange={changeEmail} type="email" required className="form-control mb-2" id="email"/>
                  
                </div>

                <div className="mb-3">
                    <label htmlFor="InputPassword" className="form-label">Password</label>
                    <input onChange={changePassword} type="password" required className="form-control mb-2" id="password"/>
                </div>
                <button onClick={handleSubmit} type="submit" className="btn btn-primary w-100">Register</button>
                <br />
                <br />
                <a href="#" className="text-decoration-none text-blank">Already have an account? Login Here</a>
            </form>
        </>

    )   

   
}

export default RegisterPage