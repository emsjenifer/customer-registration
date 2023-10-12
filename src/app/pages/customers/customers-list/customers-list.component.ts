// customers-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../model/customer';
import { CustomerService } from '../../../services/customer.service'; 

@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html',
    styleUrls: ['./customers-list.component.sass']
})
export class CustomersListComponent implements OnInit {
    customers: Customer[] = [];

    constructor (private customerService: CustomerService){

        this.customers = customerService.getList()
    
      }

    ngOnInit(): void {}

    editarCliente(customer: Customer) {
        // Implemente a lógica de edição aqui
    }

    excluirCliente(customerId: number) {
        // Implemente a lógica de exclusão aqui
    }
}
