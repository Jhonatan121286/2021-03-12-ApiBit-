/*Modelo para usuarios */

const mongoose = require('mongoose') /*Ojo con los require  */

const userSchema = new mongoose.Schema({
    code: { type: Number, required: true, unique: true },
    /*tipo de dato requerido es unico  */
    userName: { type: String, required: true, unique: false },
    email: { type: String, required: true, unique: true },
    role: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Role' }]

})

module.exports = mongoose.model('User', userSchema)
    /*Nombre con el que se va a exportar y la constante 
que almacena el modelo */