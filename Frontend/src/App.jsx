// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Nav';
import Home from './pages/Home';
import Signin from '../src/pages/Signin';
import Signup from '../src/pages/Signup';
import ExploreClub from './pages/ExploreClub';
import MyBookings from '../src/pages/MyBooking';
import Support from '../src/pages/Support';
import ProtectedRoute from '../src/routes/ProtectedRoute';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        {/* Protected Routes */}
        <Route
          path="/exploreclub"
          element={
            <ProtectedRoute>
              <ExploreClub />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mybooking"
          element={
            <ProtectedRoute>
              <MyBookings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/support"
          element={
            <ProtectedRoute>
              <Support />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
