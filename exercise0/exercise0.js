const names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

const t = names.filter(name => name.length >= 3);
console.log("output: " + t);


const listItems = t.map(name => "<li>" + name + "</li>");
//nocdedocument.getElementById("app").innerHTML = '<ul>' +listItems.join('')+ '</ul>';


///car arrays
let cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];


  let newerThan1999 = cars.filter(car =>car.year >=  1999);
  console.log(" cars that are newer than 1999"  , newerThan1999);
  
  let allVolvo = cars.filter(car => car.make.toLowerCase() === "volvo".toLowerCase());

  console.log(" cars make :volvo" ,  allVolvo);
  console.log(`cars make volvo ${allVolvo} cars`);
  
  
  let carsBelow5000 = cars.filter(car => car.price < 5000);
console.log("cars price that is below 500 kr"  ,   carsBelow5000);
  //inserting a new object to the array using a function
  console.log("SQL query for Volvo cars:");
const sqlQuery = `INSERT INTO cars (id,year,make,model,price) VALUES (${allVolvo.map(car => `(${car.id},${car.year},${car.make},${car.model},${car.price})`).join(",")})`;
console.log(sqlQuery);
