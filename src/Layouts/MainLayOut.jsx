import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function MainLayOut() {
  return (
    <>
        <nav><NavBar></NavBar></nav>
        <main><Outlet></Outlet></main>
        <footer><Footer></Footer></footer>
    </>
  )
}
