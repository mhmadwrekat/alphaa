import React from 'react';
import Hero from './Hero';
import Head from 'next/head';
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = () => {
  return (
      <>
      <Head>
<title>Alpha Exchange</title>
<link rel="icon" href="/favicon.ico" />
<link href="/dist/output.css" rel="stylesheet"/>
<link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" />
<link href="https://fonts.googleapis.com/css?family=Work+Sans:200,400&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />
<link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" />

</Head>
<nav className="fixed top-0 z-30 w-full text-white bg-blue-900 rounded opacity-95 sm:px-4" translate='no'>
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <div className="items-center justify-around hidden w-full md:flex md:w-auto md:order-2" id="mobile-menu-4">
                    <img className='w-1/12 hover:scale-110 cursor-grab'
                    src='./assest/logo.png' />
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                                <li>
                                    <p className="block py-2 pl-20 rounded cursor-grab hover:scale-110 hover:text-violet-600 md:bg-transparent md:p-0">WHAT IS ALPHA EXCHANGE</p>
                                </li>
                                <li>
                                    <p className="block py-2 pl-0 uppercase cursor-grab hover:scale-110 hover:text-violet-600 md:border-0 md:p-0">WHITEPAPER</p>
                                </li>
                                <li>
                                    <p className="block py-2 pl-0 rounded cursor-grab hover:scale-110 hover:text-violet-600 md:bg-transparent md:p-0">ROAD MAP</p>
                                </li>
                                <li>
                                    <p className="block py-2 pl-0 uppercase cursor-grab hover:scale-110 hover:text-violet-600 md:border-0 md:p-0">TOKEN</p>
                                </li>
                                <li>
                                    <p className="block py-2 pl-0 pr-4 rounded cursor-grab hover:scale-110 hover:text-violet-600 md:bg-transparent md:p-0">ANDROID & IOS APP</p>
                                </li>
                                <li>
                                <Link to="Allocation">
                                    <p className="block py-2 uppercase pl-96 cursor-grab hover:scale-110 hover:text-violet-600 md:border-0 md:p-0">FAQ</p>
                                    </Link>
                            
                                </li>

                                <li>
                                <Link to="About">
                                    <p className="block py-2 rounded cursor-grab hover:scale-110 hover:text-violet-600 md:bg-transparent md:p-0">CONTACT</p>
                                    </Link>
                                </li>
                        </ul>
                    </div>
                    
                </div>

            </nav>
            <div translate='no' className='hidden w-full bg-black border-gray-200 mobile-menu md:hidden opacity-80'>
                <ul className="flex flex-col text-center md:flex-row md:space-x-0 md:mt-0 md:text-sm md:font-medium">
                        <li className='py-3'>
                        </li>
                        <li className='py-3'>
                        </li>
                </ul>
            </div>      

<Hero />            
      </>
  )
}

export default Nav
