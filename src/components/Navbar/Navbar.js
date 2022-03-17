import React, { useState } from 'react';
import white_logo from '../../img/logo_white.svg';
import './Navbar.css';

export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    
    let subObject = {
      select: 0,
      situation: false, 
    }
    const [subMenuOpen, setSubMenuOpen] = useState(subObject);

    let menuState = subMenuOpen.situation; 
    const certainMenu = subMenuOpen.select;
    console.log(certainMenu)

    // ===main menu===
    const navHandler = () =>{
        if(isNavOpen === false){
            setIsNavOpen(true)
        }else{
            setIsNavOpen(false)
        }
        
    }

    // ====sebmenu handler
    const subMenuHandler = (select) =>{
      if(menuState === false){
        let subObject = {
          select: select,
          situation: true, 
        }
        setSubMenuOpen(subObject)
      }else{
        let subObject = {
          select: select,
          situation: false, 
        }
        setSubMenuOpen(subObject)
      }

      subObject = ''
      
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
              <a onClick={() => subMenuHandler(1)} href="#responsive-header" className="block my-2 lg:inline-block lg:mt-0 text-white hover:text-gray-300 lg:mx-4 sm:mr-0 sm:flex sm:justify-between border-t border-gray-600  lg:border-t-0 py-2 ld:py-0">
              <span>View</span> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            

            <a onClick={() => subMenuHandler(2)} href="#responsive-header" className="block my-2 lg:inline-block lg:mt-0 text-white hover:text-gray-300 lg:mx-4 sm:mr-0 sm:flex sm:justify-between border-t border-gray-600  lg:border-t-0 py-2 ld:py-0">
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
          <div className='lg:flex sm:flex-none'>
              
              <div className="relative md:block flex lg:mx-2">
                  <input type="text" id="email-adress-icon" className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
                  <div className="flex absolute inset-y-1 left-0 items-center pl-3 py-2 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                  </div>
              </div>

              <button type="button" className="text-zinc-900 bg-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm lg:mx-2 sm:my-2 lg:my-0 lg:w-40 sm:w-full py-2 flex justify-center items-center">
              <svg className='w-4 h-4 mr-2 -ml-1 fill-gray-900 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg>
                    Add New
              </button>
              
              <button type="button" className="text-white bg-zinc-800 hover:bg-zinc-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm lg:mx-2 sm:my-2 lg:my-0 lg:w-40 sm:w-full py-2 flex justify-center items-center hover:bg-black-700">
              <svg className='w-4 h-4 mr-2 -ml-1 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 288c79.53 0 144-64.47 144-144s-64.47-144-144-144c-79.52 0-144 64.47-144 144S176.5 288 256 288zM351.1 320H160c-88.36 0-160 71.63-160 160c0 17.67 14.33 32 31.1 32H480c17.67 0 31.1-14.33 31.1-32C512 391.6 440.4 320 351.1 320z"/></svg>
                    Sign in
              </button>
          </div>
        </div>
      </nav>

      <div className={menuState && certainMenu === 1 ? "w-24 h-10 bg-gray-500" : "hidden"}></div>
      <div className={menuState && certainMenu === 2 ? "w-24 h-10 bg-blue-500" : "hidden"}></div>
    </div>
  )
}