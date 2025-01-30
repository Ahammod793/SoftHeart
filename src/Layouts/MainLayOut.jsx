import React, { useContext } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import ThemeContext, { themeProvider } from '../Components/ThemeContext'

export default function MainLayOut() {
  const {theme, toggleTheme} = useContext(themeProvider)
  // console.log(theme)
  return (
    <div className='flex flex-col' data-theme={theme ? 'light' : 'dark'}>
        <nav className='sticky top-0 left-0 z-[1000]'><NavBar></NavBar></nav>
        <main className='px-10 bg-base-200 '><Outlet></Outlet></main>
        <footer><Footer></Footer></footer>
    </div>
  )
}
