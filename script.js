const menuBtn=document.getElementById("menu-btn");
const nav=document.getElementById("nav");

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("active");

if(nav.classList.contains("active")){

menuBtn.innerHTML='<i class="fas fa-times"></i>';

}else{

menuBtn.innerHTML='<i class="fas fa-bars"></i>';

}

});