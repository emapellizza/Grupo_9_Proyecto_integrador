const { body } = require("express-validator");

//Validaciones del formulario de producto nuevo
const validateProduct = [
  body("brand").notEmpty().withMessage("* Debes seleccionar una Marca"),
  body("model").notEmpty().withMessage("* Debes ingresar un modelo"),
  body("price").notEmpty().withMessage("* Debes ingresar un precio"),
  body("category").notEmpty().withMessage("* Debes seleccionar una categoria"),
  body("genre").notEmpty().withMessage("* Debes seleccionar un genero"),
  body("shortDescription")
    .notEmpty()
    .withMessage("* Debes agregar una breve descripcion"),
  body("longDescription")
    .notEmpty()
    .withMessage("* Debes agregar una descripcion"),
  body("size").notEmpty().withMessage("* Debes seleccionar los talles"),
  body("color").notEmpty().withMessage("* Debes seleccionar los colores"),
];

module.exports = validateProduct;
