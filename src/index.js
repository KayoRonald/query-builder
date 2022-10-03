express = require('express')
cors = require('cors')

app = express()

app.use(cors())
app.use(express.json())

app.get('/', function(req, res){
    res.send('oi')
})

app.listen(3001, function(){
    console.log('ok')
})