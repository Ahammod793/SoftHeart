import React, { createContext, useContext, useState } from 'react'


export const themeProvider = createContext()
export default function ThemeContext({children}) {
    const [theme, setTheme] = useState(true)

    const toggleTheme = () => {
        setTheme(!theme)
    }
    const items = {
        theme, toggleTheme
    }
  return (
   <themeProvider.Provider value={items}>
    {children}
   </themeProvider.Provider>
  )
}
