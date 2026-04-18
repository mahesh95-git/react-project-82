import React from 'react';
import Registration from './componenets/Registration';
import Login from './componenets/login';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<h1>Welcome to the Dashboard!</h1>} />
      </Routes>
    </div>
  );
}

export default App;
