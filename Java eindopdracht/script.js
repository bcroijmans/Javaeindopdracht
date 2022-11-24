function myHome() {
  document.getElementById("myBody").style.backgroundColor = "grey";
  document.getElementById("myP").innerHTML = " The color has changed to grey";
}
function myRed() {
  document.getElementById("myBody").style.backgroundColor = "red";
  document.getElementById("myP").innerHTML = " The color has changed to red";
}
function myBlue() {
  document.getElementById("myBody").style.backgroundColor = "blue";
  document.getElementById("myP").innerHTML = " The color has changed to blue";
}
function myGreen() {
  document.getElementById("myBody").style.backgroundColor = "green";
  document.getElementById("myP").innerHTML = " The color has changed to green";
}
function myOrange() {
  document.getElementById("myBody").style.backgroundColor = "orange";
  document.getElementById("myP").innerHTML = " The color has changed to orange";
}

document.addEventListener("keypress", (event) => {
  if (event.key == 1) {
    myHome();
  }
  if (event.key == 2) {
    myRed();
  }
  if (event.key == 3) {
    myBlue();
  }
  if (event.key == 4) {
    myGreen();
  }
  if (event.key == 5) {
    myOrange();
  }
});

let navItems = document.querySelectorAll(".navigation li ");

navItems.forEach((navItem) => {
  navItem.addEventListener("click", (e) => {
    document.querySelector(".navigation li.active ").classList.remove("active");
    e.target.classList.add("active");
  });
});
