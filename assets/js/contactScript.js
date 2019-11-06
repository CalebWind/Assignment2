const alertUser = () => {
  let namevalue = $('#nameInput')[0].value;
    window.alert("Thank you for your message " + namevalue);
};

$('#submit').on("click", alertUser);
