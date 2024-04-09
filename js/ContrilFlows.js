// Javascript Control Flowa

// ===1. if/else/ eles if

let number = 0;
if(number<0){
    console.log('number is posituve:'+number)
}else if(number>0){
     console.log('number is nagative:'+number)
}else{
     console.log('number zeroo:'+number)
}


//--2. switch 
let numberr = 1
let dayName;

    switch(numberr) {
        case 1:
            dayName = "Sunday"
           
            break;
        case 2:
             dayName ="Monday"
            break;
        case 3:
             dayName ="Tusday"
            break;
        case 4:
             dayName ="Thasday"
            break;
        default:
             dayName ="Friday"
    }

console.log('day name:', dayName)
console.log("================")

// 1 for
for(let i=0; i<=3;i++){
 console.log(i)
}

console.log("================")
//2.while
let i=0;
while(i<5){
    console.log(i)
    i++
}

console.log("================")
//do-while

let j=0;
do{
    console.log(j)
    j++
    
}while(j<5);

console.log("================")
//====4.break

for(let n=0; n<=5; n++){
    if(n==4){
   break
    }
    console.log(n)
    

}


console.log("================")

//5.continue
for(let n=0; n<=5; n++){
    if(n===4){
   continue
    }
    console.log(n)
    

}

//Important

//== VS ===  (double // == or // ===  chack value and  variable type // but == note chack variable type chack only value)

let num =5
if(num ==5){
    console.log("hii")
}

console.log("======== double equele========")
let num1 ="5"
if(num1 == 5){
    console.log("hii")
}

console.log("======== threple equle // prinet same type  ========")
let num2 = "5"
if(num2 === 5){
    console.log("hii")
}



