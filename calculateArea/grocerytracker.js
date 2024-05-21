// Function to calculate the total amount of grocery purchases
function calculateTotal() {
    // Get the values from the input boxes
    const grocery1 = parseFloat(document.getElementById('grocery1').value) || 0;
    const grocery2 = parseFloat(document.getElementById('grocery2').value) || 0;
    const grocery3 = parseFloat(document.getElementById('grocery3').value) || 0;
    
    // Calculate the total amount
    const totalAmount = grocery1 + grocery2 + grocery3;
    
    // Display the total amount
    document.getElementById('totalAmount').innerText = totalAmount.toFixed(2);
}
