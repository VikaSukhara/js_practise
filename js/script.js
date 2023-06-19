// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
  
//   const bookTitle = book.title;
//   console.log(bookTitle);



// ////
// Напиши функцію getProductPrice(productName), 
// яка приймає один параметр productName - назва продукту. 
// Функція шукає об'єкт продукту з таким ім'ям (властивість name) 
// в масиві products і повертає його ціну (властивість price). 
// Якщо продукт з такою назвою не знайдений, функція повинна 
// повертати null.

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
// //     { name: "Grip", price: 1200, quantity: 9 },
// //   ];
// // console.log(products)

// //   function getProductPrice(productName) {
// //     for(const product of products){
// //       if(productName === product.name){
// //         return product.price
// //       }
// //     }
// //     return null;
// //   }

// //   console.log(getProductPrice("Radar"))



// const products = [
//   {
//      'name': "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const result = []

//   for ( const product of products){
//     if (product[propName]){
//       result.push(product[propName])
//     }
//   }
// return result  
// }

// console.log(getAllPropValues("name"))

// function test(...args) {

// }

// test(1, 2, 3, 4, 5, 6, 7)

// const arr = [1, 2, 3];

// function foo(a, b, c) {
//   console.log(a, b, c)
// }

// function max(...arr) {
//   let max = 0;
//   for (const iterator of arr) {
//     if(iterator > max) {
//       max = iterator;
//     }
//   }
//   return max;
// }

// foo(arr[0], arr[1], arr[2])
// foo(...arr)
// // const spreadFirstArgs = ...firstArg;
// console.log('==========================================')
// console.log(Math.max(...arr));
// console.log(Math.max(arr));
// console.log('==========================================')
// console.log(max(arr))
// console.log(max(...arr))

// console.log(arr);
// console.log(...arr);
// console.log(arr[0], arr[1], arr[2])
// // const spreadFirstArgs = arr[0], arr[1], arr[2];


// // Change code below this line
// function findMatches( firstArg, arguments ) {
//   const matches = []; // Don't change this line

//   // const spreadFirstArgs = ...firstArg;
// // тобто = 1, 2, 3, 4, 5

//   for(const spredFirstArg of spredFirstArgs){
//     if(spredFirstArg === arguments) {
//       const matches = spredFirstArg;
//     }
//   }
  
//   // Change code above this line
//   return matches;
// }



41


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   }
// }

// console.log(atTheOldToad.getPotions())


// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// ({name, email}) => {

// }

// map(({name}) => name)

// function a(user) {
//   const { name } = user;
// }
// // завдання 17
// const getUserNames = (users) => {
//   return users.map(({name}) => name);
  
// // users.map(user => user.name)
// // return user.name
// };

// const names = users.map(user => user.name);
// console.log(names);

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const names = students.map(student => student.name);
// console.log(names);



// console.log(atTheOldToad.getPotions())




// const getUserNames = users => {
//   users.map(user => user.name)

// // users.flatMap(user => user.name);


// return  users.name
// }


// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];


// const studentsName = students.map(student => {
//   console.log(students);
//   return student.name;
// });

// console.log("studentsName", studentsName);


// const studentsCourses = students.map(student => {
//   console.log(students);

//   return student.courses;
// });
// console.log("studentsCourses", studentsCourses);




// const studentsCourseses = students.flatMap(student => {
//   console.log(students);

//   return student.courses;
// });
// console.log("studentsCourseses", studentsCourseses);


// students.map(student => student.courses);
// console.log(students)

// students.flatMap(student => student.courses);



// const planets = ["Земля", "Марс", "Венера", "Юпітер"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПІТЕР']

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпітер']

// // Оригінальний масив не змінився
// console.log(planets);




// 20


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);

// const uniqueGenres = allGenres.filter((genre, index, books) => books.indexOf(genre) === index);


// const uniqueGenres = allGenres.filter(function (genre) {
// books.indexOf(genre) === genre[i];
// });
// console.log(books);
// console.log(allGenres);
// console.log(uniqueGenres);


// 21

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks);
// // console.log(booksByAuthor);


// 22

// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]
// // const getUsersWithEyeColors = users => users.eyeColor(user => user.name);

// // const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);
    
// // const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color)


// // console.log(getUsersWithEyeColor(users, "blue"));


// const getUsersWithAge = (users, minAge, maxAge) => {
//   users.filter(user => user.age  > minAge &&  user.age  < maxAge)
 
// };


// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]


// const getUsersWithAge = (users, minAge, maxAge) => {
//   users.filter(user => user.age >= minAge && user.age <= maxAge)
//  return getUsersWithAge;
// };

// console.log(getUsersWithAge)



// 24

// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]



// Доповни функцію getUsersWithFriend(users, friendName) таким чином, 
// щоб вона повертала масив користувачів, у яких є один з ім'ям 
// в параметрі friendName. 
// Масив друзів користувача зберігається у властивості friends.

// const getUsersWithFriend = (users, friendName) => {return users.filter(user => user.friends.includes(friendName))};
  
// console.log(getUsersWithFriend(users, "Goldie Gentry"))



// 25
users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
]

// Доповни функцію getFriends(users) таким чином, 
// щоб вона повертала масив друзів всіх користувачів (властивість friends). 
// У декількох користувачів можуть бути однакові друзі, 
// зроби так, щоб масив, що повертається, не містив повторень.


// const getFriends = (users) => {
   
//   const getFriendsArray = users.flatMap(user => user.friends);
//   const unique = getFriendsArray.filter((friend, index, arr) => arr.indexOf(friend) === index);

//   return unique
// };


// console.log(getFriends(users))


// 26
// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]

// Доповни функцію getActiveUsers(users) таким чином, 
// щоб вона повертала масив активних користувачів, 
// значення властивості isActive яких - true.

// const getActiveUsers = (users) => {
//    return users.filter(user => user.isActive) 

// };


// console.log(getActiveUsers(users));





// // 27
// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]
// Доповни функцію getInactiveUsers(users) таким чином,
// щоб вона повертала масив неактивних користувачів, 
// значення властивості isActive яких - false.



// const getInactiveUsers = (users) => {
//   console.log()
//   return users.filter(user => !user.isActive);
// };

// ===



// const getInactiveUserss = function(users) {
//   return users.filter(function(user) {
//     return !user.isActive
//   });
// };

// console.log(getInactiveUserss(users))



// !!!!!!!!
// Якщо після стрілочкної функції є:

// - { то всередині пишемо return, бо 1. треба щоб функція щось повертала
//                                     2. {} пишемо коли у функції велике тіло


// Якщо стрілочна функція на один рядок(вона мала), то {} не потрібні, також return не треба, бо воно повертає автоматично                                   


// if(true) 
//   console.log();

// if(true) {
//   console.log();
//   console.log();
// } 


// 35

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];


// const totalAveragePlaytimePerGame = players.reduce((totalTime, player) =>
//    players.playtime / players.gamesPlayed, 0);

// console.log(totalAveragePlaytimePerGame)



//36

// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
// //     balance: 2764,
// //     gender: "female"
// //   }
// // ]

// // const calculateTotalBalance = users => {
// //     users.reduce((acc, user ) => {
// //     return acc + user.balance
// //    },0);
    
// //  };

// //  console.log(calculateTotalBalance(users))



// //  const students = [
// //   { name: "Манго", score: 83 },
// //   { name: "Полі", score: 59 },
// //   { name: "Аякс", score: 37 },
// //   { name: "Ківі", score: 94 },
// //   { name: "Х'юстон", score: 64 },
// // ];


// // const calculateTotalBalanceeeee = users => {
// //   return users.reduce((acc, user ) => {
// //   return acc + user.balance
// //  },0);
  
// // };

// // console.log(calculateTotalBalanceeeee(users))




// // 37

// // users = [
// //   {
// //     name: "Moore Hensley",
// //     email: "moorehensley@indexia.com",
// //     eyeColor: "blue",
// //     friends: ["Sharron Pace"],
// //     isActive: false,
// //     balance: 2811,
// //     gender: "male"
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     email: "sharlenebush@tubesys.com",
// //     eyeColor: "blue",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     isActive: true,
// //     balance: 3821,
// //     gender: "female"
// //   },
// //   {
// //     name: "Ross Vazquez",
// //     email: "rossvazquez@xinware.com",
// //     eyeColor: "green",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     isActive: false,
// //     balance: 3793,
// //     gender: "male"
// //   },
// //   {
// //     name: "Elma Head",
// //     email: "elmahead@omatom.com",
// //     eyeColor: "green",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     isActive: true,
// //     balance: 2278,
// //     gender: "female"
// //   },
// //   {
// //     name: "Carey Barr",
// //     email: "careybarr@nurali.com",
// //     eyeColor: "blue",
// //     friends: ["Jordan Sampson", "Eddie Strong"],
// //     isActive: true,
// //     balance: 3951,
// //     gender: "male"
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     email: "blackburndotson@furnigeer.com",
// //     eyeColor: "brown",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"],
// //     isActive: false,
// //     balance: 1498,
// //     gender: "male"
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     email: "shereeanthony@kog.com",
// //     eyeColor: "brown",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     isActive: true,
// //     balance: 2764,
// //     gender: "female"
// //   }
// // ]
// // Доповни функцію getTotalFriendCount(users) таким чином, щоб вона рахувала і 
// // повертала загальну кількість друзів (властивість friends) 
// // усіх користувачів з масиву users.


// // const getTotalFriendCount = users => {
// //   return users.reduce((totalFr, user) => totalFr + user.friends.length, 0) 
// // };

// // console.log(getTotalFriendCount(users))



// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));
// console.log(sortedByAuthorName);


// const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); 


// const sortedByReversedAuthorName = [...books].sort((a, b) => b.localeCompare(a));

// const sortedByAscendingRating = [...books].sort((a,b) => a.rating - b.rating);
// console.log(sortedByAscendingRating); 


// const sortedByDescentingRating = [...books].sort((a,b) => b.rating - a.rating);
// console.log(sortedByDescentingRating); 


//42

users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]


// Доповни функцію sortByAscendingBalance(users) таким чином, 
// щоб вона повертала масив користувачів, 
// відсортований за зростанням їх балансу (властивість balance).


// const sortByAscendingBalance = users => {
//    return users.sort((a,b) => a.balance -b.balance);
// };
// console.log(sortByAscendingBalance(users))


// // 43

// Доповни функцію sortByDescendingFriendCount(users) таким чином, 
// щоб вона повертала масив користувачів, 
// відсортований за спаданням кількості їхніх друзів (властивість friends).


// const sortByDescendingFriendCount = users => {
//    return [...users].sort((a,b) => b.friends.length - a.friends.length);
// };
// console.log(sortByDescendingFriendCount(users))



// 44
// Доповни функцію sortByName(users) таким чином, 
// щоб вона повертала масив користувачів, відсортований 
// за їх ім'ям (властивість name) в алфавітному порядку.


// const sortByName = users => {
//   return [...users].sort((a, b) => a.name.localeCompare(b.name));
// };


// // 45

// Доповни код таким чином, щоб у змінній names вийшов масив
//  імен авторів в алфавітному порядку, рейтинг книг яких 
//  більший за значення змінної MIN_BOOK_RATING.





const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];

// Доповни код таким чином, щоб у змінній names вийшов масив
//  імен авторів в алфавітному порядку, 



// рейтинг книг яких  більший за значення змінної MIN_BOOK_RATING.


const MIN_BOOK_RATING = 8;
// Change code below this line

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort((a, b) => a.localeCompare(b));

// console.log(names);



// const students = [
//   { name: "Манго", score: 83, courses: ["математика", "фізика"] },
//   { name: "Полі", score: 59, courses: ["інформатика", "математика"] },
//   { name: "Аякс", score: 37, courses: ["фізика", "біологія"] },
//   { name: "Ківі", score: 94, courses: ["література", "інформатика"] },
// ];


// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ['біологія', 'інформатика', 'література', 'математика', 'фізика']



users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]


// // 46
// Доповни функцію getNamesSortedByFriendCount(users) таким чином, 
// щоб вона повертала масив імен користувачів, 
// відсортований за зростанням кількості їхніх друзів (властивість friends).

//1. відсортувати за зростанням кількості їхніх друзів
//2. повертала масив імен

// const getNamesSortedByFriendCount = users => {
//     users
//    .sort((a, b) => a.friends.length - b.friends.length)
//    .map(user => user.friend)

//    return users

// };

// console.log(getNamesSortedByFriendCount(users));

//47

// Доповни функцію getSortedFriends(users) таким чином, 
// щоб вона повертала масив унікальних імен 
// друзів (властивість friends), відсортований за алфавітом.


//повертала масив унікальних імен друзів
//відсортований за алфавітом.



// const getSortedFriends = users => {
//    return users
//    .flatMap(user => user.friends)
//    .filter((friend, i, users) => users.indexOf(friend) === i)
//    .sort((a, b) => a.localeCompare(b));
// };

// console.log(getSortedFriends(users))


// 48

// Доповни функцію getTotalBalanceByGender(users, gender) таким чином, 
// щоб вона повертала загальний баланс користувачів (властивість balance), 
// стать яких (властивість gender) збігається зі значенням параметра gender.



//стать яких (властивість gender) збігається зі значенням параметра gender.
//загальний баланс користувачів (властивість balance)



// const getTotalBalanceByGender = (users, gender) => {

//   return users
//   .filter(user => gender === user.gender)
//   .reduce((totalBalance, user) => totalBalance + user.balance,0);

// };

// console.log(getTotalBalanceByGender(users, "male"))



console.log(document);

const body = document.body;
console.log(body);

const list = body.firstElementChild;
console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);



const listItems = list.children;
console.log(listItems);