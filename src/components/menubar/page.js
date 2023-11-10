 import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import {usePersistentState} from 'react-persistent-state'

 
 const Menubar= () => {
    const [cookies,setCookie,removeCookie] = useCookies(["token"])
    
    const [token,setToken] = useState("")
    useEffect(()=>{
        if(window!="undefined"){
       
         setToken(cookies["token"])
        }
    },[])
    const router = useRouter()
    const logOut = () =>{
        
        removeCookie("token")
        alert("successfully logout")
        setToken("")
        router.refresh() 
    }
    return (
   <div>
     <nav className=" text-black  bg-gray-100 p-2 mb-5 ">
        <div className=" container-sk flex items-center justify-between">
            <div className="flex items-center space-x-2">
            <Link href="/" className='flex items-center space-x-2'>
                <img src="1.jpg" alt="Left Icon" className="w-6 h-6 rounded-full"/>
                <span className='text-black'>Biker Parts</span>    
                </Link>  
            </div>
           
            <div className="flex items-center space-x-2">
               { !token&&<Link href="/login" className=" hover:underline text-black border-blue-500 px-3 py-2 border rounded-lg hover:text-white hover:bg-black">Login</Link>}
               { token&&<Link href="/dashboard/product" className="text-black border rounded-lg border-blue-500 px-3 py-2 hover:text-white hover:bg-black hover:underline">Dashboard</Link>}
               { token&&<button  onClick={logOut} className="text-black border-blue-500 px-3 py-2 border rounded-lg hover:text-white hover:bg-black hover:underline">Logout</button>}
            </div>
        </div>
    </nav>
    
        
     <nav className=" bg-orange-500 p-3">
        <div className="container-sk flex items-center justify-center">
             
            <div className="space-x-4">
                <Link href="/" className="text-white">Home</Link>
                <Link href="/helmets" className="text-white">Helmets</Link>
             <Link href="/engineoil" className="text-white">Engine Oil</Link>
             <Link href="/parts" className="text-white">Parts</Link>
            
                <Link href="/tyres" className="text-white">Tyres</Link>
                <Link href="/accessories" className="text-white">Accessories</Link>
                <Link href="/contact" className="text-white">Contact</Link>
              
            </div>
        </div>
    </nav>
   </div>
 
    );
 };
 
 export default Menubar;