$(document).ready(function () {
  const translate = document.querySelectorAll(".translate");
  const main_title = document.querySelector(".main-title");
  const header = document.querySelector("header");
  const header_logo_icon = document.querySelector(".header-logo-icon");
  const header_logo_title = document.querySelector(".header-logo-title");
  const header_menu_btn = document.querySelector(".menu-btn");
  const header_menu_basket = document.querySelector(".menu-basket");
  const header_menu_btn_close = document.querySelector(".menu-close");
  const header_menu_link = document.getElementsByClassName("header-menu-link");
  const shadow = document.querySelector(".shadow");
  const header_background = document.querySelector(".header-background");

  let header_height = header.offsetHeight;

  window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;

    translate.forEach(element => {
      let speed = element.dataset.speed;
      element.style.transform = `translateY(${scroll * speed}px)`;

      main_title.style.opacity = -scroll / (header_height / 1.5) + 1;
      shadow.style.opacity = scroll / header_height;
      header_background.style.opacity = scroll / header_height;
      if (scroll < 80) {
        header_logo_title.style.color = "#E7E6DD";
        for (let item of header_menu_link) {
          item.style.color = "#E7E6DD";
        }
        if (header_menu_btn) { header_menu_btn.style.filter = "brightness(0) saturate(100%) invert(99%) sepia(2%) saturate(915%) hue-rotate(345deg) brightness(93%) contrast(95%)"; };
        if (header_menu_basket) { header_menu_basket.style.filter = "brightness(0) saturate(100%) invert(99%) sepia(2%) saturate(915%) hue-rotate(345deg) brightness(93%) contrast(95%)"; };
        if (header_menu_btn_close) { header_menu_btn_close.style.filter = "brightness(0) saturate(100%) invert(99%) sepia(2%) saturate(915%) hue-rotate(345deg) brightness(93%) contrast(95%)"; };
        
      } else if (scroll > 80 && scroll < 120) {
        header_logo_title.style.color = "#B9B8B1";
        for (let item of header_menu_link) {
          item.style.color = "#B9B8B1";
        }
        if (header_menu_btn) { header_menu_btn.style.filter = "brightness(0) saturate(100%) invert(78%) sepia(8%) saturate(172%) hue-rotate(15deg) brightness(95%) contrast(87%)"; };
        if (header_menu_basket) { header_menu_basket.style.filter = "brightness(0) saturate(100%) invert(78%) sepia(8%) saturate(172%) hue-rotate(15deg) brightness(95%) contrast(87%)"; };
        if (header_menu_btn_close) { header_menu_btn_close.style.filter = "brightness(0) saturate(100%) invert(78%) sepia(8%) saturate(172%) hue-rotate(15deg) brightness(95%) contrast(87%)"; };

      } else if (scroll > 120 && scroll < 180) {
        header_logo_title.style.color = "#94938E";
        for (let item of header_menu_link) {
          item.style.color = "#94938E";
        }
        if (header_menu_btn) { header_menu_btn.style.filter = "brightness(0) saturate(100%) invert(75%) sepia(0%) saturate(1223%) hue-rotate(157deg) brightness(80%) contrast(75%)";};
        if (header_menu_basket) { header_menu_basket.style.filter = "brightness(0) saturate(100%) invert(75%) sepia(0%) saturate(1223%) hue-rotate(157deg) brightness(80%) contrast(75%)";};
        if (header_menu_btn_close) { header_menu_btn_close.style.filter = "brightness(0) saturate(100%) invert(75%) sepia(0%) saturate(1223%) hue-rotate(157deg) brightness(80%) contrast(75%)";};
        
      } else if (scroll > 180 && scroll < 240) {
        header_logo_title.style.color = "#767672";
        for (let item of header_menu_link) {
          item.style.color = "#767672";
        }
        if (header_menu_btn) { header_menu_btn.style.filter = "brightness(0) saturate(100%) invert(48%) sepia(5%) saturate(221%) hue-rotate(22deg) brightness(95%) contrast(92%)";};
        if (header_menu_basket) { header_menu_basket.style.filter = "brightness(0) saturate(100%) invert(48%) sepia(5%) saturate(221%) hue-rotate(22deg) brightness(95%) contrast(92%)";};
        if (header_menu_btn_close) { header_menu_btn_close.style.filter = "brightness(0) saturate(100%) invert(48%) sepia(5%) saturate(221%) hue-rotate(22deg) brightness(95%) contrast(92%)";};
        
      } else if (scroll > 240 && scroll < 300) {
        header_logo_title.style.color = "#5E5E5B";
        for (let item of header_menu_link) {
          item.style.color = "#5E5E5B";
        }
        if (header_menu_btn) { header_menu_btn.style.filter = "brightness(0) saturate(100%) invert(44%) sepia(0%) saturate(3935%) hue-rotate(170deg) brightness(81%) contrast(92%)";};
        if (header_menu_basket) { header_menu_basket.style.filter = "brightness(0) saturate(100%) invert(44%) sepia(0%) saturate(3935%) hue-rotate(170deg) brightness(81%) contrast(92%)";};
        if (header_menu_btn_close) { header_menu_btn_close.style.filter = "brightness(0) saturate(100%) invert(44%) sepia(0%) saturate(3935%) hue-rotate(170deg) brightness(81%) contrast(92%)";};
        
      } else if (scroll > 300 && scroll < 360) {
        header_logo_title.style.color = "#4B4B49";
        for (let item of header_menu_link) {
          item.style.color = "#4B4B49";
        }
        if (header_menu_btn) { header_menu_btn.style.filter = "brightness(0) saturate(100%) invert(29%) sepia(6%) saturate(176%) hue-rotate(21deg) brightness(92%) contrast(88%)";};
        if (header_menu_basket) { header_menu_basket.style.filter = "brightness(0) saturate(100%) invert(29%) sepia(6%) saturate(176%) hue-rotate(21deg) brightness(92%) contrast(88%)";};
        if (header_menu_btn_close) { header_menu_btn_close.style.filter = "brightness(0) saturate(100%) invert(29%) sepia(6%) saturate(176%) hue-rotate(21deg) brightness(92%) contrast(88%)";};
        
      } else if (scroll > 360 && scroll < 420) {
        header_logo_title.style.color = "#3C3C3A";
        for (let item of header_menu_link) {
          item.style.color = "#3C3C3A";
        }
        if (header_menu_btn) { header_menu_btn.style.filter = "brightness(0) saturate(100%) invert(18%) sepia(1%) saturate(2588%) hue-rotate(21deg) brightness(106%) contrast(85%)";};
        if (header_menu_basket) { header_menu_basket.style.filter = "brightness(0) saturate(100%) invert(18%) sepia(1%) saturate(2588%) hue-rotate(21deg) brightness(106%) contrast(85%)";};
        if (header_menu_btn_close) { header_menu_btn_close.style.filter = "brightness(0) saturate(100%) invert(18%) sepia(1%) saturate(2588%) hue-rotate(21deg) brightness(106%) contrast(85%)";};
        
      } else if (scroll > 420 && scroll < 480) {
        header_logo_title.style.color = "#30302E";
        for (let item of header_menu_link) {
          item.style.color = "#30302E";
        }
        if (header_menu_btn) { header_menu_btn.style.filter = "brightness(0) saturate(100%) invert(19%) sepia(0%) saturate(5851%) hue-rotate(142deg) brightness(81%) contrast(89%)";};
        if (header_menu_basket) { header_menu_basket.style.filter = "brightness(0) saturate(100%) invert(19%) sepia(0%) saturate(5851%) hue-rotate(142deg) brightness(81%) contrast(89%)";};
        if (header_menu_btn_close) { header_menu_btn_close.style.filter = "brightness(0) saturate(100%) invert(19%) sepia(0%) saturate(5851%) hue-rotate(142deg) brightness(81%) contrast(89%)";};
        
      } else if (scroll > 480 && scroll < 540) {
        header_logo_title.style.color = "#1E1E1E";
        for (let item of header_menu_link) {
          item.style.color = "#1E1E1E";
        }
        if (header_menu_btn) { header_menu_btn.style.filter = "brightness(0) saturate(100%) invert(7%) sepia(17%) saturate(25%) hue-rotate(314deg) brightness(97%) contrast(90%)";};
        if (header_menu_basket) { header_menu_basket.style.filter = "brightness(0) saturate(100%) invert(7%) sepia(17%) saturate(25%) hue-rotate(314deg) brightness(97%) contrast(90%)";};
        if (header_menu_btn_close) { header_menu_btn_close.style.filter = "brightness(0) saturate(100%) invert(7%) sepia(17%) saturate(25%) hue-rotate(314deg) brightness(97%) contrast(90%)";};
        
      } else if (scroll > 540) {
        header_logo_title.style.color = "#000000";
        for (let item of header_menu_link) {
          item.style.color = "#000000";
        }

        if (header_menu_btn) { header_menu_btn.style.filter = "brightness(0) saturate(100%) invert(13%) sepia(18%) saturate(0%) hue-rotate(156deg) brightness(94%) contrast(99%)";};
        if (header_menu_basket) { header_menu_basket.style.filter = "brightness(0) saturate(100%) invert(13%) sepia(18%) saturate(0%) hue-rotate(156deg) brightness(94%) contrast(99%)";};
        if (header_menu_btn_close) { header_menu_btn_close.style.filter = "brightness(0) saturate(100%) invert(13%) sepia(18%) saturate(0%) hue-rotate(156deg) brightness(94%) contrast(99%)";};
      }
    })
  })

  // обработка мобильного меню
  var menuButton = $(".menu-btn");
  var menuButtonClose = $(".menu-close");
  var goTopButton = $("#button");
  var navbarMenuItem = $(".navbar-menu__link");

  navbarMenuItem.on('click', function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
    menuButton.toggleClass("hiden");
    menuButtonClose.toggleClass("hiden");
    goTopButton.toggleClass("hiden");
  })
  menuButton.on('click', function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
    menuButton.toggleClass("hiden");
    menuButtonClose.toggleClass("hiden");
    goTopButton.toggleClass("hiden");
  })
  menuButtonClose.on('click', function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
    menuButton.toggleClass("hiden");
    menuButtonClose.toggleClass("hiden");
    goTopButton.toggleClass("hiden");
  })

  // кнопка возврата в начало страницы
  var btn = $('#button');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

  //валидация email
  jQuery.validator.addMethod("emailfull", function(value, element) {
    return this.optional(element) || /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test(value);
  }, "Please enter valid email address!");

  // Обработка форм
  $('.form').each(function () {
    $(this).validate({
      rules: {
        email: {
          required: true,
          email: true,
          emailfull: true
        },
        phone: {
          required: true,
          minlength:18
        }
      },
      errorClass: "invalid",
      messages: {
        name: {
          required: "Пожалуйста укажите ваше имя",
          minlength: "Минимальная длина поля 2 символа",
        },
        phone: {
          required: "Пожалуйста укажите ваш номер телефона",
          minlength: "Минимальная длина поля 10 символов",
        },
        email: {
          required: "Пожалуйста укажите ваш email",
          email: "Формат email - name@domain.com",
        },
      },
    });
  });

  // обработка нажатия ESC
  $(document).keyup(function (e) {
    if (e.keyCode === 27) {
      closeModal(e);
      closeModalSertificate(e);
    }
  });
  function closeModal(event) {
    event.preventDefault();
    $('input').val('');
    $('textarea').val('');
    $("input").removeClass("invalid");
    $("label").remove(".invalid");
  }

  // Маска номера телефона
  $(".phoneInput").mask("+7 (999) 999-99-99");

  // Модальное окно со слайдером с сертификатами
  var modalSertificateButton = $('[data-toggle=modal-certificate]');
  var closeModalButton = $(".menu-close-certificate");
  var modalOverlay = $(".modal-certificate__overlay");

  modalSertificateButton.on('click', openModalSertificate);
  closeModalButton.on('click', closeModalSertificate);
  modalOverlay.on('click', closeModalSertificate);

  function openModalSertificate() {
    var modalOverlay = $(".modal-certificate__overlay");
    var modalDialog = $(".modal-certificate__dialog");
    var closeModalButton = $(".menu-close-certificate");
    closeModalButton.addClass("menu-close-certificate--visible");
    modalOverlay.addClass("modal-certificate__overlay--visible");
    modalDialog.addClass("modal-certificate__dialog--visible");
  }
  function closeModalSertificate(event) {
    event.preventDefault();
    var modalOverlay = $(".modal-certificate__overlay");
    var modalDialog = $(".modal-certificate__dialog");
    var closeModalButton = $(".menu-close-certificate");
    closeModalButton.removeClass("menu-close-certificate--visible");
    modalOverlay.removeClass("modal-certificate__overlay--visible");
    modalDialog.removeClass("modal-certificate__dialog--visible");
  }

  var certificatesSlider = new Swiper('.certificates-slider', {
    // Optional parameters
    loop: true,
    navigation: {
      prevEl: '.certificates-buttons__left',
      nextEl: '.certificates-buttons__right',
    },

  });

});