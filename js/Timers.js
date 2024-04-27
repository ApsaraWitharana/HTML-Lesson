//01/27/2024

//1.setTimeout

// setTimeout(callback,1000)
//apita puluwan dele ekk denn me funcion ek denn me deele eken passe

// setTimeout(()=>{
//     console.log('usng arrow funcion Hellow ..waiting timeperiade')
// },3000)

let timeout = setTimeout(function(){
    console.log('Annonimes Hellow ..waiting timeperiade')
},3000)

clearTimeout(timeout)

//2.setInterval