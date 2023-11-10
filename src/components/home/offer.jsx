 
import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import axios from '../../components/axios/axios';
import Link from 'next/link';
const Offer = () => {
  const [product,setProduct] = useState([])
  useEffect(()=>{
      axios.get("/product")
      .then(res=>{
          console.log(res)
        setProduct(res.data.discount)
      })
  },[])
    return (
        <div className='container-sk mt-10   p-2  shadow-md bg-gray-200'>
        <div className='flex justify-between'>
          <h3 className='text-orange-500 mx-5 text-2xl uppercase font-bold '>Discounted Products</h3>
       
        </div>
        <hr className='h-1 block w-full'/>
        <div  >
        <Carousel
            
            additionalTransfrom={0}
         
            autoPlaySpeed={3000}
            centerMode={false}
            className=" w-full col-span-2"
            containerclassName="containe"
            dotListclassName=""
            draggable
            focusOnSelect={false}
            infinite
            itemclassName=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
        
            showDots={false}
            
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 4
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0
                },
                items: 1
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464
                },
                items: 2
              }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            sliderclassName=""
            slidesToSlide={1}
            swipeable
          //i use multi caro
          >
              {
                 product.slice(0,10).map((item,index)=> <Link href={`/singleproduct/${item._id}`} className="max-w-md mx-auto mt-8" key={index}>
                    <div className="group bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
                        <div className="text-center">
                            <img src={item?.pic[0]} alt="Product Image" className="w-52 h-32 mx-auto mb-4   group-hover:shadow-lg"/>
                            <h2 className="text-xl font-semibold">{item?.name}</h2>
                            <p className="text-gray-600"> ${item?.price}</p>
                        </div>
                    </div>
                </Link>)
                   }
            
          </Carousel>
            
        </div>
  </div>
    );
};

export default Offer;