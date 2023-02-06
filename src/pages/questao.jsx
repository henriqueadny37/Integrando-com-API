import { useEffect, useState } from "react"

export default function Questao() {

    const [questao, setQuestao] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/api/questions/1')
    .then(resp => resp.json())
    .then(setQuestao)
    },[])

    function RenderizarResp(){
        if(questao){
            return questao.respostas.map((resp, i) => {
                return <li key={i}>{resp}</li>
            })
        }
        return false
    }

    return(
        <div style={{
            margin:"30px",
            color: "#fafafa",
            fontSize:"1rem",
        }}>
            <h1>Question One</h1>
            <div>
                <span>{questao?.enunciado}</span>
                <ul>
                    {RenderizarResp()}
                </ul>
            </div>
        </div>
    )
}