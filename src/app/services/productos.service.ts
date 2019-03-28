import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Producto } from '../interfaces/producto.interface'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  urlFireBase = environment.urlApiFireBase;
  cargando =  true;
  productos: Producto[] = [];

  constructor(private http: HttpClient) { 
    this.cargarProductos();
  }

  private cargarProductos() {
    this.http.get( this.urlFireBase + 'productos_idx.json')
             .subscribe(
               (res: Producto[]) => {
                this.productos = res; 
                console.log(res);
                this.cargando = false;
               }
             );
    
  }
}
