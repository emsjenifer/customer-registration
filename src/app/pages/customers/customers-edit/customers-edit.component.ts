import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../model/customer';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: '[app-customers-edit]',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.sass']
})
export class CustomersEditComponent implements OnInit {
  id:number = -2

  customer: Customer = {
    id: 0,
    name: '',
    birthDay: new Date(),
    email: ''
  };

  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const getId = this.route.snapshot.paramMap.get('customerId');
    if (getId) {
      this.id = parseInt(getId);
      this.loadCustomer(this.id);
      console.log('cliente do edit', this.customer);
    }
  }

  loadCustomer(id: number) {
    const customersJson = localStorage.getItem('customers');
    console.log('customersJson:', customersJson);
    console.log(id);
  
    if (customersJson) {
      const customers: Customer[] = JSON.parse(customersJson);
      console.log('customers:', customers);
  
      const customer = customers.find(customer => customer.id == id);
      console.log('customer:', customer);
  
      if (customer) {
        this.customer = { ...customer };
      }
    }
  }

  cancel() {
    this.router.navigate(['customers', 'list']);
  }

  save() {
    console.log(this.customer);
    this.customerService.update(this.customer);
    this.router.navigate(['customers', 'list']);
  }
}