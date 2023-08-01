import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home/home';
import { DepartmentComponent } from './components/department/department';
import { EmployeeComponent } from './components/employee/employee';
import { LoginPageComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';

const routes: Routes = [
  { path: "", component: LoginPageComponent },
  { path: "login", component: LoginPageComponent },
  { path: "home", component: HomePageComponent },
  { path: "register", component: RegisterComponent },
  { path: "department/list", component: DepartmentComponent },
 // { path: "employee/add", component: EmployeeComponent },
 // { path: "employee/update/:id", component: EmployeeComponent },
  { path: "employee/list", component: EmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
