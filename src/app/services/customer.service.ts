import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [];

  constructor() {
    this.loadCustomersFromLocalStorage();
  }

  getList(): Customer[] {
    return this.customers;
  }

  getById(id: string){
    return this.customers.find( customer => customer.id === id);
  }

  update(customer: Customer) {
    const existingCustomer =  this.getById(customer.id);
    if (existingCustomer) {
      Object.assign(existingCustomer, customer);
    }
    this.saveCustomersToLocalStorage();
  }

  delete(id: string) {
    this.customers = this.customers.filter(customer => customer.id !== id);
    this.saveCustomersToLocalStorage();
  }

  create(customer:Customer){
    let uuid = self.crypto.randomUUID();
    customer.id = uuid;
    this.customers.push(customer);
    this.saveCustomersToLocalStorage();
  }


  private saveCustomersToLocalStorage() {
    localStorage.setItem('customers', JSON.stringify(this.customers));
  }

  private loadCustomersFromLocalStorage() {
    const storedCustomers = localStorage.getItem('customers');
    if (storedCustomers) {
      this.customers = JSON.parse(storedCustomers);
    }
  }
}