import Input from "../input/input"

const Form = ({ onSubmit}) => {
    const safeSubmit = event =>{
        event.preventDefault()
        event.stopPropagation()
        const name = event.target[0].value
        onSubmit({name,})
    }

    return <form onSubmit={safeSubmit} className="insira-nome">
        <Input type="text" required placeholder="Insira seu nome..." />
        <button type= "Submit" className="botao-seguir">Seguir</button>
    </form>
}

export default Form