// storing and creating objects; Example 1:
interface item {
  name: string;
  students: number;
}

let class1: item = {
  name: "Class One",
  students: 20,
};
let class2: item = {
  name: "Class Two",
  students: 30,
};
console.log(`Class: ${class1.name}, Number of students: ${class1.students}`);
console.log(`Class: ${class2.name}, Number of students: ${class2.students}`);

// storing and creating objects; Example 2:
interface areaPopulation {
    Area: string;
    Population: number;
};
let Area1: areaPopulation = {
    Area: "Karachi",
    Population: 20000000
};
let Area2: areaPopulation = {
    Area: "Islamabad",
    Population: 10000000
};
console.log(`City Name: ${Area1.Area}, People living here: ${Area1.Population}`);
console.log(`City Name: ${Area2.Area}, People living here: ${Area2.Population}`);
