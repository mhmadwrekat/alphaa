import React from "react";
import { PieChart } from 'react-minimal-pie-chart';


const Allocation = () => {
  
  return (
      <section id="Allocation">

<section className='px-32 pt-10'>
      <div className='w-full px-10 py-10 text-2xl font-bold text-center text-white border-4 bg-sky-900 border-sky-900 border-r-white border-b-white'>

<section className="grid grid-cols-2"> 
<div className='uppercase'>
        token allocation
      </div>

      <div className='uppercase'>
sale proceed allocation      </div>
</section>

     
      </div>

</section>  





<section className="px-32 pt-10">

<section className='grid grid-cols-2'>
    <div className="grid justify-center">

<PieChart className="w-full"
  data={[
    { title: 'One', value: 5, color: '#E38627' },
    { title: 'Two', value: 10, color: '#C13C37' },
    { title: 'Three', value: 20, color: '#6A2135' },
    { title: 'Four', value: 50, color: '#008000' },
  ]}
/>
<p className='pt-3 text-base font-bold text-white uppercase'>community 59%</p>

<p className='text-base font-bold text-white uppercase'>team 22%</p>

<p className='text-base font-bold text-white uppercase'>Bonus 9%</p>

<p className='text-base font-bold text-white uppercase'>Partner 10%</p>

</div>
<div className="grid justify-center">

<PieChart className="w-full"
  data={[
    { title: 'One', value: 5, color: '#E38627' },
    { title: 'Two', value: 15, color: '#C13C37' },
    { title: 'Three', value: 10, color: '#6A2135' },
  ]}
/>
<p className='text-base font-bold text-white uppercase'>team 22%</p>

<p className='text-base font-bold text-white uppercase'>Bonus 9%</p>

<p className='text-base font-bold text-white uppercase'>Partner 10%</p>
<br></br>
</div>
</section>
</section>
      </section>
  )
};

export default Allocation;
