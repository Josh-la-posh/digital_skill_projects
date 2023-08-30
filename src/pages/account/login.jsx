import React, { useEffect, useState } from 'react'
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';


function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    var userCanLogin;

    const onSubmit = () => {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
                // Signed in 
                    const user = userCredential.user;
                        // ...

                    if (user.email) {
                        userCanLogin = user.email;
                        
                        console.log('yes');
                        navigate('/');
                    }
                    
            })
              .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
            });
            setEmail('');
            setPassword('');
        }

        // useEffect(() => {
        //     if (userCanLogin) {
        //         navigate('/');
        //         console.log('yes');
        //     }
        // }, [navigate]);


  return (
    <div className='login'>
        <div className="container">
            <p>Login</p>
            <form>
                <div className="">
                    <label>Email</label>
                    <input type="text" placeholder='Username / Email' value={email} onChange={(e) => {setEmail(e.target.value)}} />
                </div>
                <div className="">
                    <label>Password</label>
                    <input type="password" placeholder='Password' value={password} onChange={(e) => {setPassword(e.target.value)}} />
                </div>
            </form>
            <div className="btn">

            <button onClick={onSubmit}>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Login