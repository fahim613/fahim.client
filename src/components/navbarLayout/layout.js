"use client";


import Menubar from "../menubar/page";

import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import {
  FaBeer,
  FaFacebook,
  FaInstagram,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";
import ChatBot from "./chatBot";
import Footer from "./footer";
export default function Layout({ children }) {

  return (
    <>
      <Menubar />
      {children}

      <div
        className=" container-sk bg-black z-100 mt-10"
        style={{ zIndex: 9999 }}
      >
        <Footer/>
        {/* chatboot work here  */}
        <ChatBot/>
      </div>
    </>
  );
}
