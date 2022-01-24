import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

/* email Reducer */
const emailReducer = (state, action) => {

  /* when the user is typing in their email */
  if(action.type === 'USER_INPUT')
  {
    /* return if it a valid email  */
    return { value: action.val, isValid: action.val.includes('@')}; 
  }

  if(action.type === 'INPUT_BLUR')
  {
    return {value: state.value, isValid: state.value.includes('@')};
  }

  return {value: '', isValid: false};
};

/* password Reducer */
const passwordReducer = (state, action) => {

  if(action.type === 'USER_PASSWORD')
  {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }

  if(action.type === 'INPUT_BLUR')
  {
    return {value: state.value, isValid: state.value.trim().length > 6}; 
  }

  return {value: '', isValid: false};

};


const Login = (props) => {
  /*
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  */

  /*
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  */
  const [formIsValid, setFormIsValid] = useState(false);


  /* email reducer */
  const [emailState, dispatchEmail] = useReducer(
    emailReducer, 
    {
      value: '',
      isValid: null 
    }
  );

  /* password reducer */
  const [passwordState, dispatchPassword] = useReducer(
    passwordReducer,
    {
      value: '',
      isValid: null
    }
  );


  useEffect(() => {
    console.log("EFFECT RUNNING");

    return () => {
      console.log("EFFECT RUNNING");
    }
  }, []);

  /*  useEffect will only run if either
      enteredEmail, or enteredPassword changed    
  */

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;


  useEffect(() => {

    console.log("Checking for validity from useEffect()");

    /* Every 2 seconds, check for valid email and password */
    const identifier = setTimeout(() => {
      console.log("Checking for validation");
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 2000);    

    /* clear current timer, before starting a new one */
    return () => {
      console.log("CLEAN UP");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  /* function to handle when the user types in their email */
  const emailChangeHandler = (event) => {
    //setEnteredEmail(event.target.value);

    /* notify the email Reducer */
    dispatchEmail({ // pass the type and the email value
      type: 'USER_INPUT', 
      val: event.target.value
    });

    /*
    setFormIsValid(
      event.target.value.includes('@') && passwordState.isValid
    );
    */
  };

  /* function to handle when the user types in their password */
  const passwordChangeHandler = (event) => {
    //setEnteredPassword(event.target.value);

    /* notify the password Reducer */ 
    dispatchPassword({ // pass the type and the password value
      type: 'USER_PASSWORD',
      val: event.target.value
    });

    /*
    setFormIsValid(
      emailState.isValid && event.target.value.trim().length > 6
    );
    */
  };

  /* function to validate user email */
  const validateEmailHandler = () => {
    //setEmailIsValid(emailState.isValid);
    dispatchEmail({
      type: 'INPUT_BLUR'
    });
  };

  /* function to validate user password */
  const validatePasswordHandler = () => {
    //setPasswordIsValid(enteredPassword.trim().length > 6);

    dispatchPassword({
      type: 'INPUT_BLUR'
    });

  };

  const submitHandler = (event) => {
    event.preventDefault(); // prevent default HTTP request
    props.onLogin(emailState.value , passwordState.value); // pass the email/password to App.js
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
