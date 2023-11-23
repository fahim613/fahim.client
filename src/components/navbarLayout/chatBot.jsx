import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ChatBot = () => {
    const [data, setData] = useState([]);
    const message = [
      {
        q: "what is your shoping mall",
        a: "my moto shopping mall is haby",
      },
      {
        q: "What is ex girlfriend name",
        a: "dsfdgd",
      },
    ];
    const [mes, setMes] = useState([{}]);
    const [toggle, setToggle] = useState(false);
  
    useEffect(() => {
      if (!toggle) {
        setMes([]);
      }
    }, [toggle]);
  
    return (
        <div>
            {!toggle && (
          <button
            className="bg-red-900 text-white rounded-full fixed bottom-4 right-2"
            onClick={() => setToggle(true)}
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <line x1="8" y1="7" x2="8" y2="7" />
              <line x1="12" y1="7" x2="12" y2="7" />
              <line x1="16" y1="7" x2="16" y2="7" />
            </svg>
          </button>
        )}

        {toggle && (
          <div className="fixed  bottom-1 h-96  w-72 overflow-y-auto   border-1 bg-gray-300 rounded-md px-3 py-2 right-2 border-4 border-yellow-800">
            <div className="relative w-full h-full">
              {toggle && (
                <button
                  className=" absolute -top-1 bg-red-400 rounded-full  right-0 px-2  text-right   text-red-700 text-lg"
                  onClick={() => setToggle(false)}
                >
                  x
                </button>
              )}
              {data.map((item, index) => (
                <div key={index} className=" z-50">
                  <h1>{item.q}</h1>
                  <h1>{item.a}</h1>
                </div>
              ))}
              <div className="  pt-16 px-2">
                {mes.map((item, index) => (
                  <div>
                    <h1 key={index} className="text-right text-red-600 my-2">
                      {item.q}
                    </h1>
                    <p className="w-3/4 text-left text-green-700 z-5  px-3  rounded-md bg-white">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
              <ul className=" ">
                {message.map((item, index) => (
                  <li
                    key={index}
                    className=" z-5 my-5 py-2 px-3 rounded-md bg-white text-black cursor-pointer "
                    onClick={() => {
                      setMes([...mes, item]);
                    }}
                  >
                    <span>{item.q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        </div>
    );
};

export default ChatBot;