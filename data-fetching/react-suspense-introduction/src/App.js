import React, {Suspense} from 'react';
import './App.css';
import {fetchData} from './Api'

const resource = fetchData();

function App() {
  return (
    <div className='container my-5'>
      <Suspense fallback={<h1>Loading User...</h1>}>
      <ProfileDetails/>
      </Suspense>
      <Suspense fallback={<h1>Loading Post...</h1>}>
      <ProfilePost/>
      </Suspense>
    </div>
  );
}

const ProfileDetails = () => {
  const user = resource.user.read();
  return(
    <div className="card card-body my-3">
      <h1 className="large text-primary">{user.name}</h1>
      <ul>
        <li>Username: {user.username}</li>
        <li>Email: {user.email}</li>
        <li>City: {user.adress.city}</li>
      </ul>
    </div>
  )
}

const ProfilePost = () => {
  const post = resource.post.read()
}



export default App;
