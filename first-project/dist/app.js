"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('it depatment - id: ' + this.id);
    }
}
const employee1 = Department.createEmployee('Nastya');
console.log(employee1);
const it = new ITDepartment('47', ['Ana', 'Ars', 'Jackie']);
it.addEmployee('Max');
it.addEmployee('Manu');
it.describe();
it.printEmployeeInformation();
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('no reports found');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('please pass in a valid value');
        }
        this.addReport(value);
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }
    describe() {
        console.log('accounting depatment - id: ' + this.id);
    }
    addEmployee(employee) {
        if (employee === 'max') {
            return;
        }
        else {
            this.employees.push(employee);
        }
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log('accounting', accounting);
console.log('accounting2', accounting2);
accounting.mostRecentReport = 'year end report';
accounting.addReport('something went wrong...');
console.log(accounting.mostRecentReport);
accounting.printReports();
accounting.addEmployee('max');
accounting.addEmployee('manu');
accounting.printEmployeeInformation();
