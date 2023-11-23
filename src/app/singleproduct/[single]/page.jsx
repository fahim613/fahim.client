"use client"
import Link from 'next/link';
import axios from '../../../components/axios/axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';

const ProductDetails = () => {
 const [result,setResult] = useState([])
 const [toggle,setToggle] = useState(false)
 const params = useParams()
 const router = useRouter()
 useEffect(()=>{
  try {
    
    axios.get(`/product/${params?.single}`)
    .then(res=>{
        console.log(res)
      setResult(res.data.data)
    })
  } catch (error) {
   console.log(error.message)
   alert("why error") 
  }
},[])
const [formData, setFormData] = useState({
    name: '',
    address : '',
    phone: '',

  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(value)
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
//     // Send the registration data to the server using POST method.
if(!localStorage.getItem("token")){
   router.push("/login")
}
else{
    try { 
        console.log(formData)
      const response = await  axios.post("/order",{...formData,price:result?.price, pname:result.name,id:result.id,pic:result.pic[0]})
      window.alert("successfull")
      setFormData({name: '',
      address : '',
      phone: '',})
      setToggle(false)
      
    } catch (error) {
      console.error('Error:', error);
    }}
  };
  const [cookies,setCookie,removeCookie] = useCookies(["token"])
  const [token,setToken] = useState("")
  useEffect(()=>{
      if(window!="undefined"){
     
       setToken(cookies["token"])
      }
  },[])
  const logOut = () =>{
      removeCookie("token")
     
  }
    return (
        <div className=' container-sk mb-7 '>
           <nav className=" text-black  bg-gray-50 py-2 mb-5 ">
        <div className=" container-sk flex items-center justify-between">
            <div className="flex items-center space-x-2">
            <Link href="/" className='flex items-center space-x-2'>
                <img src="/1.jpg" alt="Left Icon" className="w-6 h-6 rounded-full"/>
                <span className='text-black'>Biker Parts</span>    
                </Link>  
            </div>
           
            <div className="flex items-center space-x-2 mx-10">
               { !localStorage.getItem("role")&&<Link href="/login" className="text-black">Login</Link>}
             
               { localStorage.getItem("role")&&<button  onClick={logOut} className="text-black">Logout</button>}
            </div>
        </div>
    </nav>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                <div >
              <img src={result?.pic} alt='loading...' className='h-96 w-full mb-5' />
                </div>
                <div className='font-sans font-normal'>
                    <h1 className=' text-2xl '>{result?.name}</h1>
                    <p className='my-7 text-xs'>item No. {result?._id}</p>
                    <h1 className='font-bold text-xl font-arial '> € {result?.price}</h1> 
                    <div className='my-7 text-[18px]' >{result?.description}</div> 
                         
                    <div className='text-center mb-5'>
                       
                        <div className='font-sans grid grid-cols-2 text-xl my-7'>
                            <div className='font-semibold text-left'>
                        
                           
                              <h2>Categories:</h2> 
                              {!toggle&&<button onClick={()=>{setToggle(true)}} href="" className='bg-blue-700 rounded-md px-3 py-2 text-white mt-16'>Buy Now</button>}
                            </div>
                            <div className='font-normal text-left'>
                                <p>{result?.category}</p>
                              
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            {
                toggle && <div className=' w-full border-2 p-10  '>


           <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
    Name
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded shadow-sm"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
            </div>
           <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded shadow-sm"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
            </div>
           <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              Address
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded shadow-sm"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
          <div className=''>
            <button className='bg-orange-500 text-white px-4 py-2 my-4 rounded-sm' onClick={handleSubmit}>Confirm Order</button>
          </div>
            </div>
                </div>
            }
        </div>
    );
};

export default ProductDetails;