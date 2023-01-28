import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import './LoginForm.css'

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory()

  const loginDemo = async () => {
    dispatch(sessionActions.login({ credential: 'Demo-lition', password: 'password' }
    ))
      .then(history.push("/home"))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors)
      }
    )
  };

  return (
    <form className='login-form' onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <center>
          <h3 className="singIn-header">Welcome back.</h3>
      </center>
      <center>
        <button className='logIn-demo' type="submit" onClick={() => loginDemo()}>Demo User</button>
      </center>
      <center>
        <button className='logIn' type="submit">Continue</button>
      </center>
      <hr className="singIn-divider"/>
      <label>
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          placeholder='Your email address or username'
          required
        />
      </label>
      <label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          required
        />
      </label>
    </form>
  );
}

export default LoginForm;
