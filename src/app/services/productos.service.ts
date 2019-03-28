import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  urlFireBase = environment.urlApiFireBase;
  cargando =  true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor(private http: HttpClient) { 
    this.cargarProductos();
  }

  private cargarProductos() {

    return new Promise(( resolve, reject) => {

      this.http.get( this.urlFireBase + 'productos_idx.json')
      .subscribe(
        (res: Producto[]) => {
         this.productos = res; 
         this.cargando = false;
         resolve();
        }
      );

    });
  }

  getProducto(id: string) {
    return this.http.get(`${this.urlFireBase}productos/${id}.json`);
  }

  buscarProducto(termino: string) {
    if ( this.productos.length === 0) {
      // esperar que esten cargados los productos
      this.cargarProductos().then( () => {
        // ejecutar despues de tener los productos
        // Aplicar filtro
        this.filtrarProductos(termino);
      })
    } else {
      // aplicar filtro
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino: string) {
    this.productosFiltrado = [];    
    termino = termino.toLowerCase();    

    this.productos.forEach( prod => {
      const tituloLower = prod.titulo.toLowerCase();
      if ( prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0 ) {
        this.productosFiltrado.push( prod );
      }
    });
  }
}
