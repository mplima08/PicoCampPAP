const express = require('express')
const path = require('path');
const app = express()
 
app.use(express.static('./public'))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'./index.html'))
})



require('dotenv').config({ path: './private/.env' })


app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: false }))



app.listen(4000,(error)=>{
    if(error) throw error
    console.log('Api listening on port 4000')
})
