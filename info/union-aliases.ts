// union type

type Combinable = number | string // type alias

function combine (
    input1: Combinable,
    input2: Combinable, 
    resultConversion: 'as-number' | 'as-text' // union types
) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2
    } else {
        result = input1.toString() + input2.toString()
    }

    return result
}

console.log(combine(5, 7, 'as-number' ))
console.log(combine(5, 7, 'as-text' ))
console.log(combine(5, "7", 'as-text' ))
console.log(combine(5, "7dfrf", 'as-number' ))


type User = {name: string, age: number}

const u1: User ={name: 'Max', age: 23}