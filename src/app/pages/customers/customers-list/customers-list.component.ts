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
  export class CustomersListComponent implements OnInit {
    customers: Customer[] = [];
    customerIdSelectedToDelete:number = -1;
  
    constructor(private customerService: CustomerService, private router: Router) {}

    ngOnInit(): void {
      this.customers =  this.customerService.getList();
    }
  
    goToCustomerEdit(customerId: number) {
      this.router.navigate(['customers', 'edit', customerId]);
    }
  
    deleteCustomer() {
      this.customerService.delete(this.customerIdSelectedToDelete);
      this.ngOnInit()
    }

    openModalConfirmDelete(id:number){
      this.customerIdSelectedToDelete = id;
    }
  }