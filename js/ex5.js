
//task-01

// let body = document.querySelector('body')

// let users =[{firstName :'sachi', lastName:'Apsara',age:22},
//             {firstName :'duvi', lastName:'Thathssara',age:22},
//         {firstName :'Anu', lastName:'Apsara',age:22}];

//  let singleUser = users.map((user)=>{
//     let fullName = user.firstName + '' + user.lastName;
//     // return
//     // <h3 class ='name'>${fullName}</h3>
//     // <p class = 'age'>${user.age}</p>

//  }); 
 
// body.innerHTML = singleUser;


//task-02

//  let numbers = [2,4,6,8,10];

//  function square(number){
//     return number*number;

//  }

//  let square_nos = numbers.map(square);
//  console.log(square_nos);

 //out put - [4,16,36,64,100]


 // taks-03

//  const marks = {history:80,English:70,Maths:100,Science:90};
//  let newMarks = Object.values(marks).map((marks)=> marks+5);

//  console.log(newMarks)


 //task -04

 const date = new Date('2024-04-29');
 const months = ['January','February','March','April','May','June','July','August','September','Octomber','November','December']
 const days = ['Sunday','Monday','Tustay','Wednesday','Thursday','Friday','Saturday'];
 date.getFullYear();
 months[date.getMonth()];

 console.log(date)
 console.log(months)




