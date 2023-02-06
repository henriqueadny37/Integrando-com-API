import Link from "next/link"
import { router } from "next/router"
export default function index(){

    function NavegacaoSimples(url){
        router.push(url)
    }

    function navComparams(){
        router.push({
            pathname:"/rotas/123/params",
            query:{
                id: 123,
                nome:'Guinho'
            }
        })
    }

    return(
      <div style={{
        margin:"30px",
        fontSize:"2rem",
      }}>
        <h1>rotas index</h1>
       <ul>
            <Link href="rotas/params?id=22&nome=Guinho">
                <li>
                    params
                </li>
            </Link>

            <Link href="/rotas/123/buscar">
                <li>
                    Buscar
                </li>
             </Link>

             <Link href="/rotas/123/fofo">
                <li>
                    Fofo
                </li>
             </Link>
       </ul>
       <div style={{
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-start"
       }}>
        <button onClick={() => router.push("/rotas/123/buscar")}>Buscar</button>
        <button onClick={() => NavegacaoSimples("/rotas/123/fofo")}>Fofo</button>
        <button onClick={navComparams}>Params</button>
       </div>
      </div>
    )
}