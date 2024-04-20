
// function calculateGrade(score) {
//     if (score >= 90-100) {
//         return "A+";
//     } else if (score >= 80-89) {
//         return "A-";
//     } else if (score >= 75-79) {
//         return "A";
//     } else if (score >= 65-74) {
//         return "B";
//     } else if (score >= 55-64) {
//         return "C";
//     } else if (score >= 35-54) {
//         return "S";
//     } else if (score >= 35) {
//         return "F";
//     } else if(score >=-0){
//         return "Invalid Mach";
//     }
// }

// function student(name,marks){
//     this.name = name
//     this.marks = marks

// }

// let student1 = new Student("sachini")

// console.log(student1,'Grade For ${score}, Marks ${grade}.`);
// const name = Student(name)


// const score = 85;
// const grade = calculateGrade(score);


let Student = [
  "kamal",
  "Namal",
  "supun",
  "Niaml",
  "umaya",
  "Chalani",
  "kasuni",
  "saman",
  "kamani",
];
let marks = [92, 73, 78, 100, 12, 38, 59, 62, -10];
let grade;
let mark = [];
grades(Student, marks);

function grades(Student, mark1) {
  for (let i = 0; i < Student.length; i++) {
    if (mark1[i] >= 90) {
      grade = "A+";
    } else if (mark1[i] >= 80) {
      grade = "A-";
    } else if (mark1[i] >= 75) {
      grade = "A";
    } else if (mark1[i] >= 65) {
      grade = "B";
    } else if (mark1[i] >= 55) {
      grade = "C";
    } else if (mark1[i] >= 55) {
      grade = "C";
    } else if (mark1[i] >= 35) {
      grade = "S";
    } else if (mark1[i] > 0) {
      grade = "F";
    } else grade = "Invalid mark";
    mark.push(grade);
  }
  getStudent(Student, mark1, mark);
}

function getStudent(Student, mark2, grade2) {
  for (let i = 0; i < 10; i++) {
    console.log(Student[i],"'s Grade for", mark2[i], "marks", grade2[i]);
  }
}
