// --- 1. PASSWORD CHECKER FUNCTION ---
function checkPassword() {
    // Get the user input
    const userAnswer = document.getElementById("password-input").value;
    
    // Define Valid Answers (Array List)
    const validAnswers = [
        "deeshu", "dishu", "deshu", 
        "divyank" 
    ];

    // Check if the User's answer (converted to lowercase) exists in our list
    if (validAnswers.includes(userAnswer.toLowerCase())) {
        
        // SUCCESS: Show the secret section
        document.getElementById("secret-section").style.display = "block";
        document.getElementById("gate-container").style.display = "none";
        
    } else {
        // FAILURE
        alert("Incorrect! You don't know me well enough yet. 😉");
    }
}

// --- 2. ENTER KEY LISTENER ---
var input = document.getElementById("password-input");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkPassword();
    }
});

// --- 3. TAB SWITCHING FUNCTION ---
function openTab(event, tabName) {
    // Hide all tab contents
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    // Remove "active" class from all buttons
    var tabButtons = document.getElementsByClassName("tab-btn");
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(" active", "");
    }

    // Show the current tab, and make the button active
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

// --- 4. READ MORE / READ LESS FUNCTION ---
function toggleReadMore(id) {
    var dots = document.getElementById("dots-" + id);
    var moreText = document.getElementById("more-" + id);
    var btnText = document.getElementById("btn-" + id);

    if (dots.style.display === "none") {
        // If text is currently SHOWN, hide it (Collapse)
        dots.style.display = "inline";
        btnText.innerHTML = "more";
        moreText.style.display = "none";
    } else {
        // If text is currently HIDDEN, show it (Expand)
        dots.style.display = "none";
        btnText.innerHTML = "less"; // Optional: Change button to "less"
        moreText.style.display = "inline";
    }
}