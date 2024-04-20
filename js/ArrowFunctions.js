
// function addNumbers(num1,num2){
//     return num1+num2
// }

// //Arrow functions
// // using currly bracket or note curlybracket dnne code gn wadi nm
// const addNumbersArrowFunc = (num1,num2) =>{
//     return num1+num2

// }

// const sayHallow =() => {
//    console.log("heee")
// }


// console.log(addNumbers(10,20))
// console.log(addNumbersArrowFunc(10,20))
// // console.log(sayHallow())
// sayHallow()



//convertion name funcion to arrow funcions  

let subNumbers = (num1,num2) =>{
    console.log("Inside arrow funcions")
    return num1-num2
}

console.log(subNumbers(20,10))

console.log("====================================")

//converting annonymous funcion to arrow funcion

 let multiplayNumber =(num1,num2)=>
    num1*num2

console.log("====================")

//syntax wise this is possible  but don't do this  not suported to this,new key word wen using arrow function  
//constorter funciong

let Student= (name,address,email) =>{

    this.name = name
    this.address= address
    this.email=email


}

let student1 = new Student("duvi","galle","duvi@111")

console.log(student1)

console.log("====================")

//Arrow funcions (ek parameter nm ayin krann puluwan nattanm tiyenn one)

let myFuncions =abc=>{

 abc()

}

let secondFuncions=()=>{
   console.log("secondFuncion collback")
}


myFuncions(secondFuncions)