const express = require('express')
const path = require('path');
const app = express()
 
app.use(express.static('./public'))

app.use(express.urlencoded({extended:true}))
app.use(express.json({extended:false}))


app.use('/contactos',require('./routes/contactosRoute.js'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'./index.html'))
})

app.listen(4000,(error)=>{
    if(error) throw error
    console.log('ativa na porta 4000')
})
