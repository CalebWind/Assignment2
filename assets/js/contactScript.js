const alertUser = () => {
  let namevalue = document.getElementById("nameInput").value;
  window.alert("Thank you for your message " + namevalue);
};

document.getElementById("submit").addEventListener("click", alertUser);

