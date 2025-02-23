import ToggleTheme from "../Header/ToggleTheme/ToggleTheme"
import { FaHouse } from "react-icons/fa6";


const Header = () => { 


    return <div className="	flex p-4 justify-around py-1.5 h-10 bg-alura-200 dark:bg-dark-200   gap-2 sm:gap-28 ">
        <ul>
            <li >
                <FaHouse className="h-6  text-gray-400 block dark:hidden cursor-pointer"/>
                <FaHouse className="h-6 text-yellow-200 hidden dark:block cursor-pointer"/>
                <a href="http://localhost:5173/"></a>
            </li>
        </ul>
        <h1 className=" flex text-gray-100 text-xs sm:text-xl py-1 sm:py-0 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-violet-500  ">Bem vido (a), ao meu Portifólio!</h1>
        <ToggleTheme />
        </div>
}

export default Header 