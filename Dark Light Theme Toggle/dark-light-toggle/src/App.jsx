import React, { useEffect, useState } from 'react';
import Hero from './components/Hero'

const App = () => {

    const [darkMode, setDarkMode] = useState(()=>{
      const savedTheme =localStorage.getItem('theme')
      if(savedTheme){
        return savedTheme === 'dark'
      }else{
        return window.matchMedia('(prefer-color-schema:dark)').matches
      }
    });
  
    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem('theme','dark')
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem('theme','light')
      }
    }, [darkMode]);
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    }; 

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950 relative transition-colors duration-300 isolate">
      <div className="absolute inset-0 -z-10">
      
        <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:hidden "></div>
        <div class="relative h-full w-full bg-white dark:hidden" >-<div class="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:hidden"></div></div>

      </div>
      <button
        onClick={toggleDarkMode}
        className="fixed top-3 lg:top-4 right-3 lg:right-4 w-9 h-9 lg:w-10 lg:h-10 flex justify-center items-center rounded-full bg-amber-500 text-neutral-950 shadow-lg hover:bg-amber-600 transition-colors z-10"
      >
        <i
          className={`bx bx-${darkMode ? "sun" : "moon"} text-lg lg:text-xl`}
        ></i>
      </button>
      <div className="p-4">
       <Hero />
      </div>
    </div>
  )
}

export default App
