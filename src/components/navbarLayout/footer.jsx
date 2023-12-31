import React from 'react';
import Link from "next/link";
const Footer = () => {
    
    return (
        <div>
            <div className="grid grid-cols-3 text-white pt-5 ">
          <div>
            <h1 className="font-bold text-xl">Quick Link</h1>
            <Link href="/">Shop</Link>
          </div>
          <div>
            <h1 className="font-bold text-xl">Biker Parts</h1>
            <p>about us </p>
          </div>
          <div>
            <h1 className="font-bold text-xl">Contact Us</h1>
            <p>Phone: 01786321000</p>
            <p>Email: bikerparts@gmail.com</p>
          </div>
        </div>
        <div className=" ">
          <div className="py-5 text-white flex justify-between  font-arial text-base md:text-lg lg:text-xl xl:text-2xl font-bold pb-5">
            <h4> 2023. All rights reserved.</h4>
            <h4>ZWIWI</h4>
          </div>
        </div>
        </div>
    );
};

export default Footer;