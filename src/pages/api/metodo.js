const  metodo = (req, resp) =>{
    if(req.method === "GET"){
        resp.status(200).json({
            nome: "vuc vuc"
        })
    } else {
        resp.status(200).json({
            nome: "vek vek"
        })
    }
        
}
export default metodo