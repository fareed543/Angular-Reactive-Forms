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
      title: 'Service 1',
      description : 'service 1 details',
      image : 'more-from-1.png'
    },
    {
      id: 2,
      title: 'Service 2',
      description : 'service 2 details',
      image : 'more-from-2.png'
    },
    {
      id: 3,
      title: 'Service 3',
      description : 'service 3 details',
      image : 'more-from-3.png'
    },
    {
      id: 4,
      title: 'Service 4',
      description : 'service 4 details',
      image : 'more-from-4.png'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
