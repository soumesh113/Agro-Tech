import React, { useState } from 'react';
import classes from './Login.module.css';
function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/login-user",{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        username,
        password
      })
    }).then((res)=>res.json())
    .then((data)=>{
      console.log(data,"user login");
      if(data.status=="ok"){
        alert("login Succesfull");
        window.localStorage.setItem("city",data.data.City);
        window.localStorage.setItem("country",data.data.Country);
        window.localStorage.setItem("username",data.data.username);
        window.localStorage.setItem("address",data.data.address);
        window.localStorage.setItem("token",data.data);
        window.localStorage.setItem("loggedIn",true);
      }
      else
      alert("something went wrong");
    })
    setUsername("");
    setPassword("");
  };
  const hrStyle = {
    backgroundColor: '#40B555', 
    height: '3px',
    border: 'none'
  };
  return (
    <div>
      <div className={classes.heading}>Login Page</div>
      <hr style={hrStyle}></hr>
      <form onSubmit={handleSubmit}>
      <div className={classes.field}>
        <div className={classes.name}><label>Username:</label></div>
        <div className={classes.enter}><input  className={classes.inp}  placeholder='username...'
              name="username"
              type="text"
              value={username}
              onChange={handleUsernameChange} /></div>
      </div>
      <div className={classes.field}>
        <div className={classes.name}><label>Password:</label></div>
        <div className={classes.enter}><input  className={classes.inp}  placeholder='password...'
              name="password"
              type="password"
              value={password}
              onChange={handlePasswordChange} /></div>
        </div>
        <br />
        <button className={classes.signIn}>Sign In</button>
        <p><span className={classes.content}>Don't have an account? </span><button onClick={props.onSwap} className={classes.login}><u>sign up</u></button></p>
      </form>
    </div>
  );
}

export default Login;

