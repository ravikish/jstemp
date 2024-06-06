function validateForm() {
    const arr = [1,2,3];
    try {
        const element = arr[5];
        console.log("Array element : " + element);
        console.log("This message will be reached.");
    } catch (error) {
        console.error("An error occurred while accessing the array element", 
            error.message
        );   
    }
    console.log("Program continues after error handling.");
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous results

    try {
        // Check if name is empty
        if (!name) {
            throw new Error('Name cannot be empty');
        }

        // Check if age is a number
        if (isNaN(age)) {
            throw new TypeError('Age must be a number');
        }

        // Check if age is non-negative
        if (age < 0) {
            throw new RangeError('Age cannot be negative');
        }

        // If all validations pass
        resultDiv.innerHTML = `Name: ${name}, Age: ${age}`;
    } catch (e) {
        if (e instanceof TypeError) {
            resultDiv.innerHTML = 'TypeError: ' + e.message;
        } else if (e instanceof RangeError) {
            resultDiv.innerHTML = 'RangeError: ' + e.message;
        } else {
            resultDiv.innerHTML = 'Error: ' + e.message;
        }
    }
}
