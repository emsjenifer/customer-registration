import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService  {

  custormers:Customer[] = []

  constructor() {
   let customer:Customer = {
      id: 1,
      name: "Carlos",
      email: "carlos@carlos.com",
      birthDay: new Date("1984-06-18")
  }

  let customer2 = <Customer>{
    id: 2,
    name: "Jose",
    email: "jose@carlos.com",
    birthDay: new Date("1984-06-18")
  }

    this.custormers.push(customer);
    this.custormers.push(customer2);

  }

  getList():Customer[] {
    return this.custormers;
  }

  add(customer:Customer){

    this.custormers.push(customer);

  }

  update(customer:Customer){
  }

  delete(id:number ){
  }
}
