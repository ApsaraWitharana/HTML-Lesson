
//Type of funcitions

//1.Name Funcitions

function addNumber(num1,num2){

    return num1+num2

}
console.log(addNumber(10,20))

console.log("====================")

//2,Anonnimous funcions -namk ne  -- funcions ek coll kragnn ona hinda ek variable ekkkata assion kra gnnawa

 let multiplayNumber = function(num1,num2){
    return num1*num2
}

console.log(multiplayNumber(10,20))
console.log("====================")

//3.Arrow funcions  funcions key word ek ayin kral ek wenuwata => danawa 
 // arrow funcion ek atule ek line ekk witara nm body ek {} ayin krann puluwan return key ekt ayin krann ona

 //1.only one line in the arrow funcions
let subNumberss = (num1,num2) =>   num1-num2
    console.log("Inside arrow funcions only one line")
   

//2.namefuncions
let subNumbers = (num1,num2) =>{
    console.log("Inside arrow funcions")
    return num1-num2
}

console.log(subNumbers(20,10))
console.log("====================")


//4.Constructor function  only difine one Constructor (single concrructor)

function Student(name,address,email){

    this.name = name
    this.address= address
    this.email=email


}

let student1 = new Student("duvi","galle","duvi@111")

console.log(student1)

console.log("====================")

//5.collback funcions  // funcion ekk unath coll krann puluwa

function myFuncions(abc){
// console.log(abc)
//colling funcion
// abc()

console.log(typeof abc)

if(typeof abc === "function"){
    abc()
}else if(typeof abc === "object")

//

}

// literale
let person = {
     name:"sachini",
     address:"galle"

     
}

let numbersArray = [2,3,4,5,5]

function secondFuncions(){
   console.log("secondFuncion collback")
}
// myFuncions(numbersArray)
myFuncions(person)

myFuncions(secondFuncions)

console.log("====================")

//6.recursive funcions

function factorial(n){
    if(n === 0){
        return 1
    }

    return n* (factorial(n-1))

}

console.log(factorial(5))
