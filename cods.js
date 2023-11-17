let searchBtn =document.querySelector(".searchBtn")
let searchSection = document.querySelector(".searchSection")
let closeSearcghBlock  = document.querySelector(".closeSearcghBlock")

let closeInputBlock = document.querySelector(".closeInputBlock")
searchBtn.addEventListener("click",function(){
    searchSection.classList.add("openSearcghBlock")
})
closeSearcghBlock.addEventListener("click",function(){
    searchSection.classList.remove("openSearcghBlock")
})


let UserName = document.querySelector(".UserName")
let SignUp = document.querySelector(".SignUp")

UserName.addEventListener("click", function(){
    SignUp.classList.add("OpenUser")
})
closeInputBlock.addEventListener("click", function(){
    SignUp.classList.remove("OpenUser")
})

  const myswiper1 = new Swiper('.myswiper1', {

    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

  });
  const myswiper2 = new Swiper('.myswiper2', {

    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination2 ',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
  
  
    
  });