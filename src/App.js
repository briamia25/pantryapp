import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Pantry from './pages/Pantry';
import PublicPantryView from './pages/PublicPantryView';
import RestockRequest from './pages/RestockRequest';
import ConsumptionLogs from './pages/ConsumptionLogs';
import AdminDashboard from './pages/AdminDashboard';
import { Authenticator } from '@aws-amplify/ui-react';

const App = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/pantry">Pantry</Link>
        <Link to="/view">Public View</Link>
        <Link to="/restock">Restock</Link>
        <Link to="/logs">Consumption Logs</Link>
        <Link to="/admin">Admin</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pantry" element={<Pantry />} />
        <Route path="/view" element={<PublicPantryView />} />
        <Route path="/restock" element={<RestockRequest />} />
        <Route path="/logs" element={<ConsumptionLogs />} />
        <Route
          path="/admin"
          element={
            <Authenticator>
              {({ signOut, user }) => (
                <AdminDashboard user={user} signOut={signOut} />
              )}
            </Authenticator>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
