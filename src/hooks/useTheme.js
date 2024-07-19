import { useState, useEffect } from "react"

export function useTheme() {
   const [theme, setTheme] = useState('light')
   // Add class for body
   useEffect(() => {
      document.body.classList.add(theme)
   }, [theme])

   const changeTheme = () => {
      document.body.classList.remove(theme)
      theme === 'light'
         ? setTheme('dark')
         : setTheme('light')
   }

   return [theme, changeTheme]
}