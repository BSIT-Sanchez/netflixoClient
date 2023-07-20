import React from 'react'
import { FaUserFriends } from 'react-icons/fa'
import Titles from '../Titles'
import {Autoplay} from 'swiper'
import  {Swiper, SwiperSlide } from 'swiper/react'
import {UsersData} from "../../Data/MovieData"

function MovieCasts() {
  return (

        <div className='my-12'>
          <Titles title="Casts" Icon={FaUserFriends}/>
          <div className='mt-10'>
            <Swiper 
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}            
              spaceBetween={10}        
              speed={1000}
              loop={true}
              modules={[Autoplay]}
              breakpoints={{
                0:{
                  slidesPerView: 1,
                },
                400:{
                  slidesPerView: 2,
                },
                768:{
                  slidesPerView: 3,
                },
                1024:{
                  slidesPerView: 4,
                },
                1280:{
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
            >
              {
                UsersData.map((movie, i) => (
                  <SwiperSlide key={i}>
                    <div className="w-full p-3 italic text-xs text-text rounded flex-colo bg-dry border border-gray-800">
                      <img src={`/images/${movie.image}`} alt={movie.name} className="w-full h-64 object-cover rounded mb-4"/>
                      <p>{movie.name}</p>
                    </div>
                  </SwiperSlide>
                ))
              }
    
            </Swiper>         
    
          </div>
        </div>  
    
  )
}

export default MovieCasts