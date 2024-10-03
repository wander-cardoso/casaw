import ToggleTheme from "../Header/ToggleTheme/ToggleTheme"

const Header = ({user}) => { 

    return <div className="flex py-1.5 h-10 bg-alura-200 dark:bg-dark-200 text-pretty justify-between  px-20 gap-2 sm:rounded-xl sm:m-2 m-2 bg-scroll ">
        <span className="text-cyan-300 md:text-lg max-[555px]:hidden ">Olá, { user?.name || "Usuário!"}</span>
        <h1 className="  text-gray-100 text-lg font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-violet-500 inline-block ">Bem vido (a), ao meu Portifólio!</h1>
        <ToggleTheme />
        </div>
}

export default Header 