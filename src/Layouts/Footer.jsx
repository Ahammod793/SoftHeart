import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/SoftHeart.png";
import { AuthContext } from '../Auth/AuthProvider';

export default function Footer() {
    const data= useContext(AuthContext)
  return (
    <>
        <div className='flex flex-row justify-between items-stretch px-10 bg-[#26343c] py-8'>
            <div>
                <ul className='text-xl   text-white'>
                    <h1 className='font-bold text-xl text-white pb-4'>Legel</h1>
                    <li>
                        <Link className="hover:text-gray-200 active:text-sky-400">Privacy policy</Link>
                    </li>
                    <li>
                        <Link className="hover:text-gray-200 active:text-sky-400">Coocky policy</Link>
                    </li>
                    <li>
                        <Link className="hover:text-gray-200 active:text-sky-400">Terms of uses</Link>
                    </li>
                    
                </ul>
            </div>
            <div>
                <ul className='text-xl  text-white'>
                    <h1 className='font-bold text-xl text-white pb-4'>Condition</h1>
                    <li>
                        <Link className="hover:text-gray-200 active:text-sky-400">Donars Condition</Link>
                    </li>
                    <li>
                        <Link className="hover:text-gray-200 active:text-sky-400">Donars Support</Link>
                    </li>
                    <li>
                        <Link className="hover:text-gray-200 active:text-sky-400">Advisor condition</Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul className='text-xl  text-white gap-8'>
                    <li>
                        <Link className="hover:text-gray-200 active:text-sky-400">About Us</Link>
                    </li>
                    <li>
                        <Link className="hover:text-gray-200 active:text-sky-400">Contuct Us</Link>
                    </li>
                    <div className='font-light text-xl pt-5'>
                        <p>Sopura, Boyalia Rajshahi</p>
                        <p>Rajshahi Polytecnic Institute</p>
                        <p>Shahid Neyamtulla-hostel Room-#208</p>
                    </div>
                </ul>
            </div>
            <img src={logo} alt="SoftHeart" className='text-white font-extrabold text-3xl w-[230px]' />
        </div>
    </>
  )
}
