import React from 'react'
import { Outlet } from 'react-router-dom'
import logo from "../assets/SoftHeart.png";
export default function AccessLayOut() {
  return (
    <div className='flex h-screen gap-8 justify-center items-center text-center'>
        <div className=''>
            <h1 className='text-3xl font-light text-black'>Hi <span className='text-[#f11ef1] font-bold'>There</span>,</h1>
            <h1 className='text-xl font-thin'>WellCome to</h1>
            <div className='pt-8'>
                <img src={logo} alt="SoftHeart"  className='text-3xl font-bold text-white w-[250px] h-[200px]'/>
            </div>
        </div>
        <div>
            <Outlet></Outlet>
        </div>
    </div>
  )
}
