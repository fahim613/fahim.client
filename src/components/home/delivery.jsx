import Link from 'next/link';
import React from 'react';

const Delivery = () => {
    return (
        <div className='container-sk mt-14'> 
           <div className='grid grid-cols-2 gap-4 '> 
          <Link href="/products">    <img src='41.jpg' className='h-80 w-full rounded-md shadow-md  '/></Link>
            
              <Link href="/products">    <img src='42.jpg' className='h-80 w-full rounded-md shadow-md  '/></Link>
           </div>
        </div>
    );
};

export default Delivery;