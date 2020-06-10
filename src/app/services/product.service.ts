import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Producto } from '../modelos/producto';
import { Marca } from '../modelos/marca';

import { MarcaService } from './marca.service';

@Injectable()
export class ProductService {

  listaProductos: AngularFireList<any>;
  selectProducto: Producto = new Producto();

  constructor(private firebase: AngularFireDatabase,
              public marcaService: MarcaService) { }

    obtenerProductos(){
      return this.listaProductos = this.firebase.list('productos');
    }

    insertarProducto(producto: Producto){
      this.listaProductos.push({
        nombre: producto.nombre,
        talla: producto.talla,
        observaciones: producto.observaciones,
        marca: producto.marca,
        cantidadInventario: producto.cantidadInventario,
        fechaEmbarque: producto.fechaEmbarque
      });
    }

    actualizarProducto(producto: Producto) {
      this.listaProductos.update(producto.$key, {        
        nombre: producto.nombre,
        talla: producto.talla,
        observaciones: producto.observaciones,
        marca: producto.marca,
        cantidadInventario: producto.cantidadInventario,
        fechaEmbarque: producto.fechaEmbarque
      });
    }
   
    borrarProducto($key: string) {
      this.listaProductos.remove($key);
    }
}
