//Расчет среднего балла за домашние задания студента по модулям
let nameStudent = "Nastya";
let surnameStudent = "Tsatsura";
let shortNameStudent = nameStudent.slice(0, 1);

const introScore = 100;
const gitScore = 319;
const jsScore = 605;

let averageMark = Math.ceil((introScore + gitScore + jsScore) / 3);

console.log(
  `The ${shortNameStudent}. ${surnameStudent} average mark is ${averageMark}`
);
