const mongoose = require("mongoose")

const asignatureShema = new mongoose.Schema({

    code: { type: Number, requered: true, unique: true },
    nombre: { type: String, requerid: true, unique: true },
    jornada: { type: String, requerid: true, unique: true },
    cursantes: Array

})

module.exports = mongoose.model('Asignature', asignatureShema)