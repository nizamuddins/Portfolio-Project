const nav=document.querySelector(".navbar");document.addEventListener("scroll",function(){nav.classList.add("scrolll")});const date=new Date,year=date.getFullYear(),year2=document.querySelector("#year");year2.append(year)

let width = window.innerWidth;
let img = document.querySelector(".img-responsive")
if(width > 500){
    img.setAttribute("src","images/banner.png");

}else if(width <= 600){
    img.setAttribute("src","images/banner2.png");
}
