// decorators
// function Logger (constructor: Function) { //decorator function
//     console.log('Logging...')
//     console.log(constructor)
// }

function Logger (logString: string) { // decorator factories
    console.log('Logger Factory')
    return function (constructor: Function) {
        console.log(logString)
        console.log(constructor)
    }
}

function WithTemplate(template: string, hookId: string) {
    return function(constructor: any) {
        console.log('template Factory')

        console.log('rendering template')
        const hookEl = document.getElementById(hookId);
        const p = new constructor()
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name
        }
    }
}
@Logger('LOGGING-PERSON')
@WithTemplate('<h1>My person Object</h1>', 'app')
class Person {
    name = 'max';

    constructor() {
        console.log('creating person obj')
    }
}

const pers = new Person
console.log(pers)


// ---  PROPERTY DECORATORS

function Log(target: any, propertyName: string | Symbol) {
    console.log('property decorator!')
    console.log(target, propertyName)
}
class Product {
    @Log
    title: string;
    private _price: number;

    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error ('invalid price - should be positive!')
        }
    }

    constructor(t: string, p: number) {
        this.title = t
        this._price = p
    }

    getPriceWithTax(tax: number) {
        return this._price * (1 + tax);
    }
}