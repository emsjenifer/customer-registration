import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { CustomersListComponent } from './pages/customers/customers-list/customers-list.component';
import { CustomersEditComponent } from './pages/customers/customers-edit/customers-edit.component';

const routes: Routes = [
  { path:"home/login", component:HomeComponent},
  { path:"customers", component:CustomersComponent},
  { path:"customers/list", component:CustomersListComponent},
  { path:"customers/edit/:id", component:CustomersEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
