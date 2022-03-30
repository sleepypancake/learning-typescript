abstract class Department {
    // private name: string;
    protected employees: string[] = [];

    constructor(public id: string, public name: string) {
        // this.name = n
    }

    static createEmployee(name: string) {
        return { name }
    }

    abstract describe(this: Department): void;
                                     
    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {                   
        console.log(this.employees.length)
        console.log(this.employees)
    }
}


class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {                                                                                                                                                                                                                                                                                                                                                                                             
        super(id, 'IT')
    }

    describe(this: Department): void {
        console.log('it depatment - id: ' + this.id)
    }
}

const employee1 = Department.createEmployee('Nastya')
console.log(employee1)

const it = new ITDepartment('47', ['Ana', 'Ars', 'Jackie']);

it.addEmployee('Max')
it.addEmployee('Manu')
it.describe() 
it.printEmployeeInformation()

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if(this.lastReport) {
            return this.lastReport
        }
        throw new Error('no reports found')
    }

    set mostRecentReport(value) {
        if (!value) {
            throw new Error('please pass in a valid value')
        }
        this.addReport(value)
    }

    private constructor (id: string, private reports: string[]) {
        super(id, 'accounting')
        this.lastReport = reports[0]
    }

    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    describe(this: Department): void {
        console.log('accounting depatment - id: ' + this.id)
    }

    addEmployee(employee: string): void {
        if (employee === 'max') {
            return
        }else {
            this.employees.push(employee)
        }
    }

    addReport (text: string) {
        this.reports.push(text)
        this.lastReport = text

    }

    printReports() {
        console.log(this.reports)
    }
}

// const accounting = new AccountingDepartment('76', [])
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log('accounting', accounting)
console.log('accounting2', accounting2)

accounting.mostRecentReport = 'year end report'
accounting.addReport('something went wrong...')
console.log( accounting.mostRecentReport)
accounting.printReports()
accounting.addEmployee('max')
accounting.addEmployee('manu')
accounting.printEmployeeInformation()

// const accountingCopy = { name: 's', describe: accounting.describe }
// accountingCopy.describe()
