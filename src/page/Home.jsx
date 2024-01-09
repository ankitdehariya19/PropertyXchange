import React from 'react'
import Banner from "../Components/Banner"
import HouseList from "../Components/HouseList"
import Header from '../Components/Header'
import PropertiesByCitySection from '../Components/PropertiesByCitySection'
import FeaturedPropertiesSection from '../Components/FeaturedPropertiesSection'
import BookMyStay from '../Components/BookMyStay';

const Home = () => {
  return (
    <div className='min-h-[1800px] h-full'>
          
            <Banner/>
            {/* <HouseList/> */}
            <PropertiesByCitySection/>
            <FeaturedPropertiesSection/>
            <BookMyStay/>
    </div>
  )
}

export default Home