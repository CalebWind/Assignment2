window.onload = loadReviews = () => {
  fetch("assets/json/samsung.json")
 
    .then(r => r.json())
    .then(t => {
      try {
      let text =
        "<table><tr><th>Product Name</th><th>Product Brand</th><th>Product Cost</th><th>Product Review</th><th>Rating</th></tr><tbody>";
      Array.from(t).forEach(element => {
        text += `<tr><td>${element.itemName}</td>`;
        text += `<td>${element.brand}</td>`;
        text += `<td>${element.cost}</td>`;
        text += `<td>${element.review}</td>`;
        text += `<td><form class="rating" id="product1">
        <button type="submit" class="star" data-star="1">
          &#9733;
          <span class="screen-reader">1 Star</span>
        </button>
      
        <button type="submit" class="star" data-star="2">
          &#9733;
          <span class="screen-reader">2 Stars</span>
        </button>
      
        <button type="submit" class="star" data-star="3">
          &#9733;
          <span class="screen-reader">3 Stars</span>
        </button>
      
        <button type="submit" class="star" data-star="4">
          &#9733;
          <span class="screen-reader">4 Stars</span>
        </button>
      
        <button type="submit" class="star" data-star="5">
          &#9733;
          <span class="screen-reader">5 Stars</span>
        </button>
      </form></td></tr>`; //this is the html code for the stars
      });
      text += "</tbody></table>";
      document.getElementById("table").innerHTML += text;
    }
  catch (e) {
console.log("e");
  }});
};

document.addEventListener(
  "submit",
  function(event) {
    // https://gomakethings.com/converting-a-nodelist-to-an-array-with-vanilla-javascript/ code for stars, where i got it from

    if (!event.target.matches(".rating")) return;

    event.preventDefault();

    var selected = document.activeElement;
    if (!selected) return;
    var selectedIndex = parseInt(selected.getAttribute("data-star"), 10);

    var stars = Array.from(event.target.querySelectorAll(".star"));

    stars.forEach(function(star, index) {
      if (index < selectedIndex) {
        star.classList.add("selected");
      } else {
        star.classList.remove("selected");
      }
    });
  },
  false
);

document.addEventListener("click", event => {
  //code for comment
  if (event.target.matches(".submitText")) {
    let newDiv = document.createElement("div");
    const commentValue = document.getElementById("textInput").value; //get comment
    const userName = document.getElementById("userName").value; //get username

    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate(); //get todays date
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(); //get todays time
    var dateTime = date + " " + time; //stuff it all together

    newDiv.innerHTML =
      `<p><b>${userName}: </b>${commentValue} <i class="fas fa-trash"></i></p>` +
      new Date().toLocaleString(); //paste the message
    document.getElementById("text-output").append(newDiv);
  }
});
