const mongoose = require('mongoose') /* si no lo tengo debo instalar mongoose  */

const connectToDB = () => {

    mongoose.set('useCreateIndex', true)
        /*Me permite crear indices de mis documentos desde la api  
           como si fuera una base de datos */
    mongoose.connect('mongodb://localhost:27017/equipoBit', { /*localhost:27017 de mongo */
        useNewUrlParser: true,
        /*Analiza las cadenas de coneccionde mongoDB */
        useUnifiedTopology: true,
        /*Permite eliminar la compatibilidad con varias opciones de coneccion que ya no son relevantes u obsoletas*/


    }, (error) => {
        if (error) { /*si existe un error ....  recordar que !existe = no existe */
            console.log("Error->", error)

        } else { /*si no lo hay  */
            console.log("Nos conectamos correctamente.....")
        }

    })
}

/* Exportar esta conexion para porderla usar en otros archivos */

module.exports = { connectToDB }