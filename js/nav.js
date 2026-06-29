let button=document.querySelector(".arrow"),
    links=document.querySelector(".nav-link");

button.addEventListener("click",()=>{
    links.classList.toggle("display");
})