import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { EmployeeService } from 'src/app/services/EmployeeService';
import Employee from 'src/app/models/Employee';
import { DepartmentService } from 'src/app/services/DepartmentService';
import Department from 'src/app/models/Department';


@Component({
  selector: 'employee',
  templateUrl: './employee.html'
})
export class EmployeeComponent implements OnInit {

  employees: any;
  departments: Department[];
  updateEmployee: any;
  updateEmployeeId: number;
  public isRecordEditable :Boolean;
  public isCreateEmployee : Boolean;

  postEmployee: Employee = new Employee();

  constructor(private route: ActivatedRoute, private backendService: EmployeeService, private departmentService: DepartmentService, private router: Router) { 
    this.isRecordEditable = false;
    this.isCreateEmployee = false;
    this.updateEmployeeId = 0;
    this.departments = [];
    this.postEmployee.departmentId = new Department
  }

  ngOnInit(): void {
    this.reloadData();
    this.isRecordEditable = false;
  }

  reloadData(): void {
    this.employees = this.backendService.getAllEmployees();
    this.departmentService.getAllDepartments().subscribe( departments => {
      this.departments = departments as Department[]
    });
  }

  handleSubmit(): void {
    
    console.log(this.postEmployee.departmentNumber);
    console.log(this.postEmployee.departmentId.number);
    this.postEmployee.departmentId.number = this.postEmployee.departmentNumber;

    console.log(this.postEmployee);

    debugger;

    this.backendService.postEmployees(this.postEmployee);
    window.location.reload();
  }

  deleteEmployee(employeeId: number): void {
    window.alert("Are you sure want to delete Employee: " + employeeId);
    this.backendService.deleteEmployees(employeeId);
    window.location.reload();
  }

  showUpdateEmployee(id: number): void {
    console.log("Employee number is " + id);
    this.isRecordEditable = true;
    this.isCreateEmployee = false;
    this.backendService.getEmployees(id).subscribe( data => {
      this.updateEmployee = data
    });
    console.log(this.updateEmployee);
    this.updateEmployeeId = id;
    //this.updateEmployee.departmentNumber = id;
    this.departmentService.getAllDepartments().subscribe( departments => {
      this.departments = departments as Department[]
    });
   // console.log(this.updateEmployee.departmentId);
    //console.log(this.updateEmployee.value);
  }

  handleUpdate(): void {
    
    console.log("employee will be updated " + this.updateEmployeeId);
    this.updateEmployee.departmentId.number = this.updateEmployee.departmentNumber;
    console.log(this.updateEmployee.departmentNumber);
    console.log(this.updateEmployee.departmentId.number);
    console.log(this.updateEmployee);
    
    this.backendService.putEmployees(this.updateEmployeeId, this.updateEmployee);
    window.location.reload();
  }

  public showCreateEmployee():void{
    this.isCreateEmployee = true;
    this.departmentService.getAllDepartments().subscribe( departments => {
      this.departments = departments as Department[]
    });
  }

  public cancelCreateEmployee():void{
    this.isCreateEmployee = false;
    this.isRecordEditable = false;
  }

}
