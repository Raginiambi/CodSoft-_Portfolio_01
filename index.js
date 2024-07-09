let button = document.querySelector("#send");
let msg = document.querySelectorAll("input");
let contact = document.querySelector("#contact-div");
let end = document.querySelector("#end"); 
let contact_sec = document.querySelector("#contact_main");

button.addEventListener("click",()=>{
   contact.style.display = "none";
   end.style.visibility = "visible";
   end.style.marginLeft ="0px";
   end.style.paddingTop = "250px";
   contact_sec.style.height = "640px";
   
 
 
})
