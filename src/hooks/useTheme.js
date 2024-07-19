import { useState, useEffect } from "react"

export function useTheme() {
   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

   // Add class for body
   useEffect(() => {
      console.log(2);
      document.body.classList.add(theme)
      localStorage.setItem('theme', theme)
   }, [theme])

   const changeTheme = () => {
      document.body.classList.remove(theme)
      theme === 'light'
         ? setTheme('dark')
         : setTheme('light')
   }

   return [theme, changeTheme]
}