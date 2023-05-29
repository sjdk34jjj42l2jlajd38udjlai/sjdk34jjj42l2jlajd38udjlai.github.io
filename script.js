function redirectUser() {
    var idInput = document.getElementById("idInput").value;
    
    // Perform validation and redirect logic here
    // Example logic: If ID key is "123", redirect to user's page
    if (idInput === "123") {
      window.location.href = "https://hackerstore.github.io/"; // Replace with the URL of the user's page
    } else {
      alert("Invalid ID key. Please try again."); // Show an error message
    }
  }
  