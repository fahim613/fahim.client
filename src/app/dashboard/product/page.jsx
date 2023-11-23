"use client"
import React, { useState } from 'react';
import axios from '../../../components/axios/axios';
import Layout from '../dashlayout/layout';
import { useEffect } from 'react';

function ProductForm() {
  const [productData, setProductData] = useState({
    productname: '',
    price: '',
    description: '',
    pic: null,
    category: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProductData({
      ...productData,
      pic: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', productData.productname);
    formData.append('price', productData.price);
    formData.append('description', productData.description);
    formData.append('pic', productData.pic);
    formData.append('category', productData.category);

    axios.post('/product', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        console.log(response)
        window.alert("product added")
        if (response.status === 200) {
          console.log('Product posted successfully.');
          // You can redirect or perform other actions here on success
        } else {
          console.error('Failed to post the product.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
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
      window.alert("delete success")
        console.log(res)
      
    })
 }
  return (
    <Layout>
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="productname" className="block text-sm font-medium text-gray-600">Product Name:</label>
          <input
            type="text"
            id="productname"
            name="productname"
            value={productData.productname}
            onChange={handleInputChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-600">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-600">Description:</label>
          <textarea
            id="description"
            name="description"
            value={productData.description}
            onChange={handleInputChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="pic" className="block text-sm font-medium text-gray-600">Image File (pic):</label>
          <input
            type="file"
            id="pic"
            name="pic"
            onChange={handleImageChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-600">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={productData.category}
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
    </div>

    {/* delete section  */}
    <div className='container-sk mt-10 p-5 shadow-md bg-gray-200'>
             
              <div className='grid grid-cols-3 md:grid-cols-5'>
                   {
                 product?.map((item,index)=> <div className="max-w-md mx-auto mt-8" key={index}>
                    <div className="group bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
                        <div className="text-center">
                            <img src={item?.pic[0]} alt="Product Image" className="w-52 h-32 mx-auto mb-4   group-hover:shadow-lg"/>
                            <h2 className="text-xl font-semibold">{item?.name}</h2>
                            <p className="text-gray-600"> ${item?.price}</p>
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

export default ProductForm;
