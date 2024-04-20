

let student =[
    {name:'ama'
    ,marks:98
},
   {name:'anu'
    ,marks:67
},
   {name:'kanua'
    ,marks:45
},
   {name:'duvi'
    ,marks:55
},
   {name:'savia'
    ,marks:70
},
   {name:'madu'
    ,marks:36
},
   {name:'amass'
    ,marks:100
},
   {name:'amakk'
    ,marks:86
},
   {name:'kkama'
    ,marks:34
},
   {name:'ajjma'
    ,marks:-9
}

]

for (let i = 0; i < student.length; i++) {
    // const element = array[index];
    console.log(getStudentGrade(student[i].name,student[i].marks) )
    
}
function calculateGrade(marks){

    if(marks>=90 && marks<=100){
        return 'A+'
    }
    else if(marks>=80 && marks<=90){
        return 'A-'
    }
    else if(marks>=65 && marks<=75){
        return 'B'
    }
     else if(marks>=55 && marks<=65){
        return 'C'
    }
    else if(marks>=35 && marks<=55){
        return 'S'
    }
    else if(marks>=0 && marks<=35){
        return 'F'
    }

    else{
        return'Invalide marks'
    }

}
function getStudentGrade(studentname,marks){
return studentname +'\'s grade for '+marks+":"+calculateGrade(marks)

}

