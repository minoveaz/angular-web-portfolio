import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ Producto} from '../interfaces/product.interface'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  cargando = true
  productos: Producto[] = []

  constructor( private http: HttpClient) {

    this.cargarProductos()
   }

   private cargarProductos(){
    this.http.get('https://angular-html-c0d55.firebaseio.com/productos_idx.json')
    .subscribe( (resp: Producto[]) => {
      console.log(resp)
      this.productos = resp
      this.cargando = false
    })
  }

  getProducto( id: string){
    return this.http.get(`https://angular-html-c0d55.firebaseio.com/productos/${id}.json`)
  }

}
