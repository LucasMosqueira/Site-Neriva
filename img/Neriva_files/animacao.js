$(document).ready(function(){
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true
      });
  });


  var btn = document.getElementById('btn-div');
  var carinlindo = document.querySelector('.carinlindo');
  btn.addEventListener('click', function() {
      
    if(carinlindo.style.display === 'block') {
      carinlindo.style.display = 'none';
    } else {
      carinlindo.style.display = 'block';
    }
  });


  var btn = document.getElementById('btn-div2');
  var carinlindo = document.querySelector('.carinlindo');
  btn.addEventListener('click', function() {
      
    if(carinlindo.style.display === 'block') {
      carinlindo.style.display = 'none';
    } else {
      carinlindo.style.display = 'block';
    }
  });
