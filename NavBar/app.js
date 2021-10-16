// classList - shows/gets all class
//  contains - check classList for specific class
// add- add class
// remove - remove class
// toggle - toggle class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  //   first method
//   if (links.classList.contains("show-links")) {
//     links.classList.remove("show-links");
//   } else {
//     links.classList.add("show-links");
//   }
  // second method
    links.classList.toggle("show-links");
    navToggle.classList.toggle('nav-toggle-hover')
});
