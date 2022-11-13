const nav=document.querySelector(".navbar");document.addEventListener("scroll",function(){nav.classList.add("scrolll")});const date=new Date,year=date.getFullYear(),year2=document.querySelector("#year");year2.append(year)

let width = window.innerWidth;
let img = document.querySelector(".img-responsive")
if(width > 500){
    img.setAttribute("src","images/banner.png");

}else if(width <= 600){
    img.setAttribute("src","images/banner2.png");
}
// document.addEventListener("scroll",()=>{
//     let off = window.pageYOffset;
//     console.log(off)
//     if(off >= '150'){
//         let home = document.querySelector(".pos");
//         // home.style.position = "fixed";
//         if(width<=600){
//         document.querySelector("#About").style.marginTop='400px';

//         }else{
//             document.querySelector("#About").style.marginTop='700px';

//         }
//         // home.style.zIndex = "-1";

//     }else if(off===0){
//         let home = document.querySelector(".pos");
//         // home.style.position = "static";
//         document.querySelector("#About").style.marginTop='0px';
//         // home.style.position = "static";
//         // home.style.zIndex = "1";

//     }


// })