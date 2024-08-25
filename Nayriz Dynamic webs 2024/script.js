  // active nav link
  var ul = document.querySelector('#ul');
  var li = document.querySelectorAll('#li');
  
  li.forEach(el=>{
      el.addEventListener('click', function(){
          ul.querySelector('.active').classList.remove('active');
  
          el.classList.add('active');
      });
  });

// image slider
const swiper = new Swiper('.swiper', {
    autoplay:{
        delay: 6000,
        disableOnInteraction: false,
    },
    
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    },
  });

