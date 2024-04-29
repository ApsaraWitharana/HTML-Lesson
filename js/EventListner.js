//click - event ek --funcion ek argument ek pass krnne  -- event ek threger wen welawt tmyi funcion ek run wennne
document.getElementById('btnAdd').addEventListener('click',function(){
    alert('Added To Catrt')
    // console.log('Added to cart')

})

//02.mouseover event
let mouse = document.getElementById('box')
addEventListener('mouseover',function(){
    console.log('mouseover')
    mouse.style.background = 'red'
})

//03. mouseout event

addEventListener('mouseout',function () {
    console.log('mouseover')
    mouse.style.background ='green'
})


//keydown event

let userNameField = document.getElementById('userName')
userNameField.addEventListener('keydown',(event)=>{
    console.log(event)
    console.log('key doun ' + event.key)
    // console.log('key doun ' + )
    console.log("key doun")
})

//keyoup event
userNameField.addEventListener('keydown',()=>{
    console.log("key up")

})

document.getElementById('myForm').addEventListener('submit',(event)=>{
    event.preventDefault()
    console.log('form submitted')

})
