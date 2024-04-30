//1.1 Implement map and filter

const names = ["Lars", "Peter", "Jan", "Bo"];

// Task 1.1.2
function myFilter(array, callback) {
    const filteredArray = [];
    for (const element of array) {
        if (callback(element)) {
            filteredArray.push(element);
        }
    }
    return filteredArray;
}
const filteredArr = myFilter(names, (string) => string.length <= 3);
console.log(filteredArr);



function myMap(arr, callback) {
    let mappedArray = [];
    for (let i = 0; i < arr.length; i++) {
      mappedArray.push(callback(arr[i]));
    }
    return mappedArray;
  }
  
// testting myMap funciton
  
let upperCaseName = myMap(names, (name) => {
  return name.toUpperCase();
});
  console.log(upperCaseName); 
  //1.2 Prototypes and Inheritance


  Array.prototype.myFilter = function(callback) {
    const filteredArray = [];
    for (const element of this) {
        if (callback(element)) {
            filteredArray.push(element);
        }
    }
    return filteredArray;
};
let filteredNames = names.myFilter(name => name.length <= 3);// myfilter method get called on the array directly
  


//1.3 Simple DOM Manipulation and Event Handling

//exercise1.html


  //prototype like inheritence in java 
 // 1.4 Event Bubbling and Event Arguments
 //bubble.js and bubble html

 //1.5 Using map to Create Lists (ULs, Tables, etc.)
 let namesArray =[];

