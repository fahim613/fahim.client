"use client"
import Layout from '@/components/navbarLayout/layout';
import axios from '../../components/axios/axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Product = () => {
    const [product,setProduct] = useState([])
    useEffect(()=>{
        axios.get("/product")
        .then(res=>{
            console.log(res)
            const filter = res?.data?.data?.filter(item=>item.category==="helmets")
           setProduct(filter)
        })
    },[])
    return (
        <Layout>
       
        <div className='container-sk mt-5 p-5   '>
              <div className='flex justify-between'>
         
              </div>
              <div className='grid grid-cols-3 md:grid-cols-5'>
              {
                 product.map((item,index)=> <Link href={`/singleproduct/${item._id}`} className="max-w-md mx-auto mt-8" key={index}>
                    <div className="group bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
                        <div className="text-center">
                            <img src={item?.pic[0]} alt="Product Image" className="w-52 h-32 mx-auto mb-4   group-hover:shadow-lg"/>
                            <h2 className="text-xl font-semibold">{item?.name}</h2>
                            <p className="text-gray-600"> ${item?.price}</p>
                        </div>
                    </div>
                </Link>)
                   }
              </div>
        </div>
             
        </Layout>
    );
};

export default Product;