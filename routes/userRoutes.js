module.exports = (app) => {
    const user = require('../controllers/userControllers')

    app.post('/user/create', user.create)
        /*para la ruta usamos la que queramos user/create.
        se usa el metodo http de express llamado post, creamos la ruta y 
        la indicamos la funcion que se debe ejecutar en esa ruta */


    app.get('/user/get', user.findAll)




    app.get('/user/getOne/:id', user.findOne)
        /*EL :id definio un pathParamter 
           o un parametro de ruta de busqueda */




    app.put('/user/update/:id', user.update)






    app.delete('/user/delete/:id', user.delete)


}