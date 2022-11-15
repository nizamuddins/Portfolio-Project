const nav=document.querySelector(".navbar");document.addEventListener("scroll",function(){nav.classList.add("scrolll")});const date=new Date,year=date.getFullYear(),year2=document.querySelector("#year");year2.append(year)

let width = window.innerWidth;
let off = document.querySelector(".offcanvas");
let off2 = document.querySelector(".media1");

if(width > 500){
    off.classList.remove("text-start");
    off2.style.position='absolute';
    off2.style.marginTop= '80px';
    off2.style.width='10px';
}else if(width <= 600){
off.classList.add("text-start");
off2.style.position='static';
off2.style.marginTop= '10%';
off2.style.width='100%';


}