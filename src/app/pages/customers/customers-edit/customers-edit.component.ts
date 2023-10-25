import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../model/customer';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: '[app-customers-edit]',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.sass']
})
export class CustomersEditComponent implements OnInit {

  id:string = 'newCustomer';
  customers : FormGroup

  constructor(private customerService: CustomerService, private route: ActivatedRoute) {
    this.customers = new FormGroup({
      name: new FormControl('',[Validators.required, Validators.minLength(3)]),
      birthDay: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email, this.emailValidator()])
    })
  }

  ngOnInit() {
    const getId = this.route.snapshot.paramMap.get('id');
    if (getId) {
      this.id = getId;
      // this.loadCustomer(this.id);

      const currentCustomer = this.customerService.getById(this.id);

        this.customers = new FormGroup({
          name: new FormControl(currentCustomer?.name,[Validators.required, Validators.minLength(3)]),
          birthDay: new FormControl(currentCustomer?. birthDay,[Validators.required]),
          email: new FormControl(currentCustomer?.email,[Validators.required, Validators.email, this.emailValidator()])
        })
    }
  }

  // loadCustomer(id: string) {
  //   const customersJson = localStorage.getItem('customers');
  //   console.log('customersJson:', customersJson);
  //   console.log(id);
  
  //   if (customersJson) {
  //     const customers: Customer[] = JSON.parse(customersJson);
  //     console.log('customers:', customers);
  
  //     const customer = customers.find(customer => customer.id == id);
  //     console.log('customer:', customer);
  
  //     if (customer) {
  //       customer = { ...customer };
  //     }
  //   }
  // }

  onSubmit(customer:Customer) {
    if (this.id === 'newCustomer')
      this.customerService.create(customer);
    else {
      customer.id = this.id;
      this.customerService.update(customer);
    }

  }

  // cancel() {
  //   this.router.navigate(['customers', 'list']);
  // }

  // save() {
  //   this.customerService.update(this.customer);
  //   this.router.navigate(['customers', 'list']);
  // }

  emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const email: string = control.value;
      if (email && email.indexOf('@ada.com') === -1) {
        return { 'invalidEmailAda': true };
      }
      return null;
    };
  }
}