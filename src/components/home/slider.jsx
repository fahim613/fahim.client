import Link from 'next/link';
import React from 'react';
import Carousel from 'react-multi-carousel';

const Slider = () => {
 
    return (
        <div className='container-sk  mx-auto overflow-hidden mt-5'>
            <div className='grid grid-cols-3 gap-2 overflow-x-hidden'>
            <Carousel
            
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={2000}
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
          autoPlay
          showDots
          
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 1
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
              items: 1
            }
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          sliderclassName=""
          slidesToSlide={1}
          swipeable
        
        >
         
                 {
                    ['1.jpg','2.jpg','3.jpg','4.jpg'].map((item,index)=><img src={item} key={index} className=' w-full h-96 overflow-x-hidden rounded-md'/>)
                      }
          
        </Carousel>
            <div className='col-span-1 gap-2' >
                    <div className='grid grid-cols-2 overflow-hidden gap-1 '>
                      {
                    [
                      {
                      link:"/engineoil",
                      src:"/22.jpg"
                    },
                      {
                      link:"/helmets",
                      src:"/24.jpg"
                    },
                      {
                      link:"/tyres",
                      src:"/23.jpg"
                    },
                      {
                      link:"/accessories",
                      src:"/21.jpg"
                    }
                  ].map((item,index)=>  
                  <Link href={item?.link} className="text-white"><img src={item.src} key={index} className='w-full h-48  overflow-x-hidden rounded-md py-[.5px]'/></Link>
                  )
                      }
                    </div>
                </div>
            </div>
             
        </div>
    );
};

export default Slider;