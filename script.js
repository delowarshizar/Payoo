document.getElementById("login").addEventListener("click", function () {
  const mobileNumber = document.getElementById("mobile-number").value;
  const pinNumber = document.getElementById("pin-number").value;
  const mobileNumberValue = parseInt(mobileNumber);
  const pinNumberValue = parseInt(pinNumber);

  const targetNumber = 12345678910;
  const targetPin = 1234;
  if (pinNumberValue === targetPin && mobileNumberValue === targetNumber) {
   window.location.href = "main.html"
  } else {
    alert("Invalid Credential");
  }
});
