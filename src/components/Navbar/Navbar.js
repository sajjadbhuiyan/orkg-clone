import React, { useState } from 'react';
import white_logo from '../../img/logo_white.svg';
import './Navbar.css';

export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const navHandler = () =>{
        if(isNavOpen === false){
            setIsNavOpen(true)
        }else{
            setIsNavOpen(false)
        }
        
    }


  return (
    <div className='sm:bg-nav-color lg:bg-inherit w-full sm:px-3 lg:z-10 lg:absolute'>
      <nav className="flex items-center justify-between flex-wrap  py-2 container mx-auto">
        <div className="items-center  mr-6">
          <img src={white_logo} alt='orkg'></img>
        </div>
        <div className="block lg:hidden">
          <button onClick={() => navHandler()} className="flex items-center px-3 py-2 border rounded text-gray-400 border-gray-400 hover:text-gray-400 hover:ring ring-gray-400 ">
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className={isNavOpen ? "lg:flex lg:items-center lg:w-auto w-full flex-grow" : " transition-opacity hidden lg:flex lg:items-center lg:w-auto w-full flex-grow"}>
          <div className="text-md mx-2 my-4 lg:my-0 lg:flex-grow">
              <a href="#responsive-header" className="block my-2 lg:inline-block lg:mt-0 text-white hover:text-gray-300 lg:mx-4 sm:mr-0 sm:flex sm:justify-between border-t border-gray-600  lg:border-t-0 py-2 ld:py-0">
              <span>View</span> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a href="#responsive-header" className="block my-2 lg:inline-block lg:mt-0 text-white hover:text-gray-300 lg:mx-4 sm:mr-0 sm:flex sm:justify-between border-t border-gray-600  lg:border-t-0 py-2 ld:py-0">
              <span>Tools</span> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a href="#responsive-header" className="block my-2 lg:inline-block lg:mt-0 text-white hover:text-gray-300 lg:mx-4 sm:mr-0 sm:flex sm:justify-between border-t border-gray-600  lg:border-t-0 py-2 ld:py-0">
              <span>About</span> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
          <div>
            <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" alt="signin">Download</a>
          </div>
        </div>
      </nav>
    </div>
  )
}
