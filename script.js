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
        moreText.style.display = "none";// --- 1. PASSWORD CHECKER FUNCTION ---
function checkPassword() {
    const userAnswer = document.getElementById("password-input").value;
    
    // Define Valid Answers
    const validAnswers = [
        "deeshu", "dishu", "deshu", 
        "divyank" 
    ];

    if (validAnswers.includes(userAnswer.toLowerCase())) {
        document.getElementById("secret-section").style.display = "block";
        document.getElementById("gate-container").style.display = "none";
    } else {
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
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    var tabButtons = document.getElementsByClassName("tab-btn");
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

// --- 4. READ MORE / READ LESS FUNCTION ---
function toggleReadMore(id) {
    var dots = document.getElementById("dots-" + id);
    var moreText = document.getElementById("more-" + id);
    var btnText = document.getElementById("btn-" + id);

    if (dots.style.display === "none") {
        // Hide text
        dots.style.display = "inline";
        btnText.innerHTML = "more";
        moreText.style.display = "none";
    } else {
        // Show text
        dots.style.display = "none";
        btnText.innerHTML = "less";
        moreText.style.display = "inline";
    }
}
    } else {
        // If text is currently HIDDEN, show it (Expand)
        dots.style.display = "none";
        btnText.innerHTML = "less"; // Optional: Change button to "less"
        moreText.style.display = "inline";
    }
}

// --- TYPEWRITER EFFECT LOGIC ---
const textElement = document.getElementById("typewriter-text");
const phrases = ["Student", "Engineer", "Researcher", "Developer", "Creator"]; // Change these words if you want!
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = 100; // Typing speed

    if (isDeleting) {
        typeSpeed /= 2; // Delete faster than type
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        // Finished typing word, pause before deleting
        isDeleting = true;
        typeSpeed = 2000; 
    } else if (isDeleting && charIndex === 0) {
        // Finished deleting, move to next word
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

// Start the effect once the page loads
document.addEventListener('DOMContentLoaded', type);

// --- 7. VISITOR COUNTER LOGIC (Backend-less API) ---
function updateVisitCount() {
    // Using a specific namespace for your portfolio to count hits
    // The API returns a JSON object like { "count": 123 }
    const apiUrl = "https://api.counterapi.dev/v1/hipsterenova-portfolio/visits/up";
    
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const countElement = document.getElementById('visit-count');
        if (countElement) {
            countElement.innerText = data.count;
        }
    })
    .catch(error => {
        console.error('Error fetching visitor count:', error);
        // If it fails (e.g., ad blocker), just hide the text or show empty
        const countElement = document.getElementById('visit-count');
        if (countElement) {
            countElement.innerText = "...";
        }
    });
}

// Call the counter function when the page loads
updateVisitCount();