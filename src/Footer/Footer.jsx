import {FaGithub, FaFacebook, FaInstagram} from 'react-icons/fa'



/* const selections =[
{
    title: 'Solutions',
    items:['Marketing', ' Analytics', 'Commerce', 'Data', 'Cloud']
},

[
    {
        title: 'Suport',
        items:['Pricing', 'Documentation', 'Guides', 'API', 'Status']
    },
    ]
    
] */

/* const items =[
    {
        name:'Github',
        icon:FaGithub,
        link:'https://Google.com'
    },

    {
        name:'Facebook',
        icon:FaFacebook,
        link:'https://Google.com'
    },

    {
        name:'Instagram',
        icon:FaInstagram,
        link:'https://Google.com'
    },

] */

function Footer() {
    return (
    <footer>
        
        <footer class="rodape align-text-bottom text-center" >
        
            <FaGithub/>
        <FaFacebook />
        <FaInstagram/>
            &copy; Desenvolvido por Wander! </footer>
    </footer>
)
}






export default Footer