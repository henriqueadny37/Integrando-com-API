export default function Questao(req, res) {
    if(req.method === "GET") {
        const id = req.query.id
            res.status(200).json({
                id,
                enunciado: 'whats your favorite colors?',
                respostas: [
                    'White', 'Red', 'Green', 'Orange'
                ]
            })
    } else{
        res.status(405) .send()
    }
}