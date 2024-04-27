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
