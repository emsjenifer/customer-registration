import { Component } from '@angular/core';
import { Customer } from '../../../model/customer';
import { Router } from '@angular/router';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.sass']
})
export class CustomersEditComponent {
  customer: Customer = {
    id: 0,
    name: '',
    birthDay: new Date(),
    email: ''
  };

  constructor(private customerService: CustomerService, private router: Router) {}

  cancelar() {
    this.router.navigate(['/customers-list']);
  }

  salvar() {
    console.log(this.customer);
    this.customerService.update(this.customer);
    this.router.navigate(['/customers-list']);
  }
}