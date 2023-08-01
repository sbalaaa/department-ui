import Department from "./Department";

class Employee {
    employeeId!: number;

    firstName!: string;

    lastName!: string;

    gender!: string;

    age!: number;

    email!: string;

    phoneNumber!: string;

    hireDate!: string;

    salary!: number;

    createdBy!: string;

    departmentId!: Department;

    departmentNumber!: number;
}

export default Employee;
