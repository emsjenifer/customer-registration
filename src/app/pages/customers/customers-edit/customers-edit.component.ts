import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.sass']
})
export class CustomersEditComponent {
  customer = {
    id: '',
    nome: '',
    dataNascimento: '',
    email: '',
    sexo: ''
  };

  cancelar() {
    // Lógica para cancelar a ação (por exemplo, redirecionar para outra página).
  }

  salvar() {
    // Lógica para salvar os dados (por exemplo, enviar para o servidor).
  }
}
