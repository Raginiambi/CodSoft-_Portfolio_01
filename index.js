let button = document.querySelector("button");
let msg = document.querySelectorAll("input");
let contact = document.querySelector("#contact-div");
let end = document.querySelector("#end"); 

button.addEventListener("click",()=>{
   contact.style.visibility = "hidden";
   end.style.visibility = "visible";
   end.style.marginLeft ="0px";
   end.style.paddingTop = "250px";
 
 
})