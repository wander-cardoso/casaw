import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import { useEffect } from "react"



const ToggleTheme = () => {
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
    const pageClasses = document.documentElement.classList

    useEffect(() =>{
        systemPreference && pageClasses.add('dark')
    })

    const toggle= () => {
        pageClasses.toggle('dark')
    }
    return <div className= " "> 
        <MoonIcon className="h-6  text-gray-400 block dark:hidden cursor-pointer" onClick={toggle}/>
        <SunIcon className="h-6   text-yellow-200 hidden dark:block cursor-pointer" onClick={toggle}/>
        </div>
}

export default ToggleTheme