const nav = document.querySelector(".navbar");

document.addEventListener("scroll", function () {
  nav.classList.add("scrolll")

})

const date = new Date();
const year = date.getFullYear();


const year2 =  document.querySelector("#year");
year2.append(year)