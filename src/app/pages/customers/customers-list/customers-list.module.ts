// customers-list.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomersListComponent } from './customers-list.component';
import { CustomersEditComponent } from '../customers-edit/customers-edit.component';

@NgModule({
  declarations: [CustomersListComponent, CustomersEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'customers-list', component: CustomersListComponent },
      { path: 'customers-edit/:id', component: CustomersEditComponent },
    ])
  ],
})
export class CustomersListModule {}
