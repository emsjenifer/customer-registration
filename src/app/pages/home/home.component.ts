import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  contador = 0;
  homeText = "";

  constructor (private customerService: CustomerService){

  }

  ngOnInit(): void {
    this.contador+=1;
    this.homeText = this.customerService.getList()[0].name;
  }

  adicionar(){
    this.contador++;
    console.log(this.contador)
  }
}
