"use client"
import React, { useState } from 'react';
import axios from '../../components/axios/axios';

import { useEffect } from 'react';
import Layout from '@/components/navbarLayout/layout';

function OrderForm() {
 
  const [product,setProduct] = useState([])
    useEffect(()=>{
        axios.get("/order")
        .then(res=>{
            console.log(res)
          setProduct(res.data.data)
        })
    },[])
 
  return (
    <Layout>
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">order</h2>
       
    </div>

    {/* delete section  */}
    <div className='container-sk mt-10 p-5 shadow-md bg-gray-200'>
             
              <div className='grid grid-cols-3 md:grid-cols-5'>
                   {
                 product?.map((item,index)=> <div className="max-w-md mx-auto mt-8" key={index}>
                    <div className="group bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
                        <div className="text-center">
                            <img src={item?.pic} alt="Product Image" className="w-52 h-32 mx-auto mb-4   group-hover:shadow-lg"/>
                            <h2 className="text-xl font-semibold">{item?.name}</h2>
                            <p className="text-gray-600"> ${item?.price}</p>
                             
                        </div>
                    </div>
                </div>)
                   }
              </div>
        </div>

    </Layout>
  );
}

export default OrderForm;
