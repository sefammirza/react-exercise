import './App.css';
import React from 'react';
import {AuthContext} from './AuthContext';

function App() {
  const {isLoggeIn, login, logout} = React.useContext(AuthContext)
  return (
    <div>
      {isLoggedIn}
      <butto onClick={login}>Login</butto>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default App;
