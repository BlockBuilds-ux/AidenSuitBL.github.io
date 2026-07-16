

// Scroll reveal animation

const hiddenElements = document.querySelectorAll(".hidden");


const observer = new IntersectionObserver((entries)=>{


entries.forEach((entry)=>{


if(entry.isIntersecting){

entry.target.classList.add("show");

}

});


},
{
threshold:0.15
});



hiddenElements.forEach((element)=>{

observer.observe(element);

});





// Navbar background change while scrolling


const nav = document.querySelector("nav");


window.addEventListener("scroll",()=>{


if(window.scrollY > 50){

nav.style.background="rgba(8,11,18,.85)";

}

else{

nav.style.background="rgba(8,11,18,.55)";

}


});





// Smooth button hover glow


const buttons=document.querySelectorAll(".btn");


buttons.forEach(button=>{


button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-5px)";

});


button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0)";

});


});


