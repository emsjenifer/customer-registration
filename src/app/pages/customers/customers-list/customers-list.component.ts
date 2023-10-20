// customers-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../model/customer';
import { Router } from '@angular/router';
import { CustomerService } from '../../../services/customer.service'; 

@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html',
    styleUrls: ['./customers-list.component.sass']
  })
  export class CustomersListComponent {
    customers: Customer[] = [];
  
    constructor(private customerService: CustomerService, private router: Router) {
      this.customers = this.customerService.getList();
    }
  
    editarCliente(customer: Customer) {
      this.router.navigate(['/customers-edit', customer.id]);
    }
  
    excluirCliente(customerId: number) {
      this.customerService.delete(customerId);
      this.customers = this.customerService.getList();
    }
  }