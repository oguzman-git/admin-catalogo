import { Component, OnInit } from '@angular/core';
import { MarcaService } from '../../../services/marca.service';
import { NgForm } from '@angular/forms';
import { Marca } from 'src/app/modelos/marca';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent implements OnInit {

  constructor(public marcaService: MarcaService) { }

  ngOnInit() {
    this.marcaService.obtenerMarcas();
    this.reiniciarFormulario();    
  }

  onSubmit(marcaForm: NgForm){
    
      if(marcaForm.value.$key == null){
        this.marcaService.insertarMarca(marcaForm.value); //Inserta información en base de datos 
        console.log("AGREGA" + marcaForm.value);
        }else{ 
            console.log(this.marcaService.obtenerMarcas());  //if(marcaForm.value.$key)
          this.marcaService.actualizarMarca(marcaForm.value); //Actualiza el valor en la base de datos 
          //console.log("ACTUALIZA" + marcaForm.value);
        }
        this.reiniciarFormulario(marcaForm);
       
        alert("La marca ha sido guardada");
  }

  reiniciarFormulario(marcaForm?: NgForm) {

    if(marcaForm != null) 
      marcaForm.reset();
      this.marcaService.selectMarca = new Marca();    
    
  }

  reiniciarFormulario2(marcaForm?: NgForm) {

    if(marcaForm != null) 
    this.marcaService.selectMarca = new Marca();           
    
  }

}
