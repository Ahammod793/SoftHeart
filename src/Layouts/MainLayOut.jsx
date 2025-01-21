import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function MainLayOut() {
  return (
    <div className='flex flex-col'>
        <nav><NavBar></NavBar></nav>
        <main className='px-10 bg-;[#3aeeee] bg-[#1e1f16e7] text-white'><Outlet></Outlet></main>
        <footer><Footer></Footer></footer>
    </div>
  )
}
