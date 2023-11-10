import Layout from '@/components/navbarLayout/layout';
import React from 'react';

const Home = () => {
    return (
        <Layout  >
           
    <div className='flex justify-center '>
    <div className="container-sk   px-28 py-8  shadow-md">
     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
          <ul>
            <li className="flex items-center space-x-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <span>Phone: <a href="tel:123-456-7890">01786321000</a></span>
            </li>
            <li className="flex items-center space-x-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <span>Email: <a href="mailto:info@example.com">bikerparts@gmail.com</a></span>
            </li>
           
          </ul>
        </div>
         
      </div>
    </div>
    </div>
        </Layout>
         
    );
};

export default Home;