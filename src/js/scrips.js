//HAMBURGER
const hamburger = document.querySelector('.hamburger')
const navUl = document.querySelector('.nav-ul')
const menuLinks = document.querySelectorAll(".nav-ul a");

hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('active')
  navUl.classList.toggle('active')
  
})

// Remove a classe que mantém o menu aberto
menuLinks.forEach(link => {
  link.addEventListener("click", function () {
    navUl.classList.remove("active") 
    hamburger.classList.remove('active')
  });
});

