import { DiCss3, DiGit, DiHtml5, DiJavascript, DiReact } from "react-icons/di";
import MinhaImagem from "../img/eu.jpeg"



const Home = () => {

    return <div className="flex justify-center bg-sky-950 m-2 gap-20">

    <h1 className="dark:text-gray-50 scale-75 text-10 text-6xl p-20 py-10 ">Olá sou Wander, <br/> <strong>Desenvolverdor  Fullstack</strong></h1>

    <span   className="flex py-10 m-6 ">  <DiReact /> <DiHtml5/> <DiJavascript/> <DiGit/> <DiCss3/> </span>
    
    <img className="w-36  rounded-full" src={MinhaImagem} alt="" />

</div>


}
export default Home





