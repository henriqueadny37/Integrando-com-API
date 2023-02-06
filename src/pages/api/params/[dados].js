export default function Params(req, res){
    res.status(200).json({
        params: req.query
    })
}

//exemplo de outro padrão de rotas dinâmicas
//para criar arquivo de rota dinâmica, inserir colchetes []