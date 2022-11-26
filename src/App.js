import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Create from './components/Pages/Create/Create';
// import Home from './components/Pages/Home/Home';
import PostDetail from './components/Pages/PostDetail/PostDetail';

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Create/>
      {/* <PostDetail/> */}
    </>
  );
}

export default App;