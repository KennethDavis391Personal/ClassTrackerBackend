import express from 'express'
const app = express()
const port = '10000'

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/layer', (req, res) => {
    res.send('Second Layer')
})

app.use('/', (req, res) => {
    res.status(404).send('Not Found')
})

app.listen(port, () => {
    console.log("server started on port 10000")
})