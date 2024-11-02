import ToggleTheme from "../Header/ToggleTheme/ToggleTheme"



const Header = () => { 

    return <div className="	flex justify-center py-1.5 h-10 bg-alura-200 dark:bg-dark-200 text-pretty md:justify-between  gap-2 sm:rounded-xl ">
        <h1 className="	justify-content: center text-gray-100 text-lg font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-violet-500  ">Bem vido (a), ao meu Portifólio!</h1>
        <ToggleTheme />
        </div>
}

export default Header 