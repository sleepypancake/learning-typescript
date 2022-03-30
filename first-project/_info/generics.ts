// generics


//BUILT IN GENERICS

// const names: Array<string> = ['max', 'manuel']; // string[]
// // names[0].split('')

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('this is done')
//     }, 2000)
// })

// promise.then(data => {
//     data.split('')
// })

// GENERIC FUNCTIONS

function merge <T extends object, U extends object>(objA: T, objB: U){
    return Object.assign(objA, objB)
}

const mergedObj =  merge({name: 'Max'}, {age: 30})
console.log(mergedObj.age)

interface Lengthy {
    length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string]  {
    let descText = 'got no value'
    if (element.length === 1) {
        descText= `got 1 element`
    } else if (element.length > 1) {
        descText = `Got ${element.length } elements`
    }
    return [element, descText]
}

console.log(countAndPrint(['Hi there!']))

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'value: ' + obj[key]
}

console.log(extractAndConvert({name: 'max'}, 'name'))


// GENERIC CLASSES

class DataStorage <T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems() {
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('max')
textStorage.addItem('manu')
textStorage.removeItem('max')
console.log(textStorage)

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>()
// const maxObj = {name: 'max'}
// objStorage.addItem(maxObj)
// objStorage.addItem({name: 'manu'})
// objStorage.removeItem(maxObj)
// console.log(objStorage.getItems())

interface CourceGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourceGoal(
    title: string, 
    description: string,
    date: Date
): CourceGoal {
    const courceGoal : Partial<CourceGoal> = {};
    courceGoal.title = title;
    courceGoal.description = description;
    courceGoal.completeUntil = date
    return courceGoal as CourceGoal;
}

const names: Readonly<string[]> = ['max', 'anna'];
// names.push('manu')