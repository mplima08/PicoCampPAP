const express = require('express')
const enviarContactosRoute = express.Router()
const connection = require('../dbconnection')

enviarContactosRoute.post('/', (req, res) => {
    console.log(req.body)
    res.json({ msg: 'ok' })
        /*connection.query(
        'INSERT INTO contactos (PrimNome,UltNome,Email,Telem,Mensagem) VALUES (?,?,?,?,?)', [req.body.PrimNome, req.body.UltNome, req.body.Email, req.body.Telem, req.body.Mensagem],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                console.log(result)
                    //envio do email
                res.json({ text: 'Sua mensagem foi enviada com sucesso!' })
            }
        })*/


})

module.exports = enviarContactosRoute