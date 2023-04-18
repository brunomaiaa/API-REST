const express = require('express')
const app = express()
const port = 3000

// create default route
app.get('/', (req, res) => {
  res.send('Hello casa!')
})

// listen on port 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
