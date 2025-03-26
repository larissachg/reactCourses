/* 
    Rutas de Eventos / Event
    host + /api/events
*/

const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");
const { validarCampos } = require("../middlewares/validar-campos");
const { check } = require("express-validator");
const { isDate } = require("../helpers/isDate");
const {
  getEventos,
  crearEvento,
  eliminarEvento,
  actualizarEvento,
} = require("../controllers/events");

const router = Router();

//Todas tienen que pasar por la validacion del JWT
router.use(validarJWT);

// Obtener eventos
router.get("/", getEventos);

//Crear un nuevo evento
router.post(
  "/",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatorio").custom(isDate),
    check("end", "Fecha de finalizacion es obligatorio").custom(isDate),
    validarCampos,
  ],
  crearEvento
);

//Actualizar un evento
router.put(
  '/:id', 
  [
      check('title','El titulo es obligatorio').not().isEmpty(),
      check('start','Fecha de inicio es obligatoria').custom( isDate ),
      check('end','Fecha de finalización es obligatoria').custom( isDate ),
      validarCampos
  ],
  actualizarEvento 
);

//Eliminar un evento
router.delete("/:id", eliminarEvento);

module.exports = router;
