//01/27/2024

//1.setTimeout

// setTimeout(callback,1000)
//apita puluwan dele ekk denn me funcion ek denn me deele eken passe

// setTimeout(()=>{
//     console.log('usng arrow funcion Hellow ..waiting timeperiade')
// },3000)

// let timeout = setTimeout(function(){
//     console.log('Annonimes Hellow ..waiting timeperiade')
// },3000)

// clearTimeout(timeout)

//2.setInterval
// setInterval(callback,interval)
//arrowfntion

let interval=setInterval(() => {
    console.log('arrow funcion -- Heyyyyy')
}, 1000)

clearInterval(interval)

// second outsite eke funcion ek define kran ek
let greet = ()=>{
    console.log('hiii funcion define the outsite')
}
//funcion hoiste krnn ona nm funcion keyword ekt ekk define krann ona
let interval2 = setInterval(greet,1000
    
);

