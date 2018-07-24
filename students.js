var students = [
{ id: 0, firstName: 'Haochen', lastName: 'Tian', nickName: 'null', age: 'null', location: 'null', favoriteAnimal: 'null', favoriteSong: '', birthday: '2-4', github: 'https://github.com/' },
{ id: 1, firstName: 'Nico', lastName: 'Fultisco', nickName: 'Jim', age: 17, location: 'California', favoriteAnimal: 'dog', favoriteSong: 'null', birthday: '2-4', github: 'https://github.com/https://github.com/Jimbobbillyjon' },
{ id: 2, firstName: 'Emma', lastName: 'Press', nickName: 'null', age: 17, location: 'New York', favoriteAnimal: 'elephant', favoriteSong: 'Sunday Morning', birthday: '12-17', github: 'https://github.com/emmapress' },
{ id: 3, firstName: 'Hassan', lastName: 'Fawaz', nickName: 'null', age: 16, location: 'Beirut Lebanon', favoriteAnimal: 'Black Panther', favoriteSong: 'Farts', birthday: '7-11', github: 'https://github.com/Hassanfawaz1' },
{ id: 4, firstName: 'Rawad', lastName: 'Saliba', nickName: 'null', age: 16, location: 'Lebanon', favoriteAnimal: 'wolf', favoriteSong: 'null', birthday: '5-4', github: 'https://github.com/' },
{ id: 5, firstName: 'Ulises', lastName: 'Rico', nickName: 'Uli', age: 16, location: 'Chicago', favoriteAnimal: 'penguin', favoriteSong: 'In my feelings', birthday: '12-22', github: 'https://github.com/UlisesRico' },
{ id: 6, firstName: 'Alison', lastName: 'Wong', nickName: 'null', age: 16, location: 'Malaysia', favoriteAnimal: 'Dogs', favoriteSong: 'The Middle', birthday: '7-16', github: 'https://github.com/alison' },
{ id: 7, firstName: 'Lyla', lastName: 'El Amrawy', nickName: 'Lola', age: 17, location: 'Cairo Egypt', favoriteAnimal: 'dogs', favoriteSong: 'null', birthday: '3-22', github: 'https://github.com/lylaelamrawy' },
{ id: 8, firstName: 'Caleb', lastName: 'Crenshaw', nickName: 'null', age: 16, location: 'Miami Florida', favoriteAnimal: 'tiger', favoriteSong: 'Hurt Me', birthday: '8-1', github: 'https://github.com/calebcrens' },
{ id: 9, firstName: 'Dorian', lastName: 'Martin', nickName: 'Ethan', age: 17, location: 'Miami Florida', favoriteAnimal: 'wolf', favoriteSong: '90210', birthday: '10-27', github: 'https://github.com/ethanmartin7204' },
{ id: 10, firstName: 'YiYang', lastName: 'Cai', nickName: 'Yang', age: 17, location: 'null', favoriteAnimal: 'cat', favoriteSong: 'null', birthday: '6-8', github: 'https://github.com/https://github.com/c-yiyang' },
{ id: 11, firstName: 'Yueyang', lastName: 'Gu', nickName: 'null', age: 17, location: 'Shanghai', favoriteAnimal: 'cat', favoriteSong: 'Heathens?', birthday: '10-17', github: 'https://github.com/g-yueyang' },
{ id: 12, firstName: 'Vicente', lastName: 'Speroni', nickName: 'Pepe V', age: 17, location: 'Argentina', favoriteAnimal: 'dogs', favoriteSong: 'null', birthday: '5-21', github: 'https://github.com/pepespe2105' },
{ id: 13, firstName: 'Jose', lastName: 'Jimenez', nickName: 'Pepe J', age: 16, location: 'Lima Peru', favoriteAnimal: 'eagle', favoriteSong: 'Me Niego', birthday: '9-9', github: 'https://github.com/pepe10' },
{ id: 14, firstName: 'Ying-Chi', lastName: 'Chen', nickName: 'Brian', age: 16, location: 'Boston', favoriteAnimal: 'dogs/llamas', favoriteSong: 'Unity', birthday: '5-27', github: 'https://github.com/' }
]

students.shift()

var awesome = students.map(student => `${student.firstName} is getting an A+`);

function sortBdaysByMonth(studentArr){
  var bdays = studentArr.map(student => student.birthday.split('-'));

  var sortedBdays = bdays.sort(function(a,b){
    return a[0] - b[0];
  });

  var finalSortedBdays = sortedBdays.map(bday => bday.join('-'));
  return finalSortedBdays
}

sortBdaysByMonth(students)
