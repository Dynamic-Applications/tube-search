import React from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // Optional
import Home from './components/Home';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Playlists from './components/Playlists';
import RequireAuth from './components/RequireAuth';

import { Routes, Route, useLocation } from 'react-router-dom';


function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          } />
          <Route path="/playlists" element={
            <RequireAuth>
              <Playlists />
            </RequireAuth>
          } />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Contact /> can be routed or included in Home if needed */}
      </main>
      <Footer />
      <ScrollToTop /> {/* Optional */}
    </div>
  );
}

export default App;