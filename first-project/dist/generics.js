"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Max' }, { age: 30 });
console.log(mergedObj.age);
function countAndPrint(element) {
    let descText = 'got no value';
    if (element.length === 1) {
        descText = `got 1 element`;
    }
    else if (element.length > 1) {
        descText = `Got ${element.length} elements`;
    }
    return [element, descText];
}
console.log(countAndPrint(['Hi there!']));
function extractAndConvert(obj, key) {
    return 'value: ' + obj[key];
}
console.log(extractAndConvert({ name: 'max' }, 'name'));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('max');
textStorage.addItem('manu');
textStorage.removeItem('max');
console.log(textStorage);
const numberStorage = new DataStorage();
function createCourceGoal(title, description, date) {
    const courceGoal = {};
    courceGoal.title = title;
    courceGoal.description = description;
    courceGoal.completeUntil = date;
    return courceGoal;
}
const names = ['max', 'anna'];
