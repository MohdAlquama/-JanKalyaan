import React, { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SavedSchemes from './components/SavedSchemes.jsx';
import App from './App';
import Login from '@/components/Scheme/Login.jsx';
import SignUp from '@/components/Scheme/signup.jsx';
import SchemeDetail from '@/components/Scheme/SchemeDetail.jsx';
import Feedback from './components/Feedback.jsx';

import { UserContext } from '@/context/UserContext.jsx';
import './index.css';

function Root() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/scheme/:id" element={<SchemeDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/saved" element={<SavedSchemes />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
