import { NavLink } from "react-router-dom"
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../routes/ProtactedRoutes';


const Nav = () => {
    const {user, logout} = useAuth()
    const navigate = useNavigate()
    const handleLogout = () => {
    logout();
    navigate('/');
  };
    return <nav className="  bg-gray-800 flex justify-center items-center gap-x-25 p-7 text-gray-300 text-white font-bold text-xl">
        <NavLink to='/'>Home</NavLink>
        {user ? (<> 
        <NavLink to='/exploreclub'>Explore-Clubs</NavLink>
        <NavLink to='/mybooking'>My-Bookings</NavLink>
        <NavLink to='/signup'>Signin/Signup</NavLink>
        <NavLink to='/support'>Contact/Support</NavLink>
         <button onClick={handleLogout} className="text-red-400 hover:underline">
              Logout
            </button>
           </>) :(<>
           <Link to="/login">Signin/Signup</Link>
           </>)}
        
       
    </nav>
}
export default Nav