import { Request, Response } from "express";
import Product from "../models/Product.model";

export const getProducts = async (req: Request, res: Response) => {
  const products = await Product.findAll(
    //Si queremos obtener con alguna condicion
    {
      order: [
        ["price", "DESC"], //por ejemplo ordenar por precio de mayor a menor
      ],
      //limit: 2, //o si se quiere poner un limite de productos obtenidos
      //attributes: {exclude: ['createdAt', 'updatedAt', 'availability']}, //o si se quiere obtener solo ciertos atributos se puede excluir los otros
    }
  );
  res.json({ data: products });
};

export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);

  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }
  res.json({ data: product });
};

export const createProduct = async (req: Request, res: Response) => {
  const product = await Product.create(req.body);
  res.status(201).json({ data: product });
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);

  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  //Actualizar el producto
  await product.update(req.body);
  await product.save();

  res.json({ data: product });
};

export const updateAvailability = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);

  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  //Actualizar un atributo del producto
  product.availability = !product.dataValues.availability;
  await product.save();

  res.json({ data: product });
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);

  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  await product.destroy(); //Para eliminar definitivo de la base de datos los cual NO ES RECOMENDABLE
  res.json({ data: "producto eliminado" });
};
