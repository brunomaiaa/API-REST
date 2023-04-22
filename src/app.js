import express from 'express'

const app = express()

// tell express to read body with json
app.use(express.json())

// mock
const selecoes = [
    {id: 1, nome: 'Brasil', grupo: 'G'},
    {id: 2, nome: 'Argentina', grupo: 'G'},
    {id: 3, nome: 'Alemanha', grupo: 'G'},
    {id: 4, nome: 'França', grupo: 'G'},
]

function buscarSelecaoPorId(id) {
    return selecoes.filter( selecao => selecao.id == id)
}

function buscarIndexSelecao (id) {
    return selecoes.findIndex( selecao => selecao.id == id)
}


// create default route
app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes)
    })

app.get('/selecoes/:id', (req, res) => {
    res.json(buscarSelecaoPorId(req.params.id))
})

    app.post('/selecoes', (req, res) => {
        selecoes.push(req.body)
        res.status(201).send('Successfully registered selection')
    })

    app.delete('/selecoes/:id', (req, res) => {
        let index = buscarSelecaoPorId(req.params.id)
        selecoes.splice(index, 1)
        res.status(200).send('Successfully deleted selection' )
    })

    app.put('/selecoes/:id', (req, res) => {
        let index = buscarSelecaoPorId(req.params.id)
        selecoes[index].selecao = req.body.selecao
        selecoes[index].grupo   = req.body.grupo
        res.status(200).json(selecoes)
    })


export default app
