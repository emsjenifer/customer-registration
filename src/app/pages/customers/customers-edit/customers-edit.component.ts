import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../model/customer';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../../services/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: '[app-customers-edit]',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.sass']
})
export class CustomersEditComponent implements OnInit {

  id: string = 'newCustomer';
  customers: FormGroup

  constructor(private customerService: CustomerService, private route: ActivatedRoute, private router: Router, private toastr: ToastrService) {
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
      const currentCustomer = this.customerService.getById(this.id);

        this.customers = new FormGroup({
          name: new FormControl(currentCustomer?.name,[Validators.required, Validators.minLength(3)]),
          birthDay: new FormControl(currentCustomer?. birthDay,[Validators.required]),
          email: new FormControl(currentCustomer?.email,[Validators.required, Validators.email, this.emailValidator()])
        })
    }
  }

  async onSubmit(customer:Customer) {
    try {
      if (this.id === 'newCustomer') {
        await this.customerService.create(customer);
        this.toastr.success('Cliente cadastrado com sucesso!', 'Sucesso');
      }
      else {
        customer.id = this.id;
        await this.customerService.update(customer);
        this.toastr.success('Dados atualizados com sucesso!', 'Sucesso');
      }
      this.router.navigate(['customers', 'list']);
    } catch (error) {
      this.toastr.error('Erro ao salvar o cliente.', 'Erro');
    }
  } 

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