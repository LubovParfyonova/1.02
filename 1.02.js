// Task 1
const number = prompt('Введите число');

let i = 0;
function sumOfNumbers (n) {
     let res = 0;
    for (let i = 1; i <= n; i++) {
       
        res += i;
        
    }
    return res;
}
const res = sumOfNumbers(number);
console.log(res); 

// Task 2

class Student {
    constructor (name, surname, isMale, contacts){
        this.name = name;
        this.surname = surname;
        this.isMale = isMale;
        this.contacts = contacts;
    }
}
class EducationStudent extends Student{
    constructor (name, surname, isMale, contacts, faculty, department){
        super(name, surname, isMale, contacts);
        this.faculty = faculty;
        this.department = department;
    }
    
}

function getFullInfo (obj) {
    return Object.values(obj);
}

const student = new EducationStudent ('Ivan', 'Ivanov', true, '@gmail.com', 'facultet', 'department');
const res2 = getFullInfo(student);
console.log(res2);

 
// Task 3

function getRandomArray (dimention) {
    const random = [];
    
    for (let i = 0; i <= dimention; i++) {
        random.push(Math.round(Math.random() * 25));
    }
    return random;
}
const randomArray = getRandomArray(25);
console.table(randomArray);


const evenIndex = randomArray.filter((element, index) => {
    if (index % 2 === 0){
        return element;
        }
})
console.table(evenIndex);
const evenElement = randomArray.filter(value => value % 2 === 0);
console.table(evenElement); 

function getZeroNums (arr) {
    let i = 0;
    for (let i = 0; i < arr.length; i++) {
        const newArr = [];
        if (arr[i] === 0) {
        newArr.push(i);
    }
    return newArr;
    }
}
const zeroArray = getZeroNums(randomArray);
console.log(zeroArray);




// Task 4

 class Book {
    constructor (author, title, yearPublish, publishingРouse){
        this.author = author;
        this.title = title;
        this.yearPublish = yearPublish;
        this.publishingРouse = publishingРouse;
    }
}
class ElectronicBook extends Book{
    constructor(author, title, yearPublish, publishingРouse, format, electronicNumber) {
        super(author, title, yearPublish, publishingРouse);
        this.format = format;
        this.electronicNumber = electronicNumber;
    }
} 