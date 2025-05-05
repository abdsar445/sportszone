function validateForm() {
  let name = document.getElementById("name").value.trim();
  let age = document.getElementById("age").value.trim();
  let email = document.getElementById("email").value.trim();
  let contact = document.getElementById("contact").value.trim();
  let errorMsg = document.getElementById("errorMsg");

  if (/\d/.test(name)) {
    errorMsg.innerText = "Name cannot contain numbers.";
    return;
  }
  if (!/^\d+$/.test(age) || !/^\d+$/.test(contact)) {
    errorMsg.innerText = "Age and Contact must be numbers.";
    return;
  }
  if (!email.includes("_")) {
    errorMsg.innerText = "Email must contain an underscore (_).";
    return;
  }

  errorMsg.style.color = "green";
  errorMsg.innerText = "Feedback submitted successfully!";
}