import ToggleTheme from "../Header/ToggleTheme/ToggleTheme"



const Header = () => { 


    return <div className="	flex p-4 justify-center py-1.5 h-10 bg-alura-200 dark:bg-dark-200  sm::justify-between gap-2 sm:gap-28 ">
        <h1 className=" flex text-gray-100 text-xs sm:text-xl py-1 sm:py-0 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-violet-500  ">Bem vido (a), ao meu Portifólio!</h1>
        <ToggleTheme />
        </div>
}

export default Header 