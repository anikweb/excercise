/* Exercise 1: 


Write a function named destructureExample that takes in an object and an array as parameters. The function should use destructuring to extract the values 'name' and 'age' from the object and the values at index 0 and index 2 from the array. The function should then return an object with the extracted values as properties with name and age. */

const destructureExample = (obj1, arr1) => {
  const { name, age } = obj1;
  const [val1, , val2] = arr1;

  return { name, age };
};

const obj1 = { name: 'Anik Kumar Nandi', age: 23, city: 'Dhaka', country : "Bangladesh" };
const arr1 = [10, 20, 30, 40];

const result1 = destructureExample(obj1, arr1);
// Output
console.log(result1);

/* Exercise 2:
// Write a function named sumNumbers that takes in multiple numbers as arguments using the rest operator. The function should return the sum of all the numbers. */

const sumNumbersExample = (...numbers) => { 
     return numbers.reduce((sum, num) => sum + num, 0);
}
const result2 = sumNumbersExample(1, 2, 3, 4);
// Output
console.log(result2);

/* Exercise 3:
 Write a function named createGreeting that takes in a name as a parameter and returns a greeting message using template literals. The message should be in the format: "Hello, [name]! Welcome to our website." */

const createGreeting = (name) => {
    const greetings = `Hello, ${name}! Welcome to our website.`
    return greetings
}
const result3 = createGreeting('Anik Kumar Nandi')
// Output
console.log(result3);

/* Exercise 4: 
Write a function named isEven that takes in a number as a parameter and returns the string "Even" if the number is even, and "Odd" if the number is odd. Use a ternary operator instead of an if/else statement. */

const isEven = (num) => {
    if (num % 2 == 0) {
        return "Even"
    } else if (num % 2 != 0) {
        return "Odd";
    }
}
// Output
console.log(isEven(2));


/* Exercise 5:
Convert the following function to an arrow function:
function multiply(a, b) {
  return a * b;
}*/

const multiply = (a, b) => a * b
// Output
console.log(multiply(3, 5))  

 /* Exercise 6: 

Write a function named getLargestNumber that takes in two numbers as parameters. The function should return the larger number using short-circuiting and logical operators (&&, ||, ??). */

const getLargestNumber = (num1, num2) => num1 > num2 ? num1 : num2;
// Output
console.log(getLargestNumber(10,100));

/*Exercise 7: 

Write a function named getAddressCity that takes in an object representing a person's address. The address object has properties 'street', 'city', and 'country'. The function should return the value of the 'city' property if it exists, or the string "Unknown" if it doesn't exist, using optional chaining. */

const getAddressCity = (address) => {
  return address?.city ?? "Unknown";
};

const address1 = { street: '123 Main St', city: 'New York', country: 'USA' };
const address2 = { street: '456 Elm St', country: 'Canada' };
// Output
console.log(getAddressCity(address1));

 /* Exercise 8: 

    Write a function named doubleNumbers that takes in an array of numbers and returns a new array with each number doubled using the array map method. */

const doubleNumbers = (numbers) => {
  return numbers.map((num) => num * 2);
};
// Output
console.log(doubleNumbers([1, 2, 2, 3, 4]));

/* Exercise 9: 

Write a function named filterEvenNumbers that takes in an array of numbers and returns a new array with only the even numbers using the array filter method. */

const filterEvenNumbers = (numbers) => { 
      return numbers.filter((num) => num % 2 === 0);
}
// Output
console.log(filterEvenNumbers([1, 2, 3, 4]));


 /* Exercise 10: 

Write a function named sumArray that takes in an array of numbers and returns the sum of all the numbers using the array reduce method. */

const sumArray = (numbers) => {
   return numbers.reduce((sum, num) => sum + num ,0)
}
// Output
console.log(sumArray([1, 2, 3, 4, 54, 6]));


/* Exercise 11: 

Write a function named sortNumbers that takes in an array of numbers and returns a new array with the numbers sorted in ascending order using the array sort method. */

const sortNumbers = (numbers) => {
  return numbers.sort((a, b) => a - b);
};
// Output
console.log(sortNumbers([2,5,6,1,4]));
