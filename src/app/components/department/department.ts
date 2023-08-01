import { Component, Directive, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Department from 'src/app/models/Department';
import { DepartmentService } from 'src/app/services/DepartmentService';


@Component({
  selector: 'department',
  templateUrl: './department.html',
})
export class DepartmentComponent implements OnInit {

  departments: any;
  updateDepartment: any;
  public isRecordEditable :Boolean;
  public isCreateDepartment : Boolean;

  postDepartmentForm = this.formBuilder.group<Department>({
    number: 0,
    name: "",
    creatorName: ""
  });

  constructor(private route: ActivatedRoute, private backendService: DepartmentService, private formBuilder: FormBuilder, private router: Router) { 
  
    this.isRecordEditable = false;
    this.isCreateDepartment = false;
  }

  ngOnInit(): void {
    this.reloadData();
    this.isRecordEditable = false;
  }

  reloadData(): void {
    this.departments = this.backendService.getAllDepartments();
  }

  deleteDepartment(id: number): void {
    window.alert("Are you sure want to delete the Department: " + id)
    this.backendService.deleteDepartments(id);
    window.location.reload();
  }

  showUpdateDepartment(id: number): void {
    console.log("Department number is " + id);
    this.isRecordEditable = true;
    this.isCreateDepartment = false;
    this.backendService.getDepartments(id).subscribe( data => {
      this.updateDepartment = data
    });
    //this.departments = this.backendService.getAllDepartments();
    console.log(this.updateDepartment);
    console.log(this.updateDepartment.value);
  }

  handleSubmit(): void {

    console.log("HI");
    console.log(this.postDepartmentForm.value);
    debugger;
      console.log("department will be added");
      this.backendService.postDepartments(this.postDepartmentForm.value);
      window.location.reload();
      //this.router.navigateByUrl("/department/list");

  }

  handleUpdate(): void {
      console.log(this.postDepartmentForm.value);

      console.log("department will be updated " + this.updateDepartment.number);
      this.backendService.putDepartments(this.updateDepartment.number, this.updateDepartment);
      window.location.reload();
      //this.router.navigateByUrl("/department/list");

  }

  public showCreateDepartment():void{
    this.isCreateDepartment = true;
  }

  public cancelCreateDepartment():void{
    this.isCreateDepartment = false;
    this.isRecordEditable = false;
  }

}
