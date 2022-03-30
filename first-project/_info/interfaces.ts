/* 
    Interfaces describe objects or function types
    They can't be instantiated and are not compiled, in comparison with classes.
    You can't store or describe arbitary types like union
*/

interface Named {
    readonly name?: string;
    outputName?: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string;
    age = 30;

    constructor(n?: string) {
        if (n) {
            this.name = n
        }
    }

    greet(phrase: string) {
        if (this.name) {
            console.log(phrase + '' + this.name);
        } else console.log('Hi!')
    }
}