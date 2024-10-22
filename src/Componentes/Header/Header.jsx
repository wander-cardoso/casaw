import ToggleTheme from "../Header/ToggleTheme/ToggleTheme"



const Header = ({user}) => { 


    return <div className="	flex items-center py-1.5 h-10 bg-alura-200 dark:bg-dark-200 text-pretty md:justify-between  gap-2 sm:rounded-xl ">
        <span className="hidden md:block text-cyan-300   ">Olá, { user?.name || "Usuário!"}</span>
        <h1 className="	justify-content: center text-gray-100 text-lg font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-violet-500  ">Bem vido (a), ao meu Portifólio!</h1>
        <ToggleTheme />
        </div>
}


export default Header 