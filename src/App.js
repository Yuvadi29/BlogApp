import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Create from './components/Pages/Create/Create';
import Login from './components/Pages/Login/Login';
// import Home from './components/Pages/Home/Home';
import PostDetail from './components/Pages/PostDetail/PostDetail';
import Register from './components/Pages/Register/Register';
import UserSettings from './components/Pages/UserSettings/UserSettings';

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <Create/> */}
      {/* <UserSettings/> */}
      {/* <Login/> */}
      <Register/>
      {/* <PostDetail/> */}
    </>
  );
}

export default App;