/* conjunto de funciones que me permitiran modificar, agregar etc sobre la coleccion usuarios */

const User = require('../models/user')
    /*requiero el modelo de midocumento */
    /* Promesa : no se sabe en que momento esa funcion va a terminar
     y dependa de otra, Nos puede regresar un objeto como error o como un ok o correcto  */

exports.create = (req, res) => {

    const nUser = new User({ /*Guardo en una constante el modelo diligenciado */

            code: req.body.code,
            userName: req.body.userName,
            email: req.body.email
        })
        /*PROMESAS ---then --catch---!!!! */
    nUser.save().then( /*En caso de exito se genera una instruccion o retorna una informacion*/

        data => {
            res.send(data) /* Me envie o me devuelva el caso exitoso */
        }

    ).catch( /*Se genera instrucciones en caso de que la solicitud sea un error y me de una respuesta */
        error => {
            res.status(500).send({
                message: error.message || "Error al crear el usuario"
            })

        }
    )
}





/*_____________________________________________________________ */


/*FUNCION PARA ENCONTAR TODOS LOS DOCUMENTOS  */
exports.findAll = (req, res) => {
    User.find({})
        /* Tomamos el modo de user, utilizamos el metodo ind
el metodo find recibe unos parametros que condicionan la busqueda.
Cuando el objeto que recibe esta vacio.... */
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send({ message: "hubo un error en el servidor" })
        })



}


/*FUNCION findOne PARA ENCONTAR por ID  LOS DOCUMENTOS  */


exports.findOne = (req, res) => {
    const id = req.params.id
    User.findById(id)
        .then((data) => {
            if (!data) {
                res.estatus(404).send({ message: "no se encontro el usuario con el id: " + id })
                    /*ERROR DEL CLIENTE NOT FOUND */
            } else {
                res.send(data)
            }
        })
        .catch((err) => {
            res.status(500).send({ message: "Error en el servidor" })
        })
}


/*FUNCION UPDATE PARA ACTUALIZAR   LOS DOCUMENTOS  */

exports.update = (req, res) => {
    const id = req.params.id
    if (!req.body) {
        return res.status(400).send({ message: "El cuerpo de la peticion no puede ir vacio" })
    }
    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then((data) => {
            if (!data) {
                res.status(404).send({ message: "No se puede editar un usuario inexistente" })
            } else {
                res.send({ message: "El usuario se ha actualizado" })
            }
        })
        .catch((err) => {
            res.status(500).send({ message: "Hubo un problema en el servidor" })
        })

}


/*FUNCION DELETE PARA ELIMINAR   LOS DOCUMENTOS  */

exports.delete = (req, res) => {
    const id = req.params.id
    User.findByIdAndRemove(id)
        .then((data) => {
            if (!data) {
                res.status(404).send({ message: "No se puede eliminar el documento que no se encuentra por que no se encontro" })
            } else {
                res.send({ message: "Se elimino el documento exitosamente" })
            }
        })
        .catch((err) => {
            res.status(500).send({ message: "Hubo un error en el servidor" })
        })
}