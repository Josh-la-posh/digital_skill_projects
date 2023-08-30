import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './login.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';



function Register() {

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = () => {
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    console.log(user.email);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  setEmail('');
  setUsername('');
  setPassword('');
    }

    


  return (
    <div className='login'>
        <div className="container">
            <p>Register</p>
            <form>
                <div className="">
                    <label>Full Name</label>
                    <input type="text" placeholder='Joshua Solomon' value={fullname} onChange={(e) => setFullname(e.target.value)} />
                </div>
                <div className="">
                    <label>Email</label>
                    <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="">
                    <label>Username</label>
                    <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="">
                    <label>Password</label>
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </form>
            <div className="btn">

            <Link to={"/"}><button onClick={onSubmit}>Submit</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Register