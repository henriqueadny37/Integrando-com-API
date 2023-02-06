import { useRouter } from "next/router"
import Link from "next/link"

export default function Nome(){

    const router = useRouter()
    const codigo = router.query.codigo
    const nome = router.query.nome

    return(
        <div>
            <h1>rotas/ {codigo}/ {nome}</h1>
            <Link href="/rotas">
            <button style={{
                cursor:"pointer",
            }}>Voltar</button>
            </Link>
        </div>
    )
}