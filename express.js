// express é uma biblioteca para subir o servidor nodejs
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

// porta onde o node vai ser liberado
app.listen(3000)
