import { useRouter } from "next/router"
import Link from "next/link"
export default function Params(){

    const router =  useRouter()

   const id = router.query.id
   const nome = router.query.nome 
    return(
        <div>
            <h1>Rota params: {id} e {nome}</h1>

            <Link href="/rotas">
            <button style={{
                cursor:"pointer",
            }}>voltar</button>
            </Link>
        </div>
    )
}