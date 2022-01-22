import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {

  // variable to store if user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  /* This block of code runs after every component evaluation
     AND only if dependencies change 

     useEffect has 2 parameters, code of block to be run and array of dependencies
  */
  useEffect(() => {
    /* variable to check if user is logged in previously */
    const storedUserLoggedInfo = localStorage.getItem('isLoggedIn');

    /* check local storage if the user was logged in */
    if(storedUserLoggedInfo === '1')
    {
      /* set the user to logged in */
      setIsLoggedIn(true);
    }
  }, []);


  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    /* store user credentials into local storage */
    // 1 -> logged in, 0 -> not logged in
    localStorage.setItem('isLoggedIn', '1');

    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
