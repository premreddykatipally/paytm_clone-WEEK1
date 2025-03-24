import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <>
        <Header />
        <h1>welcome to payment Wallet</h1>
        {/* Removed login and signup buttons from App.jsx */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
