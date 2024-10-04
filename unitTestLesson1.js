function runTests() {
    let success = true;

    // Test for number printing (not easily testable without capturing console output)

    // Test for mixed array types
    const mixedArray = [42, "Hello", true, null, undefined, { name: "John" }, [1, 2, 3], Symbol("sym"), BigInt(123), () => {}];

    const types = mixedArray.map(item => typeof item);

    if (types.length !== mixedArray.length) {
        success = false;
        console.error('Test failed for mixed array types.');
    }

    // Test for filtering people older than 20
    const people = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 19 },
        { name: 'Charlie', age: 22 }
    ];

    const filteredPeople = people.filter(person => person.age > 20);

    if (filteredPeople.length !== 2) {
        success = false;
        console.error('Test failed for filtering people.');
    }

    // Test for finding the word "answer"
    const filledArray = new Array(10).fill(42);
    filledArray.splice(4, 0, "answer");

    const foundWord = filledArray.find(item => item === "answer");

    if (foundWord !== "answer") {
        success = false;
        console.error('Test failed for finding the word.');
    }

    // Output result in color-coded format
    if (success) {
        console.log('\x1b[32m%s\x1b[0m', 'Success'); // Green text
    } else {
        console.error('\x1b[31m%s\x1b[0m', 'Failure'); // Red text
        console.reset(); // Reset to default colors in console log.
    }
}

runTests();

function init()
{
    runTests();
}

init();