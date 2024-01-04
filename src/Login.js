import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from "./features/userSlice"
import { auth } from "./firebase"
import './css/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const loginToApp = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then(userAuth => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          
        }))
      })
      .catch(error => alert(error));
  };


  const register = () => {
    if (!name) {
      return alert('Full name is required');
    }

    auth.createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user.updateProfile({
          displayName: name,
         
        })
          .then(() => {
            dispatch(login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              
            }))
          })
      }).catch(error => alert(error))

  }










  return (
    <div className="login">
      <img
        src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
        alt="Netflix logologo"
      />

      <form>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Full name (required if registering)"
        />
       
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" onClick={loginToApp}>Sign In</button>
      </form>
      
        <span className="login__register" onClick={register}>Register Now</span>
      
    </div>
  );
}

export default Login