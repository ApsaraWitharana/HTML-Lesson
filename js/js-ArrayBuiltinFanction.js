let studentNames = ["Kamal","Amal","Nimal"];
console.log("Student Array :",studentNames)

//Built in -Function  == adala value eken dunn ewa
console.log("==========================")
//1.push-adds one or more elemetnts to the end of arrys

studentNames.push("Duvi")
console.log("Student Array after :",studentNames)
studentNames.push("Sachi")
console.log("Student Array after :",studentNames)

console.log("==========================")

//2.pop -remove last eliment and return the eliiment (last elliment ek ayin kral ek print krgnn ek)

let popedName = studentNames.pop()
console.log("Poped Name :",popedName)
console.log("Student Array after :",studentNames)

console.log("==========================")

//3.shift --remove the first eliment and print the result

let shiftName = studentNames.shift()
console.log("Shift Name :",shiftName)
console.log("Student Array after shift :",studentNames)
console.log("0 Student Array after :",studentNames [0])

console.log("==========================")

//4.unshift -add eliment one or more (eliment one tharamk issrahat dagnn on nm unshift use we lenth ek wadi/index ek reverse we)

studentNames.unshift("Anu","Tharu")
console.log("Student Array after unshifted :",studentNames)

console.log("==========================")

//5. concat -array dekk ekthukaral thawa array ekk hadanawa  new array ekk

let maleName =['Thathsara','Sachindu','Kavindu']
let femaleName = ['Apsara','Sachini','Ruwani']

maleName.concat(femaleName)
console.log(maleName.concat(femaleName))

let friends=maleName.concat(femaleName)
console.log('friends array :', friends)

console.log("==========================")

//6.slice = index ek den eke idan thamayi return wennne // arrya eke thiyen eliment set ekk aragen new array ekkt dagnnawa// return a copy of a po
let fruits =['apple','mango','orange','avacado']
fruits.slice(0)
console.log('fruit Array after slice from 0 index:',fruits.slice(0))
console.log('fruit Array after slice from 0 index:',fruits.slice(1))
console.log('fruit Array after slice from 0 index:',fruits.slice(2))
console.log('fruit Array after slice from 0 index:',fruits.slice(3))

console.log("==========================")
//7. splice -
let fruitsArray =['apple','mango','orange','avacado']
fruitsArray.splice(2,1,'mangoose')  //2- point wena than dan index ekt --1= index ek set wen eke thana
console.log('fruitArray after splice:',fruitsArray)

console.log("==========================")

//8.reverse --eliment tik dana piliwelata ntuwa rever wel printe we
let letters =['a','d','s','t']
letters.reverse()
console.log('Letter Array:', letters)
console.log('Reverse Array:', letters.reverse())

//9.sort -tiyen piliwelata
let numbers = [10,30,20,40,60]
console.log('Numbers Array:', numbers)
// asending
console.log('NumberArray sort:', numbers.sort())
//descending
console.log('NumberArray sort:', numbers.sort().reverse())

let  textingArray =['Ama','Ruwi','Sachi',200]
console.log('textingArray:', textingArray)
console.log('textingArray 0 index:', typeof textingArray[0])
console.log('textingArray 3 index:', typeof textingArray[3])




