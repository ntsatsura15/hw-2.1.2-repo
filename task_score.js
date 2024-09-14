//Расчет среднего балла за домашние задания студента по модулям
let nameStudent = "Nastya";
let surnameStudent = "Tsatsura";

const introScore = 100;
const gitScore = 319;
const jsScore = 605;

let averageMark = (introScore + gitScore + jsScore) / 3;

console.log(
  `The ${nameStudent} ${surnameStudent} average mark is ${averageMark}`
);
