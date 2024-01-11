import React from 'react'
import Banner from "../Components/Banner"
import HouseList from "../Components/HouseList"
import Header from '../Components/Header'
import PropertiesByCitySection from '../Components/PropertiesByCitySection'
import FeaturedPropertiesSection from '../Components/FeaturedPropertiesSection'
import BookMyStay from '../Components/BookMyStay';

import DependentSearch from "../Components/Search/DependentSearch";

const Home = () => {

  const HomeStyle = {

    minHeight: "calc(100vh - 10vh)", 
  };  


  return (
    <div className='min-h-[1800px] '>
          
           <div className='h-fit  ' style={HomeStyle}>
              <Banner/>
              {/* <DependentSearch/> */}
           </div>
            {/* <HouseList/> */}
            <PropertiesByCitySection/>
            <FeaturedPropertiesSection/>
            <BookMyStay/>
    </div>
  )
}

export default Home