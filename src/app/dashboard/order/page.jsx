"use client"
import React, { useState } from 'react';
import axios from '../../../components/axios/axios';
import Layout from '../dashlayout/layout';
import { useEffect } from 'react';

function OrderForm() {
  
 
  
 
  const [product,setProduct] = useState([])
    useEffect(()=>{
        axios.get("/order")
        .then(res=>{
            console.log(res)
          setProduct(res.data.data)
        })
    },[])
//   delete section 
 const handleDelete = (id) =>{
    axios.delete(`/order/${id}`)
    .then(res=>{
        window.alert("delete order")
        console.log(res)
      
    })
 }
  return (
    <Layout>
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Order</h2>
       
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
                            <p className="text-gray-600"> {item?.name}</p>
                            <p className="text-gray-600"> {item?.address}</p>
                            <p className="text-gray-600"> {item?.phone}</p>
                            <button onClick={(e)=>handleDelete(item?._id)} className='text-red-600 bg-blue-600 px-4 py-2 rounded-md'> delete </button>
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
