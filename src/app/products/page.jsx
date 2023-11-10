"use client"
import Layout from '@/components/navbarLayout/layout';
import axios from '@/components/axios/axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link';

const Home = () => {
    const [product,setProduct] = useState([])
    useEffect(()=>{
        axios.get("/product")
        .then(res=>{
            console.log(res)
          setProduct(res.data.data)
        })
    },[])
    return (
        <Layout>
        <div className='container-sk mt-10 p-5 shadow-md bg-gray-200'>
              <div className='flex justify-between'>
                <h3 className='text-orange-500 mx-5 text-2xl uppercase font-bold '>new arrival</h3>
                <Link href="/products" className='hover:underline'>view all</Link>
              </div>
              <div className='grid grid-cols-3 md:grid-cols-5'>
                   {
                 product.map((item,index)=> <div className="max-w-md mx-auto mt-8" key={index}>
                    <div className="group bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
                        <div className="text-center">
                            <img src={item?.pic[0]} alt="Product Image" className="w-52 h-32 mx-auto mb-4   group-hover:shadow-lg"/>
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
};

export default Home;