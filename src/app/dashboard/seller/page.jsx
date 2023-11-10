"use client"
import React, { useState } from 'react';
import axios from '../../../components/axios/axios';
import Layout from '../dashlayout/layout';
import { useEffect } from 'react';

function ProductForm() {
  const [productData, setProductData] = useState({
    email: '',
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

   
    axios.patch('/seller', {email:productData?.email})
      .then((response) => {
        console.log(response)
        alert("complete seller added")
        if (response.status === 200) {
          console.log('Product posted successfully.');
          // You can redirect or perform other actions here on success
        } else {
          console.error('Failed to post the product.');
        }
      })
      .catch((error) => {
        console.error('Error:', error.message);
      });
  };
  const [product,setProduct] = useState([])
    useEffect(()=>{
        axios.get("/product")
        .then(res=>{
            console.log(res)
          setProduct(res.data.data)
        })
    },[])
//   delete section 
 const handleDelete = (id) =>{
    axios.delete(`/product/${id}`)
    .then(res=>{
        console.log(res)
      
    })
 }
 const [seller,setSeller] = useState([])
 async function sellerGet(){
    axios.get("/seller")
    .then(res=>{
        console.log(res)
      setSeller(res?.data?.data)
    })
    .catch(err=>{
       console.log(err.message)
    })
 }
 useEffect(()=>{
    sellerGet()
 },[])
 const handleDeleteSeller = (id) =>{
    axios.delete(`/seller/${id}`)
    .then(res=>{
    //   window.alert("delete success")
    sellerGet()
       
      
    })
 }
 console.log(seller)
  return (
    <Layout>
    <div className=" container-sk  mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Add Seller</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="productname" className="block text-sm font-medium text-gray-600">Email:</label>
          <input
            type="text"
            id="seller"
            name="email"
            value={productData.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
         
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring"
        >
          Submit
        </button>
      </form>

        <div className='w-full'>
            {
                 seller.map((item,index)=><div key={index} className='text-justify  w-full flex justify-around text-bold text-xl text-gray-900 border-2 my-2 py-5 px-3 rounded-md'>
                         <h1 className='text-left mx-4 text-sm'>{item?.name} {item?.firstname} {item?.lastname}  </h1>
                        
                         <h1 className='text-center text-sm'>{item?.email}</h1>
                         <h1 className='text-center text-sm'>{item?.role}</h1>
                          
                       {!item?.role?.includes("admin") && <button onClick={()=>handleDeleteSeller(item?._id)} className='bg-red-600 text-white rounded-md border px-2 '>delete</button>}  
                    </div>)
            }
        </div>
    </div>

 

    </Layout>
  );
}

export default ProductForm;
