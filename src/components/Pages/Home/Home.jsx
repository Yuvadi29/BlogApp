import React from 'react';
import Bar from '../../Bar/Bar';
import Header from '../../Header/Header';
import Posts from '../../Posts/Posts';
import './Home.css';

const Home = () => {
  return (
    <>
      <Header />
      <div className='HomePage'>
        <Posts />
        <Bar />
      </div>
    </>
  )
}

export default Home;