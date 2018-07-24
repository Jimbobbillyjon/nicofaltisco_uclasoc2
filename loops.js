var animals = ["zebra", "lion", "tiger","elephant","monkey"];
var largestAnimalsName = animals.filter(animal => animal.length > 4);
var professions = ["doctor", "lawyer","programmer","ballerina"];
var capitalize = professions.map(profession => profession.toUpperCase());
var students = ['Emma', 'Yang', 'PepeJ', 'PepeV', 'Ethan', 'Alison', 'Nico', 'Brian', 'Uli', 'Caleb', 'Rawad', 'Hassan', 'Yueyang', 'Lyla'];
var awesome = students.map(student => student + " is awesome");
var numbers = [12,457,52,16];
var total = numbers.reduce((memo,CurrentValue) => memo + CurrentValue, 0);

var app = student.forEach(function(student){
    `${student} ismakinganApp`
});