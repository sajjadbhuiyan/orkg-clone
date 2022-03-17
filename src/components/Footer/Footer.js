import React from 'react'
import euLogo from '../../img/poweredby/co-funded-h2020-horiz_en.png'
import eoscLogo from '../../img/poweredby/EOSC.png'
import infLogo from '../../img/poweredby/infAI.png'
import lsLogo from '../../img/poweredby/L3S.png'
import luhLogo from '../../img/poweredby/LUH.png'
import tibLogo from '../../img/poweredby/TIB_Logo_EN.png'
import footerLogo from '../../img/vertical_logo.svg'


export default function Footer() {
  return (
    <div className='bg-[#e0e2ea]'>
        <div  className='container mx-auto grid place-items-center'>
        <div className='grid lg:grid-cols-4 sm:grid-cols-1 lg:gap-x-8 sm:gap-x-1'>
            <div>
                <h2 className='border-b pb-4 pt-8 text-lg'>ORKG</h2>
                <div className='lg:flex sm:flex-none'>
                    <div className='w-20 h-20 pt-4 pb-8'>
                        <img src={footerLogo} alt='vartical_logo'></img>
                    </div>
                    <div className='pt-4 pb-8 lg:ml-8 sm:ml-0 sm:mt-8 lg:mt-0 text-sm'>
                        <p>The Open Research Knowledge <br/> Graph aims to describe <br/> research papers in a structured <br/> manner</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='border-b pb-4 pt-8 text-lg'>About</h2>
                <div className='text-base pt-4 pb-8'>
                    <a href='#' className='hover:underline block'>About us</a>
                    <a href='#' className='hover:underline block'>Help center</a>
                    <a href='#' className='hover:underline block'>Data protection</a>
                    <a href='#' className='hover:underline block'>Terms of use</a>
                    <a href='#' className='hover:underline block'>Imprint</a>
                </div>
            </div>
            <div>
                <h2 className='border-b pb-4 pt-8 text-lg'>Technical</h2>
                <div className='text-base pt-4 pb-8'>
                    <a href='#' className='hover:underline block'>Data Access</a>
                    <a href='#' className='hover:underline block'>Changelog</a>
                    <a href='#' className='hover:underline block'>GitLab</a>
                    <a href='#' className='hover:underline block'>Accessibility</a>
                    <a href='#' className='hover:underline block'>License</a>
                </div>
            </div>
            <div>
            <h2 className='border-b pb-4 pt-8 text-lg'>More</h2>
                <div className='text-base pt-4 pb-8'>
                    <a href='#' className='hover:underline block'>Follow us </a>
                    <a href='#' className='hover:underline block'>Contact us</a>
                    <a href='#' className='hover:underline block'>Report an issue</a>
                    <a href='#' className='hover:underline block'>Version</a>
                </div>
            </div>
        </div>
        <div className='grid lg:grid-cols-4 sm:grid-cols-1 lg:gap-8 sm:gap-0 border-t py-8'>
            <div>
                <img className='h-12 w-auto' src={tibLogo} alt='tiblogo'></img>
            </div>
            <div>
                <img className='h-12 w-auto' src={luhLogo} alt='tiblogo'></img>
            </div>
            <div>
                <img className='h-12 w-auto' src={lsLogo} alt='tiblogo'></img>
            </div>
            <div>
                <img className='h-12 w-auto' src={infLogo} alt='tiblogo'></img>
            </div>
        </div>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-8 sm:gap-0 border-t py-8'>
            <div className='gird content-start'>
                <img className='h-12 w-auto' src={euLogo} alt='tiblogo'></img>
            </div>
            <div className='grid content-end'>
                <img className='h-12 w-auto' src={eoscLogo} alt='tiblogo'></img>
            </div>
        </div>
    </div>
    </div>
  )
}
