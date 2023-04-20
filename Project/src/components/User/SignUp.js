import React, { useState } from 'react';
import classes from './SignUp.module.css';


function Signup(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [City, setEnteredCity] = useState("");
  const [Country, setEnteredCountry] = useState("");
  const [address, setAddress] = useState("");
  const [mobilenumber, setMobileNumber] = useState("");

  const PhoneNumberChangeHandler = (event) => {
    setMobileNumber(event.target.value);
  }


  const CountryChangeHandler = (event) => {
    setEnteredCountry(event.target.value);
};
  const CityChangeHandler = (event) => {
    setEnteredCity(event.target.value);
};

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const AddressChangeHandler =(event) => {
    setAddress(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(password===confirmPassword)
    {
      console.log("yes");
      fetch("http://localhost:5000/registor",{
        method:"POST",
        crossDomain:true,
        headers:{
          "Content-Type":"application/json",
          Accept:"application/json",
          "Access-Control-Allow-Origin":"*",
        },
        body:JSON.stringify({
          username,
          email,
          password,
          City,
          Country,
          address,
          mobilenumber
        })
      }).then((res)=>res.json())
      .then((data)=>{
        console.log(data,"user registration");
        if(data.status=="saved"){
          alert("Registration successfull");
        }
        else
        alert("something went wrong");
      })
    }
    setConfirmPassword('');
    setEmail('');
    setPassword('');
    setUsername('');
    setEnteredCity('');
    setEnteredCountry('');
    setMobileNumber('');
    setAddress('');
  };
  const hrStyle = {
    backgroundColor: '#40B555', 
    height: '3px',
    border: 'none'
  };
  return (
    <div>
      <div className={classes.heading}>Signup Page</div>
      <hr style={hrStyle}></hr>
      <form onSubmit={handleSubmit}>
        <div className={classes.column}>
        <div className={classes.row}>
          <div className={classes.name}><label>Username:  </label></div>
          <div className={classes.enter}><input  placeholder='username...' className={classes.inp}
              name="username"
              type="text"
              value={username}
              onChange={handleUsernameChange} /></div>
        </div>
        <div className={classes.row}>
        <div className={classes.name}><label>Email:</label></div>
        <div className={classes.enter}><input  className={classes.inp}  placeholder='email...'
              name="email"
              type="email"
              value={email}
              onChange={handleEmailChange} /></div>
      </div>
        <div className={classes.row}>
        <div className={classes.name}><label>Password:</label></div>
        <div className={classes.enter}><input  className={classes.inp}  placeholder='password...'
              name="password"
              type="password"
              value={password}
              onChange={handlePasswordChange} /></div>
        </div>
        </div>
        <div className={classes.column}>
        <div className={classes.row}>
        <div className={classes.name}><label>Confirm Password:</label></div>
        <div className={classes.enter}> <input  className={classes.inp}  placeholder='password...'
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange} />
        </div>
        </div>

        <div className={classes.row}>
        <div className={classes.name}><label>City:</label></div>
        <div className={classes.enter}> <input  className={classes.inp}  placeholder='enter city...'
              name="city"
              type="text"
              value={City}
              onChange={CityChangeHandler} />
        </div>
        </div>

        <div className={classes.row}>
        <div className={classes.name}><label>Country:</label></div>
        <div className={classes.enter}> <input  className={classes.inp}  placeholder='enter country...'
              name="country"
              type="text"
              value={Country}
              onChange={CountryChangeHandler} />
        </div>
        </div>
        </div>
        <div>
        <div>
          <div className={classes.name}><label>Street Address:</label></div>
          <div className={classes.enter}> <input  className={classes.inp}  placeholder='enter street address...'
                name="address"
                type="text"
                value={address}
                onChange={AddressChangeHandler} />
          </div>
          </div>
        </div>

        <div>
        <div>
          <div className={classes.name}><label>Mobile Number:</label></div>
          <div className={classes.enter}> <input  className={classes.inp}  placeholder='Phone number...'
                name="mobilenumber"
                type="text"
                value={mobilenumber}
                onChange={PhoneNumberChangeHandler} />
          </div>
          </div>
        </div>

        <button className={classes.get_started}>Sign In</button>
        <p><span className={classes.content}>Already have an account? </span><button onClick={props.onSwap} className={classes.login}><u>log in</u></button></p>
      </form>
    </div>
  );
}

export default Signup;
