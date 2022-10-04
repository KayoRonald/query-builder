const knex = require('./database')

express = require('express')
cors = require('cors')

app = express()

app.use(cors())
app.use(express.json())

app.get('/', async function(req, res){
    const usuarios = await knex('usuarios').where('id', 1)
    console.log(usuarios)
    res.send('oi')
})

app.post('/', async function(req, res){
    // knex('').
})

app.listen(3001, async function(){
    const usuarios = await knex('usuarios').insert({name: 'jose', email: 'oi@gmail.com', curso: 'teste'}).toString()
    console.log(usuarios)
    console.log('ok')
})