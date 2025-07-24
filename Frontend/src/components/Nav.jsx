// src/components/Nav.jsx
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../routes/AuthContext';
import { Home, Search, Calendar, User } from 'lucide-react';

const Nav = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navLinkClasses = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
      isActive ? 'bg-purple-600 text-white' : 'hover:bg-gray-700'
    }`;

  return (
    <div className="bg-gray-900 flex justify-center items-center gap-8 px-10 py-4 text-white shadow-md">
      <NavLink to="/" className={navLinkClasses}>
        <Home size={18} />
        Home
      </NavLink>

      {user ? (
        <>
          <NavLink to="/exploreclub" className={navLinkClasses}>
            <Search size={18} />
            Explore Clubs
          </NavLink>

          <NavLink to="/mybooking" className={navLinkClasses}>
            <Calendar size={18} />
            My Bookings
          </NavLink>

          <NavLink to="/support" className={navLinkClasses}>
            <User size={18} />
              CONTACT-US
          </NavLink>

          <button
            onClick={handleLogout}
            className="px-4 py-2 text-red-400 hover:underline"
          >
            Logout
          </button>
        </>
      ) : (
        <NavLink to="/login" className={navLinkClasses}>
          <User size={18} />
          Signin/Signup
        </NavLink>
      )}
    </div>
  );
};

export default Nav;
