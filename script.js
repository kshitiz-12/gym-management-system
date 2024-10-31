// JavaScript for toggling the mobile navigation menu
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// JavaScript for showing and hiding the signup page
const signupBtn = document.getElementById("signup-btn"); // Join Us button
const signupSection = document.getElementById("signup-section");
const closeBtn = document.querySelector(".close-btn"); // Close button

// Show the signup section when the button is clicked
signupBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent any default action
    signupSection.style.display = "flex"; // Show the signup section
    document.body.style.overflow = "hidden"; // Prevent background scrolling
});

// Close the signup section when the close button is clicked
closeBtn.addEventListener("click", () => {
    closeSignup();
});

// Close the signup section when clicking outside of the content
window.addEventListener("click", (event) => {
    if (event.target === signupSection) {
        closeSignup();
    }
});

// Function to close the signup section
function closeSignup() {
    signupSection.style.display = "none";
    document.body.style.overflow = "auto"; // Allow background scrolling again
}

// JavaScript for switching between Trainer and Member login options
const trainerOption = document.getElementById("trainer-option");
const memberOption = document.getElementById("member-option");
const signupForm = document.getElementById("signup-form");

// Function to switch between options
trainerOption.addEventListener("click", () => {
    trainerOption.classList.add("active");
    memberOption.classList.remove("active");
    signupForm.querySelector("button").textContent = "Login as Trainer"; // Change button text
});

memberOption.addEventListener("click", () => {
    memberOption.classList.add("active");
    trainerOption.classList.remove("active");
    signupForm.querySelector("button").textContent = "Login as Member"; // Change button text
});

// Handle signup form submission
signupForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Simple validation
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Add your login or signup logic here
    console.log(`Username: ${username}, Password: ${password}`); // Just for demonstration

    // Clear the form after submission
    signupForm.reset();
    closeSignup(); // Hide the signup section after submission
    
    // Simulate login based on user type
    const isTrainer = trainerOption.classList.contains("active");
    loginUser(isTrainer ? 'trainer' : 'member'); // Login as the appropriate type
});

// Variables for dashboards
let userType = ''; // 'member' or 'trainer'
let memberList = []; // Array to hold members

function showDashboard() {
    document.getElementById("member-dashboard").style.display = userType === 'member' ? "block" : "none";
    document.getElementById("trainer-dashboard").style.display = userType === 'trainer' ? "block" : "none";
}

// Function to log in the user and show their respective dashboard
function loginUser(type) {
    userType = type; // Set user type based on login
    showDashboard(); // Show the appropriate dashboard
}

// Handle adding a new member
const addMemberForm = document.getElementById("add-member-form");
addMemberForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission
    const newMemberName = document.getElementById("new-member-name").value;
    const newMemberEmail = document.getElementById("new-member-email").value;

    // Add new member to the member list
    memberList.push({ name: newMemberName, email: newMemberEmail });
    
    // Display the updated member list
    updateMemberList();
    
    // Clear the form fields
    addMemberForm.reset();
});

// Function to update member list display
function updateMemberList() {
    const memberListDisplay = document.getElementById("member-list");
    memberListDisplay.innerHTML = ''; // Clear previous list

    memberList.forEach(member => {
        const memberItem = document.createElement("p");
        memberItem.textContent = `Name: ${member.name}, Email: ${member.email}`;
        memberListDisplay.appendChild(memberItem);
    });
}

// Handle showing the registration form
const signupLink = document.getElementById("signup-link");
const registrationSection = document.getElementById("registration-section");
const closeRegistrationBtn = document.querySelector(".close-registration-btn"); // Close button for registration section

signupLink.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default action
    registrationSection.style.display = "flex"; // Show the registration section
    document.body.style.overflow = "hidden"; // Prevent background scrolling
});

// Close the registration section when the close button is clicked
closeRegistrationBtn.addEventListener("click", () => {
    closeRegistration();
});

// Close the registration section when clicking outside of the content
window.addEventListener("click", (event) => {
    if (event.target === registrationSection) {
        closeRegistration();
    }
});

// Function to close the registration section
function closeRegistration() {
    registrationSection.style.display = "none";
    document.body.style.overflow = "auto"; // Allow background scrolling again
}

// Handle registration form submission
const registrationForm = document.getElementById("registration-form");
registrationForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission
    const fullName = document.getElementById("full-name").value;
    const regUsername = document.getElementById("reg-username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const goal = document.getElementById("goal").value;
    const regPassword = document.getElementById("reg-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Simple validation
    if (regPassword !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Add your registration logic here
    console.log(`Full Name: ${fullName}, Username: ${regUsername}, Email: ${email}, Phone: ${phone}, Goal: ${goal}, Password: ${regPassword}`); // Just for demonstration

    // Clear the form after submission
    registrationForm.reset();
    closeRegistration(); // Hide the registration section after submission
});
