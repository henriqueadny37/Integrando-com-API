import { useRouter } from "next/router"
import Link from "next/link"

export default function Buscar(){

    const router = useRouter()

    const codigo = router.query.codigo

    console.log(router)

    return(
        <div>
            <h1>rotas/{codigo}/buscar</h1>
            <Link href="/rotas">
            <button style={{
                cursor:"pointer"
            }}>Voltar</button>
            </Link>
        </div>
    )
}
//rota dinamica