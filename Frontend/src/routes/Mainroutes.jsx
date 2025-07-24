import {Route,Routes} from "react-router-dom"
import Home from '../pages/Home'
import MyBooking from '../pages/MyBooking'
import ExploreClub from '../pages/ExploreClub'
import Signup from '../pages/Signup'
import Support from '../pages/Support'
import AdminDashboard from '../pages/AdminDashboard'
import Signin from '../pages/Signin'
import ProtactedRoutes from "./ProtactedRoutes"
const Mainroutes = () => {
  return <Routes>
  <Route path='/' element = {<Home/>} />
  <Route path='/mybooking' element = { <MyBooking/>} />
  <Route path='/signup' element = {<Signup/>} />
  <Route path='/login' element = {<Signin/>} />
  <Route path='/support' element = {<Support/>} />
  <Route path='/admindashboard' element = {<AdminDashboard/>} />
  <Route path='/exploreclub' element = {<ExploreClub/>} />
  </Routes>
}

export default Mainroutes