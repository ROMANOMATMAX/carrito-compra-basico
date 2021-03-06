import React from 'react';

const Producto = ({producto, carrito, agregarProducto, productos}) => {

    const {id, nombre, precio} = producto;

    //Agregar producto al carrito
    const seleccionarProducto = id => {
        const producto = productos.filter(producto => producto.id === id)[0];
        agregarProducto([
            ...carrito,
            producto
        ])
        console.log(producto);
    }

    const eliminarProductos = id => {
        const productos = carrito.filter(producto => producto.id !== id);
        agregarProducto(productos);
    }

    return (  
        <div>
            <h2>{nombre}</h2>
            <p>$ {precio}</p>
            {productos 
            ?
                <button
                    type="button"
                    onClick = {() => {
                        seleccionarProducto(id);
                    }}
                >Comprar</button>
            :
                <button
                    type="button"
                    onClick = {() => {
                        console.log('estas eliminando guachin');
                        eliminarProductos(id);
                    }}
                 >Eliminar</button>
            }

            
        </div>
    );
}
 
export default Producto;