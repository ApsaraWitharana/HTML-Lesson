let box = document.getElementById('box')
console.log(box)

//1, Inner HTML
//typeof - type ek gnne veriable eke 
// e tiyen content ek tmyi pennanne -- allagtta eliment eke athule tiyena inner html ek tmyi gnne
//print empty string 
console.log(box.innerHTML)

//box.innerHTML= "hellow"
box.innerHTML = "<span>set inner html</span>"

console.log(box.innerHTML)

//2.text content - not add to tags only add textcontent return to textcontent Excluding html tags
console.log(box.textContent)
box.textContent = 'sachini apsara'
console.log(box.textContent)

//3.Innter Text --ssame as textcontent ,but innertext shows as DOM renders  while text content shows only the textual content
console.log(box.innerText)
box.innerText = 'ruviii'
console.log(box.innerText)

//4. Applying styless
 let image = document.getElementById('image')
 console.log(image)
 image.style.width='400px'
 image.style.height = '400px'

 //5.setAttributes
 //src,alc.

 image.setAttribute('src','/assets/Image/roce image.jpeg')


//6.classList - Allows You to main  class on a eleiment  //api allagen inn eliment eke class tik monada kiyl tamyi meken pennanne
console.log(box.classList)
box.classList.add('aadd')
box.classList.add('aaa')
console.log(box.classList)


box.classList.remove('aaa')
console.log(box.classList)
//replace- nam wens krnna
box.classList.replace('aaa','dddd')
console.log(box.classList)

//7.append & appendchild  -- div ekkk html hdnne ntuw hdnna
let parentdiv = document.createElement('div')
box.append(parentdiv)

//div ekk atule tw div ekk set krann
let childDiv = document.createElement('div')
//attribute applied
childDiv.setAttribute('add','mew')
box.append(childDiv)

//8.remove & removechild
//child witarak ayin krann
parentdiv.removeChild(childDiv)
parentdiv.remove()




