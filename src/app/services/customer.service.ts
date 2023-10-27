import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [];

  constructor(private http: HttpClient) {
    this.loadCustomersFromLocalStorage();
  }

  getList(): Customer[] {
    return this.customers;
  }

  getById(id: string){
    return this.customers.find( customer => customer.id === id);
  }

  update(customer: Customer) : Promise<void> {
    return new Promise ((resolve, reject) => {
      const existingCustomer = this.getById(customer.id);
      if (existingCustomer) {
        Object.assign(existingCustomer, customer);
      }
      this.saveCustomersToLocalStorage();
      resolve();
    })
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