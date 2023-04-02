const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav-menu');

hamburguer.addEventListener('click', () => { 
       hamburguer.classList.toggle('active');
       navMenu.classList.toggle('active');

});
   
    

 


const accordionHeaders = document.querySelectorAll(".accordion-header");


accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {

    const accordionContent = header.nextElementSibling;

   
    header.classList.toggle("active");


    if (header.classList.contains("active")) {
      accordionContent.style.display = "block";
  
      
    } else {
      accordionContent.style.display = "none";
    }
  });
});

const firstAccordionHeader = document.querySelector(".accordion-header");
const firstAccordionContent = firstAccordionHeader.nextElementSibling;

firstAccordionHeader.classList.add("active");

firstAccordionContent.style.display = "block";

const btn = document.querySelector(".btn-header");

function mudaCorBtn() {

  setTimeout(() => {
    btn.classList.add("ativo")
  }, 2000)

}

mudaCorBtn()

