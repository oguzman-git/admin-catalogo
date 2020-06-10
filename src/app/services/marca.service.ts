import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Marca } from '../modelos/marca';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
 
  listaMarcas: AngularFireList<any>;
  selectMarca: Marca = new Marca();

  constructor(private firebase: AngularFireDatabase) { }

    obtenerMarcas(){
      return this.listaMarcas = this.firebase.list('marcas');
    }

    insertarMarca(marca: Marca){
      this.listaMarcas.push({
        nombre: marca.nombre       
      });
    }

    actualizarMarca(marca: Marca) {
      console.log(marca.$key);
      if(marca.$key != null) {
        this.listaMarcas.update(marca.$key, {        
          nombre: marca.nombre
        });
      }
    }
   
    borrarMarca($key: string) {
      this.listaMarcas.remove($key);
    }

}
