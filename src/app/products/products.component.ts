import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  title : string = 'Our Products';
  services : any =[
    {
      id: 1,
      title: 'Product 1',
      description : 'Product 1 details',
      image : 'more-from-1.png'
    },
    {
      id: 2,
      title: 'Product 2',
      description : 'Product 2 details',
      image : 'more-from-2.png'
    },
    {
      id: 3,
      title: 'Product 3',
      description : 'Product 3 details',
      image : 'more-from-3.png'
    },
    {
      id: 4,
      title: 'Product 4',
      description : 'Product 4 details',
      image : 'more-from-4.png'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
