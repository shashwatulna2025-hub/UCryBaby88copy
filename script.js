// User Database (Username → Password)
const users = {
  shashwat: "sss",
  yash: "1234",
  nirma: "cse",
  employee1: "1111",
  employee2: "2222",
  employee3: "3333",
  employee4: "4444"
};

//  Show Login Screen
function showLogin() {
  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("loginSection").classList.remove("hidden");
}

// Login Validation Function
function login() {
  const username = document.getElementById("loginName").value.trim().toLowerCase();
  const password = document.getElementById("loginPass").value.trim();

  if (users[username] && users[username] === password) {
    // Hide login page
    document.getElementById("loginSection").classList.add("hidden");

    // Show dashboard
    document.getElementById("mainApp").classList.remove("hidden");

    // Update welcome message
    document.getElementById("welcomeText").innerText = `Welcome, ${capitalize(username)}!`;
  } else {
    alert("Invalid Username or Password");
  }
}

//  Helps function to capitalize names
function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

// Logout Function ka code here write karo hai
function logout() {
  document.getElementById("mainApp").classList.add("hidden");
  document.getElementById("startScreen").classList.remove("hidden");
}

// Open Attendance / Report / Branch Pages in New Tabs
function openPage(page) {
  window.open(page, "_blank");
}
