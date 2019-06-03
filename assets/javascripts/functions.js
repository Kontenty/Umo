$(document).ready(function () {

  /* Preloader */
  $(window).on('load', function () {
    $('body').addClass('loaded');
  });

  /* Smooth Scroll */
  $('a.smooth-scroll').on("click", function (e) {
      var anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $(anchor.attr('href')).offset().top - 50
      }, 1000);
      e.preventDefault();
  });

  /* modal */
  $('#aboutUsModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('who') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
    var new_content = "/assets/includes/" + recipient + ".html";
    modal.find(".modal-content").load(new_content);
  })

  /* lessons */
  $(".lesson-unit").click(function() {
    var new_content = "/assets/includes/" + "l-" + $(this).data("lesson") + ".html";
    $('.lessons-belt').addClass("slided");
    $('.lesson-content-container').show(300);
    $('#lesson-placeholder').load(new_content);
    $('html, body').stop().animate({
          scrollTop: $('#lessons').offset().top
      }, 500);
  });
  $(".lesson-return").click(function(){
    $('.lessons-belt').removeClass("slided");
    $('.lesson-content-container').hide(800);
  });
  $(document).on('click', '#go-to-reservation', function(){
    console.log("idz zapisz");
      $('html, body').stop().animate({ scrollTop: $('#reservation').offset().top }, 800);
      setTimeout(function(){
        $('.lessons-belt').removeClass("slided");
        $('.lesson-content-container').hide();
      }, 800);
  });

  $(window).scroll(function(){
    /* nav button and menu*/
    var wScroll = $(this).scrollTop();
    if (wScroll > $(window).height()*0.98) {
      $("#nav-btn-container").removeClass("turn-white");
      $("#nav-menu").removeClass("turn-white");
    } else {
      $("#nav-btn-container").addClass("turn-white");
      $("#nav-menu").addClass("turn-white");
    }

    /* faces animation */
    if(wScroll > $('#about-us').offset().top - ($(window).height() / 2)) {
      $('.face-big').addClass('is-showing');
    }
    if(wScroll > $('#about-us').offset().top - ($(window).height() / 5)) {
        $('.face-small').each(function(i){
            setTimeout(function(){
                $('.face-small').eq(i).addClass('is-showing');
            }, 150 * (i + 1));
        });
    }

    /* Scroll To Top */		
    if (wScroll >= $("#project").offset().top * 0.5) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });

    $('.scroll-to-top').click(function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, 800);
    });
    
    $('form').change(function(){
      console.log($(this));
      var regBtn = $(this).find('input.reg-accept');
      var subBtn = $(this).find('button[type=submit]');
      var inputName = $(this).find('#inputName').val();
      var inputEmail = $(this).find('#inputEmail').val();
      var inputSchool = $(this).find('#inputSchool').val();
      if (regBtn.prop('checked') && inputName && inputEmail && inputSchool) {
        subBtn.prop("disabled", false);
      } else {
        subBtn.prop("disabled", true)
      }
    });




});