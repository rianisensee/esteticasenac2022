$( document ).ready(function() {

  // Progress bar
  let containerA = document.getElementById("circleA");
  let circleA = new ProgressBar.Circle(containerA, {
  });
  let containerB = document.getElementById("circleB");
  let circleB = new ProgressBar.Circle(containerB, {
  step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
}

  });

  let containerC = document.getElementById("circleC");
  let circleC = new ProgressBar.Circle(containerC, {

  step: function(state, circle) {
  circle.path.setAttribute('stroke', state.color);
}
  });

  let containerD = document.getElementById("circleD");
  let circleD = new ProgressBar.Circle(containerD, {

  step: function(state, circle) {
  circle.path.setAttribute('stroke', state.color);
}

});

  // iniciando loaders quando a usuário chegar no elemento
  let dataAreaOffset = $('#data-area').offset();
  // stop serve para a animação não carregar mais que uma vez
  let stop = 0;

  $(window).scroll(function (e) {
  let scroll = $(window).scrollTop();

  });

  // Parallax
  // setTimeout serve para carregar primeiro as imagens
  setTimeout(function() {
    $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'});
    $('#apply-area').parallax({imageSrc: 'img/pattern.png'});
  }, 200);

  // Filtro portfólio

  $('.filter-btn').on('click', function() {

    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'proc1-btn') {
      eachBoxes('proc1', boxes);
    } else if(type == 'proc2-btn') {
      eachBoxes('proc2', boxes);
    } else if(type == 'proc3-btn') {
      eachBoxes('proc3', boxes);
    } else if(type == 'proc4-btn') {
      eachBoxes('proc4', boxes);
    } else {
      eachBoxes('all', boxes);
    }

  });

  function eachBoxes(type, boxes) {
  if(type == 'all') {
      $(boxes).fadeIn();
    } else {
      $(boxes).each(function() {
        if(!$(this).hasClass(type)) {
          $(this).fadeOut('slow');
        } else {
          $(this).fadeIn();
        }
      });
    }
  }

  // scroll para as seções

  let navBtn = $('.nav-item');

  let bannerSection = $('#mainSlider');
  let aboutSection = $('#about-area');
  let servicesSection = $('#services-area');
  let teamSection = $('#team-area');
  let portfolioSection = $('#portfolio-area');
  let contactSection = $('#contact-area');

  let scrollTo = '';

  $(navBtn).click(function() {

    let btnId = $(this).attr('id');

    if(btnId == 'about-menu') {
      scrollTo = aboutSection;
    } else if(btnId == 'services-menu') {
      scrollTo = servicesSection;
    } else if(btnId == 'team-menu') {
      scrollTo = teamSection;
    } else if(btnId == 'portfolio-menu') {
      scrollTo = portfolioSection;
    } else if(btnId == 'contact-menu') {
      scrollTo = contactSection;
    } else {
      scrollTo = bannerSection;
    }

    $([document.documentElement, document.body]).animate({
        scrollTop: $(scrollTo).offset().top - 70
    }, 1500);
  });

});