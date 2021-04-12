import React, { useState, useEffect } from 'react'
import API from '../Utils/ApiConstant'
import { APICall } from '../Utils/CommonFunctions'
import './SuperUser.css'

function LogIn() {

    //to hide navbar
    useEffect(() => {
        document.querySelector('.sidebar').classList.add('hide__navbar')
    }, [])

    // api
    const [phoneno, setPhoneno] = useState('')
    const [password, setPassword] = useState('')

    const login = e => {
        e.preventDefault()
        let object = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "phone": phoneno,
                "password": password,
                "device": "web"
            })
        }

        APICall(API.SIGNUP, object, (error, result) => {
            console.log(result)
            if (error)
                console.log(error)

            else if (result.status) {
                console.log(result)
            }

            else
                alert("Something went wrong")
        })
    }


    return (
        <>

            <div className="main-outer-div signup-login-outer-div">
                <div className="myorders-outer-div">
                    <div className="myorders-inner-div sign-up">
                        <h2 style={{ textAlign: "center", color: "#2F6AFF", fontFamily: "Poppins", fontWeight: "bold", marginTop: "1%" }}>Log In</h2>
                        <form className=" sign-up-form">
                            <div class="form-group">
                                <label for="phone">Phone No:</label>
                                <input type="tel" class="form-control" id="phone" name="phone" placeholder="1234567890" required onChange={e => setPhoneno(e.target.value)} />
                            </div>
                            <div class="form-group">
                                <label for="password">Password:</label>
                                <input type="password" class="form-control" id="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                            </div>
                            <button type="submit" class="btn btn-primary btn-vendor-sign-up-login" onClick={login}>Log In</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogIn