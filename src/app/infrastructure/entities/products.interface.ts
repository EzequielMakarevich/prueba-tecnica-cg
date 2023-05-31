export interface IProducts {
    destacado: number;
    garantia: number;
    id_producto: number;
    id_subcategoria: number;
    imagenes: [
        {
            id_producto_imagen: number;
            nombre: string;
            orden: number;
        }
    ]
    iva: number;
    nombre: string;
    precio: number;
    stock: number;
    vendible: number;
}
