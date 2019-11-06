const logUserIn = () => {
  let usernamevalue = $("#userName")[0].value;
  let userpasswordvalue = $("#password")[0].value;

  if (usernamevalue == "user") {
    //incredibly basic plaintext password checking
    if (userpasswordvalue == "P@ssw0rd123") {
      window.location.replace("index.html");
      return;
    }
  } else {
    window.location.replace("login.html");
    return;
  }
};

$("#login").on("click", logUserIn);