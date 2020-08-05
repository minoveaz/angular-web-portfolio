import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               public productServices: ProductsService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      console.log(params['termino'])
      this.productServices.buscarProducto(params['termino'])
    })
  }

}
