import express from 'express'

const app = express()

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
    res.send(selecoes)
    })

export default app
