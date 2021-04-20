const express = require("express");
const router = express.Router();

const validateRegister = require("../middlewares/valRegProduct");
const uploadProduct = require("../middlewares/multerMiddProduct");

const productsController = require("../controllers/productsController");
const usersController = require("../controllers/usersController");
const loginController = require("../controllers/loginController");
const adminController = require("../controllers/adminController");
//para la session
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

//vista administrador
router.get("/", adminController.view);

////////////rutas de productos//////////
//Detalle de producto
router.get("/products/detail/:idProduct", productsController.show);

//cear un nuevo producto:
router.get("/products/new", productsController.newProduct);
router.post(
  "/products/new",
  uploadProduct.single("productImage"),
  validateRegister,
  productsController.saveProduct
);

//Rutas para actualizar un producto:
router.get("/products/edit/:idProduct", productsController.updateProduct);
router.put("/products/edit/:idProduct", productsController.updateProduct);

//borrar un producto
router.delete("/products/delete/:idProduct", productsController.delete);

//lista productos
router.get("/products", productsController.listAll);

///////rutas usuarios///////
//detalle usuario
router.get("/profile", authMiddleware, usersController.profile);
///update usuario
router.get("/users/edit/:idUser", usersController.updateUser);
router.put("/users/edit/:idUser", usersController.updateUser);
//borrar usuario
router.delete("/users/delete/:idUser", usersController.delete);
//lista usuarios
router.get("/users", usersController.listAll); //admin/users

module.exports = router;