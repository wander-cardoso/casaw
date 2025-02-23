import { DiCss3, DiGit, DiHtml5, DiJavascript, DiReact } from "react-icons/di";
import MinhaImagem from "../img/eu.jpeg"



const Home = () => {

    return <div className="flex rounded-md justify-around bg-sky-950 m-2 sm:gap-20">

    <h1 className="dark:text-gray-50 scale-75 text-10 sm:text-6xl sm:p-20 sm:py-10 ">Olá sou Wander, <br/> <strong>Desenvolverdor  Fullstack</strong></h1>

    <span   className="flex justify-around py-10 sm:m-6 ">  <DiReact /> <DiHtml5/> <DiJavascript/> <DiGit/> <DiCss3/> </span>
    
    <img className="  h-30 w-10 sm:h-52 sm:w-36  rounded-full" src={MinhaImagem} alt="minhaimagem" />

</div>


}
export default Home





