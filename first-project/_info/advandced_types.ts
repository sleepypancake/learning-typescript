/* 
    Intersection types allows us to combine other types.

*/

type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee; // Intersection type

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number; // Union type
type Numeric = number | boolean; // Union type

type Universal = Combinable | Numeric; // Intersection type


function add(a: number, b: number): number; // function overloads
function add(a: string, b: string): string; // function overload
function add (a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') { // Type Guard with union types
        return a.toString() + b.toString()
    }

    return a + b;
}

// function overloads

const result = add('Hello', 'world');
result.split('');

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee){
    console.log('Name: ' + emp.name)
    if ('privileges' in emp) { // Type Guard with TS types
        console.log('Privileges: ' + emp.privileges)
    }
    if ('startDate' in emp) { // Type Guard with TS types
        console.log('startDate: ' + emp.startDate)
    }
}

printEmployeeInformation(e1)

class Car {
    drive() {
        console.log('Driving...')
    }
}

class Truck {
    drive() {
        console.log('Drive a truck')
    }

    loadCargo(amount: number) {
        console.log('Loading cargo...' + amount)
    }
}

type Vehicle = Car | Truck;

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
    vehicle.drive()
    if (vehicle instanceof Truck) { // Type Guard with classes
        vehicle.loadCargo(1000)
    }
}

useVehicle(v1)
useVehicle(v2)

// discriminating union

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) { // discriminating union
        case 'bird': 
            speed = animal.flyingSpeed;
            break;
        case 'horse': 
            speed = animal.runningSpeed
    }
    console.log('Moving with speed:' + speed)
}

moveAnimal({type: 'bird', flyingSpeed: 10})

// type casting

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!; // for non-jsx
const userInputElement = document.getElementById('user-input') as HTMLInputElement; // for jsx
userInputElement.value = 'hi there!'



// index properties/types
interface ErrorContainer { // { email: 'Not a valid email', username: 'Must sturt with a character' }
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not valid email',
    username: 'Must sturt with a character'
}

// optional chaining

const fetchedUserData = {
    id: 'u1',
    name: 'somename',
    job: {title: 'CEO', description: 'somecompany'}
}

console.log(fetchedUserData.job && fetchedUserData.job.title); 
console.log(fetchedUserData?.job?.title); // optional chaining for fetched data


// Nullish Coalescing

const userInput = null;

const storedData = userInput || 'DEFAULT' // ?? = is this nullish => use right argument 
console.log(storedData)

const userInput2 = '';

const storedData2 = userInput2 ?? 'DEFAULT' // ?? = is this only null or undefined => use right argument 
console.log(storedData2)