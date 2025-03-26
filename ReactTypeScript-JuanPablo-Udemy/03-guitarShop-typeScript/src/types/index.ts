export type Guitar = {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
};

//Para Heredar y extender un type: 
//Hereda todos los atributos de Guitar y se le agrega uno propio
export type CartItem = Guitar & { 
    quantity: number
};

//Otra forma (Utility Types), cuando se quiere heredar solo algunos de los atributos:
export type CartItem2 = Pick<Guitar, "id" | "name" | "price"> & {
    quantity: number
}
