const express = require('express') /*Importar requerir todas las funcionalidades de express y almacenar en una constante debo instalar express*/
var cors = require('cors') /*permite que el fronent pueda acceder a las funciones de la api debo instalar cors */

const bodyParser = require('body-parser') /*Trabajar con el cuerpo de .json para visualizarlo si no lo tengo debo instalar body-parser*/
const { connectToDB } = require('./db')
    /*OJOOOOOOOOOOOOOOOOOOOO       
Importamos el archivo db esto lo hago una vez haya creado y conectado la BD y haber creado el archivo db.js */


const app = express() /*Instanciamos express, llamamos todas las instancias de express por medio de objetos  */

app.use(cors())
app.use(bodyParser.json()) /*Con express voy a utilizar esto */
connectToDB() /* con esta funcion debo conectar la funcion connectToDB() */


/*Para crear les rutas  */
require('./routes/userRoutes')(app) /* se envia la informacion de la carga de express a este archivo desde el index.js*/
require('./routes/asignaturasRoutes')(app) /* con esta ruta en el index declaramos app para darle la coneccion de la ruta y controladores  */

app.listen(3000, () => {
    console.log("nos hemos conectado!!")
})