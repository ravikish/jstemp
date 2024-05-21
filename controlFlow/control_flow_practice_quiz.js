// Function to check access based on role
function checkAccess(role) {
    switch (role.toLowerCase()) {
      case 'employee':
        console.log("Access granted: You have full access to 'Dietary Services'.");
        break;
      case 'enrolled member':
        console.log("Access granted: You have access to 'Dietary Services' and one-on-one interaction with a dietician.");
        break;
      case 'subscriber':
        console.log("Access granted: You have partial access to 'Dietary Services'.");
        break;
      case 'non-subscriber':
        console.log("Access denied: Please enroll or subscribe first to avail 'Dietary Services'.");
        break;
      default:
        console.log("Invalid role: Please provide a valid role.");
        break;
    }
  }
  
  // Test cases
  checkAccess('Employee');          // Access granted: You have full access to 'Dietary Services'.
  checkAccess('Enrolled Member');   // Access granted: You have access to 'Dietary Services' and one-on-one interaction with a dietician.
  checkAccess('Subscriber');        // Access granted: You have partial access to 'Dietary Services'.
  checkAccess('Non-Subscriber');    // Access denied: Please enroll or subscribe first to avail 'Dietary Services'.
  checkAccess('Unknown');           // Invalid role: Please provide a valid role.
  