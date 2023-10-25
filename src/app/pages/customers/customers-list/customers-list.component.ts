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
    customerIdSelectedToDelete:string = '-1'
  
    constructor(private customerService: CustomerService, private router: Router) {}

    ngOnInit(): void {
      this.customers =  this.customerService.getList();
    }
  
    goToCustomerEdit(id: string) {
      this.router.navigate(['customers', 'edit', id]);
    }
  
    deleteCustomer() {
      this.customerService.delete(this.customerIdSelectedToDelete);
      this.ngOnInit()
    }

    openModalConfirmDelete(id:string){
      this.customerIdSelectedToDelete = id;
    }
  }