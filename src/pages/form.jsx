import { useState } from "react"

export default function Form(){

    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState(0)
    const [usuario, setUsuario] = useState([])

     async function saveUsuario() {
        await fetch('/api/form', {
            method: 'POST',
            body: JSON.stringify({nome, idade})
        })

        setNome("")
        setIdade(0)

        const res = await fetch('/api/form')
        const usuario = await res.json()
        setUsuario(usuario)

    }

    function renderizarUsuario(){
       return usuario.map((usuario, i) => {
        return <li key={i}>{usuario.nome} tem {usuario.idade} anos</li>
       })
    }

    return(
        <div  style={{
            margin:"30px",
            color:"#b8f60d",
        }}>
            <h1>Integrando com API #02</h1>
            <input type="text" value={nome}
            onChange={e => setNome(e.target.value)} />
            <input type="number" value={idade}
            onChange={e => setIdade(+e.target.value)} />
            <button onClick={saveUsuario}>Enviar</button>
            {/*acima são dados para enviar ao back-end */}
            <ul>
                {renderizarUsuario()}
                {/*aqui recebe a lista de usuarios*/}
            </ul>
        </div>
    )
}