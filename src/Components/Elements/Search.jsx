import React, { useContext } from 'react'
import CountryDropdown from "../Elements/CountryDropdown"
import PropertyDropdown from '../Elements/PropertyDropdown'
import PriceRangeDropdown from '../Elements/PriceRangeDropdown'
import {RiSearch2Line} from "react-icons/ri"
import { HouseContext } from './HouseContext'

const Search = () => {

  const {handleClick} = useContext(HouseContext)
  return (
    <div className='px-[30px]  bg-black bg-opacity-70 py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1  rounded-full'>
        <CountryDropdown/>
        <PropertyDropdown/>
        <PriceRangeDropdown/>
        <button onClick={()=>handleClick()} className='bg-[#F76C00] hover:bg-[#f76b00e3] transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-lg'>
            <RiSearch2Line/>
        </button>
    </div>
  )
}

export default Search