import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, ssetImageUrl] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory()

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      const user = dispatch(sessionActions.signup({ firstName, lastName, imageUrl, email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
        console.log('this is user from handleSubmit', user)
        if(user) history.push('/')
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <form className='signup-form' onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <center>
        <h4 className="modal-header">Sign&nbsp;Up</h4>
      </center>
      <label>
        <input
          className="signup-input"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          required
        />
      </label>
      <label>
        <input
          className="signup-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Username'
          required
        />
      </label>
      <label>
        <input
          className="signup-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          required
        />
      </label>
      <label>
        <input
          className="signup-input"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder='Confirm Password'
          required
        />
      </label>
      <label>
        <input
          className="signup-input"
          type="text"
          value={imageUrl}
          onChange={(e) => ssetImageUrl(e.target.value)}
          placeholder='Upload a Picture'
          required
        />
      </label>
      <button className='sinUp-button' type="submit">Create Account</button>
    </form>
  );
}

export default SignupFormPage;
