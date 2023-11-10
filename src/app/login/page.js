"use client"
import Layout from '@/components/navbarLayout/layout';
import axios from '../../components/axios/axios';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import { usePersistentState } from 'react-persistent-state';

const Home = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"])
 
   
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
      const router = useRouter()
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        setFormData({ ...formData, [name]: value });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Send the registration data to the server using POST method.
        try { 
           
          const response = await  axios.post("/login",formData)
            console.log(response)
            localStorage.setItem("role",response?.data?.role)
            router.refresh()
            setCookie("token",response.data.result,{path:"/"})
            router.push("/")
        } catch (error) {
          console.error('Error:', error);
        }
      };
      // useEffect(()=>{
      //   if(window!=undefined){
      //     token = 
      //   }
      // },[])
    return (
         <Layout>
                  
    <div className="container mx-auto p-8">
      
      <div className="bg-gray-200 min-h-screen flex items-center justify-center">
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-md">
      <h1 className="text-2xl font-semibold text-center mb-6">    Login Form</h1>
     
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="w-full p-2 border border-gray-300 rounded shadow-sm"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="w-full p-2 border border-gray-300 rounded shadow-sm"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
    
   
      <div className="flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
      Login
        </button>
      </div>
      <div className="flex justify-center mt-5 items-center ">
       <span>already have no account</span>
       <Link href="/register"
          className="hover:underline   text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
         
        >            
            Register
        </Link>
      </div>
    </form>
  </div>
  </div>
         </Layout>
    );
};

export default Home;