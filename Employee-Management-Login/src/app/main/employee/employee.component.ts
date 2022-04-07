import { Component, OnInit, ViewChild } from '@angular/core';
import Employees from './employees.json';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';


@Component({ templateUrl: 'employee.component.html' })
export class EmployeeComponent implements OnInit {

    employees: EmployeesJson = Employees;
    displayedColumns: string[] = ['eId', 'eName', 'position', 'jDate'];
    dataSource = new MatTableDataSource(this.employees.employees);
    filterText = '';

    applyFilter(filterValue: string) {
        this.filterText = filterValue.trim();
        this.dataSource.filter = this.filterText.toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

}

export interface EmployeesJson {
    employees: Employee[];
}

export interface Employee {
    eId: number;
    eName: string;
    position: string;
    jDate: string;
}