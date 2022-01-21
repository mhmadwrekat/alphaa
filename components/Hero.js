import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
const Hero = () => {
    return (
        <>        
        



<img src='./assest/heroo.jpg'
className='w-full h-full'>    
</img>

<div className='hidden sm:flex'>

<h4 translate='no' className='absolute w-4/12 text-2xl font-semibold text-yellow-500 right-20 white top-24'>

<img className='w-11/12 hover:scale-110 cursor-grab'
                    src='./assest/logo.png' />
</h4>


<h4 translate='no' className='absolute w-5/12 text-2xl font-semibold text-yellow-500 white top-48 left-16'>
A Visa card can be gained for client holding Alex
</h4>
<div className="absolute right-16 top-36">

</div>

<h4 translate='no' className='absolute w-5/12 text-xl font-semibold text-gray-300 white top-60 left-16'>
It is a platform for converting digital currencies into cash that can be
 withdrawn via bank transfer to any country in the world for a cheap fee
  cost of 1% to 2.5 percent or by using a Visa card.
</h4>
<div
className='absolute w-5/12 text-xl font-semibold text-gray-300 white top-96 left-16'>

<div className='flex'>
<div className='px-2'>
<Link to="About">
<button class="bg-fuchsia-800 hover:bg-fuchsia-700 shadow-2xl text-sm text-white font-bold py-2 px-2 rounded">
PURCHASE TOKEN
</button>
</Link>
</div>
<div className='px-2'>
<Link to="Allocation">
<button class="bg-fuchsia-800 hover:bg-fuchsia-700 shadow-2xl text-sm text-white font-bold py-2 px-2 rounded">
WHITE PAPER
</button>
</Link>
</div>
<div className='px-2'>
<button class="bg-fuchsia-800 hover:bg-fuchsia-700 shadow-2xl text-sm text-white font-bold py-2 px-2 rounded">
EXCHANGE
</button>
</div>
</div>

</div>

</div>




            <section className='absolute w-full text-center bg-white opacity-70 sm:hidden top-72'>
                <section className='relative'>
                    <div class="relative py-5 sm:hidden overflow-hidden rounded-lg shadow-2xl cursor-pointer">
                        <h4 translate='no' class="mb-3 text-xl font-semibold text-center tracking-tight text-sky-900"><h4 className='px-5 text-lg font-semibold text-center text-sky-900'>
                        </h4></h4>
                    </div>
                </section>
            </section>
        </>
    )
}
export default Hero