module.exports = (app) => {
    const asignature = require("../controllers/asignaturasController")



    app.post("/class/create", asignature.create)
}