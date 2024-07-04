import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav>

        <div className='flex flex-col justify-between max-w-screen-lg m-auto  px-2 py-3 lg:flex-row '>
          <h1 className='text-[#5479F7] font-bold text-3xl mt-4'>BCA QuickNotes</h1>
          <div className='list-none flex justify-between lg:gap-10 mt-4 '>
            <li> <NavLink to="/"
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  paddingBottom : isActive ? "8px" : "",
                  color: isActive ? "white" : "#5479F7",
                  borderBottom:isActive ? "2px solid #5479F7" : "",
                  transition: "color 0.3s, border-bottom 0.3s, padding-bottom 0.3s" 
                }
               }}
            >Home</NavLink> </li>
            <li> <NavLink to="/about"
               style={({ isActive, isPending, isTransitioning }) => {
                return {
                  paddingBottom : isActive ? "8px" : "",
                  color: isActive ? "white" : "#5479F7",
                  borderBottom:isActive ? "2px solid #5479F7" : "",
                  transition: "color 0.3s, border-bottom 0.3s, padding-bottom 0.3s" 
                }
                }}
            >About</NavLink> </li>
            <li> <NavLink to="/service"
               style={({ isActive, isPending, isTransitioning }) => {
                return {
                  paddingBottom : isActive ? "8px" : "",
                  color: isActive ? "white" : "#5479F7",
                  borderBottom:isActive ? "2px solid #5479F7" : "",
                  transition: "color 0.3s, border-bottom 0.3s, padding-bottom 0.3s" 
                }
                }}
            >Service</NavLink> </li>
            <li> <NavLink to="/contact"
               style={({ isActive, isPending, isTransitioning }) => {
                return {
                  paddingBottom : isActive ? "8px" : "",
                  color: isActive ? "white" : "#5479F7",
                  borderBottom:isActive ? "2px solid #5479F7" : "",
                  transition: "color 0.3s, border-bottom 0.3s, padding-bottom 0.3s" 
                }
                }}
            >Contact</NavLink> </li>
            <li> <NavLink to="/login"
               style={({ isActive, isPending, isTransitioning }) => {
                return {
                  paddingBottom : isActive ? "8px" : "",
                  color: isActive ? "white" : "#5479F7",
                  borderBottom:isActive ? "2px solid #5479F7" : "",
                  transition: "color 0.3s, border-bottom 0.3s, padding-bottom 0.3s" 
                }
                }}
            >Login</NavLink> </li>
            <li> <NavLink to="/signup"
               style={({ isActive, isPending, isTransitioning }) => {
                return {
                  paddingBottom : isActive ? "8px" : "",
                  color: isActive ? "white" : "#5479F7",
                  borderBottom:isActive ? "2px solid #5479F7" : "",
                  transition: "color 0.3s, border-bottom 0.3s, padding-bottom 0.3s" 
                }
                }}
            >Signup</NavLink> </li>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
