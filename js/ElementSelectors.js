console.log("hiii Good Morning!!!!!!!!!!!!")


//return one value to the browser console

 let calculateButton = document.getElementById('btnCalculate')
 console.log(calculateButton)
 calculateButton.style.backgroundColor='green'
 calculateButton.style.color = 'white'

 // set click button acion

calculateButton.addEventListener('click',()=>{
    console.log('hellow gyess')
})

// set alert 
calculateButton.addEventListener('click',function(){
    alert('hellow gyes welcome1!!')
})
 
let setImage = document.getElementById('imgset')
console.log(setImage)


//class eliments

let setBox = document.getElementsByClassName('box')
console.log(setBox)

//TAG ELIMENTS == nati tag ekk dmmam enna

let gettingOnes =document.getElementsByTagName('h1')
console.log(gettingOnes)

//document query selecters
//class ek dala tiyen mulm ek one nm query selector ek okkom one nm queryselectorALL EK GNN
//1,id

let button = document.querySelector('#btnCalculate')
console.log(button)

//2.class
let div = document.querySelector('.text-div')
console.log(div)

// same name unam enne mulin tiyen ek witryi
let box = document.querySelector('.box')
console.log(box)

//set ekm gnn
let box2 = document.querySelectorAll('.box')
console.log(box2)