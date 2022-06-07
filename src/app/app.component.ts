import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Variables
  title = 'pruebaAngular';
  variable = true;
  casas = [{nombre: 'Casa en Atarfe', precio: 1200, img: "https://assets-global.website-files.com/5f4f67c5950db17954dd4f52/5f5b7ee442f1e5b9fee1c117_hacerse-una-casa.jpeg"},
  {nombre: 'Piso', precio: 1000, img: "https://assets-global.website-files.com/5f4f67c5950db17954dd4f52/5f5b7ee442f1e5b9fee1c117_hacerse-una-casa.jpeg"},
  {nombre: 'Casa en Pinos', precio: 800, img: "https://assets-global.website-files.com/5f4f67c5950db17954dd4f52/5f5b7ee442f1e5b9fee1c117_hacerse-una-casa.jpeg"}];
  listado= false
  nombreCasa = '';
  precioCasa = 0;
  imagenCasa ='';


  // Métodos

  altaCasa(){
    let nuevaCasa = {nombre: this.nombreCasa, precio: this.precioCasa, img: this.imagenCasa};
    this.casas.push(nuevaCasa)
    this.nombreCasa = '';
    this.precioCasa = 0;
    this.imagenCasa = '';

  }




  
  obtenerListado(){
    this.listado = !this.listado
   
  }
  detalle(){
    console.log("Funciona maquina")
  }

  borrar(posicion:any){
    console.log(posicion)
    this.casas.splice(posicion, 1)

  }

 
}
