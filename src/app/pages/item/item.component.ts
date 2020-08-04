import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { ProductoDescription } from '../../interfaces/producto-description.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescription
  id: string


  constructor( private route: ActivatedRoute,
               private productoServicio: ProductsService) { }

  ngOnInit(): void {

    this.route.params
      .subscribe( parametros => {
        
        this.productoServicio.getProducto(parametros['id'])
          .subscribe((producto: ProductoDescription) => {
            this.id = parametros['id']
            this.producto = producto
          })
      })

  }

}
