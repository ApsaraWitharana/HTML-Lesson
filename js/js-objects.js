// Students Students=new Students();
//{} = define the object using js
//{ athule value define kradi denne : ek = newe  ,,,// => ; ek wenuwata , denne}

//let student ={
//----literal widiyata hadana object ekk
//}
let students ={} 
console.log("Students: ", students)
console.log("Type of student: ",typeof students)

students = {
    firstName:"sachini",
    lastName:"apsara",
    email:"asachini11@gamil.com",
    phoneNumber:"07113323232",
    age:23,
    isRegistered:true
}

console.log("Type of Student: ", students)

//dot 
console.log("Student Email: ", students.email)

//ob-bracate
console.log("Student Email: ", students ["email"])

//object wl value wenas kranne
//using dot notation
students.age =20;
console.log("Student age: ", students.age)
console.log("Student: ", students)

//using bracete notation
students["age"] =22;
console.log("Student age: ", students.age)
console.log("Student: ", students)

//==============================

console.log('=============================')

let person ={
    //keyss
     name:"kamal",
     age:20,
     phone:'077565566',

     
     //arryfuncion
      greet1:()=>{
        console.log("Good Morning!!")
     }
     //annonimaus fun

    //  greet:function(){
    //     console.log("Good Morning!!")
    //  }
}

console.log(person.greet1()

)

console.log('=============================')

//Iterating over properting
// keyvaluepayars aragne

for(let key in person){
    console.log(key+' :' + person[key])

}


