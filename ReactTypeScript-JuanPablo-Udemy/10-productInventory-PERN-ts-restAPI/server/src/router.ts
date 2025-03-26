import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateAvailability,
  updateProduct,
} from "./handlers/product";
import { body, param } from "express-validator";
import { handleInputErrors } from "./middleware";

const router = Router();

//SCHEMA
/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The Product ID
 *           example: 1
 *         name:
 *           type: string
 *           description: The Product name
 *           example: Monitor Curvo de 49 pulgadas
 *         price:
 *           type: number
 *           description: The Product price
 *           example: 200
 *         availability:
 *           type: boolean
 *           description: The Product availability
 *           example: true
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get a list of Products
 *     tags:
 *       - Products
 *     description: Return a list of Products
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                $ref: '#/components/schemas/Product'
 */

//Routing
router.get("/", getProducts);

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Get a Product by ID
 *     tags:
 *       - Products
 *     description: Return a product based on its unique ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the product to retrieve
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful Response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 *       400:
 *         description: Bad request - Invalid ID
 */

router.get(
  "/:id",
  param("id").isInt().withMessage("ID no valido"),
  handleInputErrors,
  getProductById
);

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Create a new Product
 *     tags:
 *       - Products
 *     description: Returns a new record in the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 excample: Monitor Curvo de 49 pulgadas
 *               price:
 *                 type: number
 *                 example: 200
 *     responses:
 *       201:
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Bad request - invalid input data
 *
 */

router.post(
  "/",

  //Validacion
  body("name")
    .notEmpty()
    .withMessage("El nombre del Producto no puede ir vacio"),

  body("price")
    .isNumeric()
    .withMessage("Valor no valido")
    .notEmpty()
    .withMessage("El precio del Producto no puede ir vacio")
    .custom((value) => value > 0)
    .withMessage("Precio no valido"),
  handleInputErrors,

  createProduct
);

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Updated a Product with user input
 *     tags:
 *       - Products
 *     description: Returns the updated product
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the product to update
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Monitor Curvo de 49 pulgadas"
 *               price:
 *                 type: number
 *                 example: 200
 *               availability:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Bad request - Invalid ID
 *       404:
 *         description: Product not found
 */

router.put(
  //Modifica totalmente el producto (lo actualiza)
  "/:id",
  //Validacion
  param("id").isInt().withMessage("ID no valido"),
  body("name")
    .notEmpty()
    .withMessage("El nombre del Producto no puede ir vacio"),

  body("price")
    .isNumeric()
    .withMessage("Valor no valido")
    .notEmpty()
    .withMessage("El precio del Producto no puede ir vacio")
    .custom((value) => value > 0)
    .withMessage("Precio no valido"),

  body("availability")
    .isBoolean()
    .withMessage("Valor para la disponibilidad no valido"),
  handleInputErrors,
  updateProduct
);

/**
 * @swagger
 * /api/products/{id}:
 *   patch:
 *     summary: Updated Product availability
 *     tags:
 *       - Products
 *     description: Returns the updated availability
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the product to update
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Bad request - Invalid ID
 *       404:
 *         description: Product not found
 */

router.patch(
  "/:id",
  param("id").isInt().withMessage("ID no valido"),
  handleInputErrors,
  updateAvailability
); //Modifica del producto solo el atributo que se le indique

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Delete a Product by a given ID
 *     tags:
 *       - Products
 *     description: Returns a confirmaation message
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the product to delete
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               value: "Producto Eliminado"
 *       400:
 *         description: Bad request - Invalid ID
 *       404:
 *         description: Product not found
 */

router.delete(
  "/:id",
  param("id").isInt().withMessage("ID no valido"),
  handleInputErrors,
  deleteProduct
);

export default router;
