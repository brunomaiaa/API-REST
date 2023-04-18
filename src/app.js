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


// create default route
app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes)
    })

    app.post('/selecoes', (req, res) => {
        selecoes.push(req.body)
        res.status(201).send('Successfully registered selection')


    })

export default app
