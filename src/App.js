import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {

  //listado de productos
  //Usualmente la funcion del useState agrega o elimina estados
  const [productos, setProductos] = useState(
    [
      { id: 1, nombre: 'Camisa ReactJS', precio: 50},
      { id: 2, nombre: 'Camisa VueJS', precio: 25},
      { id: 3, nombre: 'Camisa NodeJS', precio: 15},
      { id: 4, nombre: 'Camisa AngularJS', precio: 10}
    ]
  )

  //state para carro de compra

  const [carrito, agregarProducto] = useState([

  ]);

  //Obtener la fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header 
        titulo= 'Tienda Virtual de Remeras'
        numero = {['mouse', 'computadora', 'webCam']}
        avatar = {{
          nombre: 'Matias',
          usuario: 'romam132',
          photo: 'https://abc'
        }}
      />

      <h1>Lista de Productos</h1>
      {productos.map( producto => (
        <Producto 
          key = {producto.id}
          producto = {producto}
          carrito = {carrito}
          agregarProducto = {agregarProducto}
          productos = {productos}
        />
      ))}

      <Carrito 

        carrito = {carrito}
        agregarProducto = {agregarProducto}
      />

      <Footer 
        fecha = {fecha}
      />
    </Fragment>
  );
}

export default App;
