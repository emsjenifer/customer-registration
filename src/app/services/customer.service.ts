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

  update(customer: Customer) {
    const existingCustomer = this.customers.find(c => c.id === customer.id);
    if (existingCustomer) {
      Object.assign(existingCustomer, customer);
    } else {
      this.customers.push(customer);
    }

    this.saveCustomersToLocalStorage();
  }

  delete(id: number) {
    this.customers = this.customers.filter(customer => customer.id !== id);
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