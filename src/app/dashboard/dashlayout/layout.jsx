 "use client"

import Link from "next/link";

const Layout = ({children}) => {
    return (
        <div>
             <nav className=" bg-orange-500 p-3">
        <div className="container-sk flex items-center justify-between">
            <div >
                <Link href="/" className="flex items-center  space-x-2">
                <img src="/1.jpg" alt="Left Icon" className="w-6 h-6 rounded-full"/>
                <span className='text-white'>Biker Parts</span>    
                </Link>  
                       
            </div>
            <div className="space-x-4">
                <Link href="/dashboard/product" className="text-white">Product</Link>
                { localStorage.getItem("role").includes("admin")&&  <Link href="/dashboard/order" className="text-white">Manage Order</Link>}
               { localStorage.getItem("role").includes("admin")&& <Link href="/dashboard/seller" className="text-white">Add Seller</Link>}
            </div>
        </div>
    </nav>
            {children}
        </div>
    );
};

export default Layout;