var scroll = 0;
var conponent = document.querySelector('.container');
var windowHeight = window.innerHeight;
document.addEventListener('scroll',()=>{
    scroll = window.pageYOffset;
    if(scroll >= 0 && scroll < windowHeight){
        
        conponent.setAttribute('class','container');
        conponent.classList.add('slide1')
    }
    else if(scroll >= windowHeight && scroll < 2*windowHeight){
        
        conponent.setAttribute('class','container');
        conponent.classList.add('slide2');
    }

})

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('header').addClass("sticky");
      }
      else{
        $('header').removeClass("sticky");
      }
    });


/* FadeIn Scroll */
$(document).ready(function() {
    
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
  
      /* Check the location of each desired element */
      $('.text-box').each( function(i){
          
          var bottom_of_object = $(this).position().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ){
              
              $(this).animate({'opacity':'1'},900);
                  
          }
          
      }); 
  
  });
  
});

function myFunction(x) {
  x.classList.toggle("change");
}



