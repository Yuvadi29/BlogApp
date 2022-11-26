import React from 'react'
import Navbar from './components/Navbar/Navbar';
// import Home from './components/Pages/Home/Home';
import PostDetail from './components/Pages/PostDetail/PostDetail';

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <PostDetail/>
    </>
  );
}

export default App;