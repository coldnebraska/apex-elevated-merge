// Bringing in the required import from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Navbar from './UI/Navbar'
import headerImg from '../assets/images/header.png'

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <div className='header'>
      <img src={headerImg} id='header-img' />
      <Navbar
        links={[
          <NavLink key={1} to="/" className={({ isActive, isPending }) => 
            isPending ? "pending" : isActive ? "active" : ""
          }>
            Home
          </NavLink>,
          <NavLink key={3} to="/camp" className={({ isActive, isPending }) => 
            isPending ? "pending" : isActive ? "active" : ""
          }>
            Camp
          </NavLink>,
          <NavLink key={4} to="/preschool" className={({ isActive, isPending }) => 
            isPending ? "pending" : isActive ? "active" : ""
          }>
            Preschool
          </NavLink>,
          <NavLink key={2} to="/about" className={({ isActive, isPending }) => 
            isPending ? "pending" : isActive ? "active" : ""
          }>
            About
          </NavLink>,
          <NavLink key={5} to="/contact" className={({ isActive, isPending }) => 
            isPending ? "pending" : isActive ? "active" : ""
          }>
            Contact
          </NavLink>
        ]}
      />
    </div>
  )
}
