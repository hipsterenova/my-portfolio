function checkPassword() {
    // 1. Get the value the user typed
    const userAnswer = document.getElementById("password-input").value;
    
    // 2. Define the correct answer (Make sure it's lowercase for easier checking)
    // CHANGE 'pizza' TO WHATEVER ANSWER YOU WANT
    const correctAnswer = "deeshu" || "dishu" || "deshu" || "Deeshu" || "Dishu" || "Deshu" || "DEESHU" || "DISHU" || "DESHU" || "divyank" || "Divyank" || "DIVYANK"; 

    // 3. Compare them (we turn user input to lowercase so 'Pizza' and 'pizza' both work)
    if (userAnswer.toLowerCase() === correctAnswer) {
        
        // SUCCESS: Show the secret section
        document.getElementById("secret-section").style.display = "block";
        
        // Hide the question box (optional, looks cleaner)
        document.getElementById("gate-container").style.display = "none";
        
    } else {
        // FAILURE: Show an alert
        alert("Incorrect! You don't know me well enough yet. 😉");
    }
}

// NEW CODE: Listen for the "Enter" key
// 1. Find the input box
var input = document.getElementById("password-input");

// 2. Add a listener that watches every key you type
input.addEventListener("keypress", function(event) {
    // 3. If the key pressed is "Enter"...
    if (event.key === "Enter") {
        // ... then run the password checker function!
        checkPassword();
    }
});