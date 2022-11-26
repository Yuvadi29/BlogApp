import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Create from './components/Pages/Create/Create';
import Login from './components/Pages/Login/Login';
import Home from './components/Pages/Home/Home';
import PostDetail from './components/Pages/PostDetail/PostDetail';
import Register from './components/Pages/Register/Register';
import UserSettings from './components/Pages/UserSettings/UserSettings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/usersetting" element={<UserSettings />} />
          <Route exact path="/post/:id" element={<PostDetail />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;