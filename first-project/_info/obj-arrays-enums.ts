
function add(num1: number, num2: number) {
  return num1 + num2;
}

const number1 = 5,
      number2 = 2.5

 console.log(add(number1, number2));

enum Status { ADMIN, READ_ONLY, AUTHOR };

 const person: {
     name: string;
     age: number;
     hobbies: string[]; // array of strings
     role: [number, string]; // tuple
     status: number
 } = {
     name: 'Anastasiia',
     age: 23,
     hobbies: ['sports', 'painting'],
     role: [2, 'developer'],
     status: Status.ADMIN
 }

 person.role.push('admin')

for (const hobbie of person.hobbies) {
    console.log(hobbie)
}

