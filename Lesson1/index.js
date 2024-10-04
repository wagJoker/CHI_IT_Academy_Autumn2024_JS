// Task 1: Print numbers from 1 to 10 using for and while loops

// Using for loop
console.log("Using for loop:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Using while loop
console.log("Using while loop:");
let j = 1;
while (j <= 10) {
    console.log("Task1",j);
    j++;
}

// Using do while loop
console.log("Using do while loop:");
let y = 1;
do {
    console.log("Task 1:", j);
    y++;
} while (j <= 10);

// Asynchronous generator function to yield numbers from 1 to 10
async function* asyncNumberGenerator() {
    for (let i = 1; i <= 10; i++) {
        yield i; // Yield the current number
    }
}

// Using for await loop
(async () => {
    console.log("Using for await loop:");
    for await (const num of asyncNumberGenerator()) {
        await console.log(num); // Output just the number
    }
})();



// Task 2: Create an array with different types of elements
const mixedArray = [42, "Hello", true, null, undefined, { name: "John" }, [1, 2], Symbol("sym"), BigInt(12345678901234567890), false];

// Output the type of each element using different methods
console.log("Task2 Using forEach:");
mixedArray.forEach(element => console.log(typeof element));

console.log("Task2 Using for loop:");
for (let k = 0; k < mixedArray.length; k++) {
    console.log(typeof mixedArray[k]);
}

console.log("Task2 Using while loop:");
let l = 0;
while (l < mixedArray.length) {
    console.log(typeof mixedArray[l]);
    l++;
}

console.log("Task2 Using do while loop:");
let m = 0;
do {
    console.log(typeof mixedArray[m]);
    m++;
} while (m < mixedArray.length);

// Task 3: Create an array of objects and filter those older than 20
const people = [
    { name: 'Alice', age: 25, pets: ['cat', 'dog'] },
    { name: 'Bob', age: 19, pets: ['fish'] },
    { name: 'Charlie', age: 30, pets: ['hamster'] },
];

// Filter people older than 20
const filteredPeople = people.filter(person => person.age > 20);
console.log("Task3 People older than 20:", filteredPeople);

const slicedUpdatedPeople = people.slice(0, 2);
console.log("Task3 Sliced updated people (first two):", slicedUpdatedPeople);
// Task 4: Use map to add a pet to each person
const updatedPeople = filteredPeople.map(person => ({
    ...person,
    pets: [...person.pets, 'parrot'] // Adding a new pet
}));
console.log("Task4 Updated people with new pets:", updatedPeople);

// Task 5: Create an array of length 10 filled with the number 42
const filledArray = new Array(10).fill(42);
console.log("Task5 Filled array:", filledArray);

// Insert "answer" at the 5th position using splice
filledArray.splice(4, 0, "answer");
console.log("Task5 Array after inserting 'answer':", filledArray);

// Find the word "answer" using find method
const foundWord = filledArray.find(element => element === "answer");
console.log("Task5 Found word:", foundWord);

// Task 6: Create an object with several keys and demonstrate keys, hasOwnProperty, values
const exampleObject = {
    name: "John",
    age: 30,
    city: "New York"
};

// Using Object.keys()
console.log("Task6 Keys of the object:", Object.keys(exampleObject));

// Using hasOwnProperty()
console.log("Task6 Has property 'age':", exampleObject.hasOwnProperty('age'));
console.log("Task6 Has property 'country':", exampleObject.hasOwnProperty('country'));

// Using Object.values()
console.log("Task6 Values of the object:", Object.values(exampleObject));