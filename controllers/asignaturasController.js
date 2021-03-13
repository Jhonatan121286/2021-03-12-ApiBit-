const Asignature = require('../models/asignaturasmodels')
const User = require('../models/user')

exports.create = async(req, res) => { /*informo que la funcion es asincrona */
    const asignatura = new Asignature({ /* a la const es de tipo Asignature */
        code: req.body.code,
        nombre: req.body.nombre,
        jornada: req.body.jornada
    })
    const result = await asignatura.save() /* el await permite que se espere hasta que la promesa se ejecute una espera */
    if (!result) {
        return res.status(404).send({ message: 'Hubo un campo incompleto' })
    }
    res.send(result)
}