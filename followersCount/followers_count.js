let count = 0; // Initialize count to 0
function increaseCount() {
    count++; // Increment the count by 1
    displayCount();
    checkCountValue();
    checkTrycatch();
  }

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
    }
function checkCountValue() {
        if (count === 10) {
          alert("Your Instagram post gained 10 followers! Congratulations!");
        } else if (count === 20) {
          alert("Your Instagram post gained 20 followers! Keep it up!");
        }
    }

// Function to reset the count to 0
function resetCount() {
    count = 0; // Reset the count to 0
    displayCount(); // Update the display
  }

function checkTrycatch() {
  try{
    let jsonstring = '{"name": "John", "age":30,}';  // JSON string
    let user = JSON.parse(jsonstring);
    return user;
  } catch(error){
    console.log('JSON parser error:', error.message);
  }
}