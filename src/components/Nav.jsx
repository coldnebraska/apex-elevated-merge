// Bringing in the required import from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Navbar from './UI/Navbar'

import apexLogo from '/assets/navImages/apex_logo.png'
import elevatedLogo from '/assets/navImages/elevated_logo.png'

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <div className='header'>
        <a href='/'>
          <img src={apexLogo} className='apex-logo' />
        </a>

      <Navbar
        apexLinks={[
          <NavLink key={1} to="/" end className={({ isActive, isPending }) => 
            isPending ? "pending" : isActive ? "active" : ""
          }>
            Home
          </NavLink>,
          <NavLink key={3} to="/services" className={({ isActive, isPending }) => 
            isPending ? "pending" : isActive ? "active" : ""
          }>
            Services+
          </NavLink>,
          <NavLink key={4} to="/xpel" className={({ isActive, isPending }) => 
            isPending ? "pending" : isActive ? "active" : ""
          }>
            XPEL
          </NavLink>,
          <NavLink key={5} to="/contact" className={({ isActive, isPending }) => 
            isPending ? "pending" : isActive ? "active" : ""
          }>
            Contact Us
          </NavLink>
        ]}
        elevatedLinks={[
          <NavLink key={6} to="/elevated" end className={({ isActive, isPending }) => 
            isPending ? "pending" : isActive ? "active" : ""
          }>
            Home
          </NavLink>,
          <NavLink key={7} to="/elevated/about" className={({ isActive, isPending }) => 
            isPending ? "pending" : isActive ? "active" : ""
          }>
            About+
          </NavLink>,
          <NavLink key={8} to="/elevated/services" className={({ isActive, isPending }) => 
            isPending ? "pending" : isActive ? "active" : ""
          }>
            Services+
          </NavLink>,
          <NavLink key={9} to="/elevated/brands" className={({ isActive, isPending }) => 
            isPending ? "pending" : isActive ? "active" : ""
          }>
            Brands
          </NavLink>,
          <NavLink key={10} to="/elevated/financing" className={({ isActive, isPending }) => 
            isPending ? "pending" : isActive ? "active" : ""
          }>
            Financing
          </NavLink>,
          <NavLink key={11} to="/elevated/contact" className={({ isActive, isPending }) => 
            isPending ? "pending" : isActive ? "active" : ""
          }>
            Contact Us
          </NavLink>
        ]}
      />
      
      <a href='/elevated'>
        <img src={elevatedLogo} className='elevated-logo' />
      </a>
    </div>
  )
}
