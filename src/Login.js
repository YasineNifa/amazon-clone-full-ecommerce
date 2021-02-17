import React, {useState} from 'react'
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import {auth} from "./firebase"

function Login() {
    const history = useHistory();// allow us to automatically change the url
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const signIn = (e) =>{
        e.preventDefault()//to prevent refreshing
        // some fancy firebase login ...
        auth.signInWithEmailAndPassword(email,password).then( (auth) =>{history.push('/')}).catch(error=>alert(error.message))
        

    }


    const register = (e) => {
        e.preventDefault();
        // some fancy firebase register ...
        auth.createUserWithEmailAndPassword(email,password).then((auth) => {console.log(auth)}).catch(error => alert(error.message));
        if (auth){
            history.push('/')// redirect
        }
    }

    return (
        <div className="login">
            <Link to ='./'>
            <img className = "login__logo" src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'/>
            </Link>

            <div className="login__container">
                <h1>
                    Sign in
                </h1>
                <form>
                    <h5>
                        Email
                    </h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>
                        Password
                    </h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button className='login__signInButton' onClick={signIn} type='Submit'>Sign In</button>
                </form>

                <p>
                By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>




    )
}

export default Login
