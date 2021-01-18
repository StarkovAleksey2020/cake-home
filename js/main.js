$(document).ready(function () {
  var menuButton = $(".menu-button");
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

// Модальное окно со слайдером с портфолио
  var modalPortfolioButton = $('[data-toggle=modal-portfolio]');
  var closeModalButtonPortfolio = $(".menu-close-portfolio");
  var modalOverlayPortfolio = $(".modal-portfolio__overlay");

  modalPortfolioButton.on('click', openModalPortfolio);
  closeModalButtonPortfolio.on('click', closeModalPortfolio);
  modalOverlayPortfolio.on('click', closeModalPortfolio);

  function openModalPortfolio() {
    var modalOverlay = $(".modal-portfolio__overlay");
    var modalDialog = $(".modal-portfolio__dialog");
    var closeModalButton = $(".menu-close-portfolio");
    closeModalButton.addClass("menu-close-portfolio--visible");
    modalOverlay.addClass("modal-portfolio__overlay--visible");
    modalDialog.addClass("modal-portfolio__dialog--visible");
  }
  function closeModalPortfolio(event) {
    event.preventDefault();
    var modalOverlay = $(".modal-portfolio__overlay");
    var modalDialog = $(".modal-portfolio__dialog");
    var closeModalButton = $(".menu-close-portfolio");
    closeModalButton.removeClass("menu-close-portfolio--visible");
    modalOverlay.removeClass("modal-portfolio__overlay--visible");
    modalDialog.removeClass("modal-portfolio__dialog--visible");
  }
// Модальное окно со слайдером с weather
  var modalWeatherButton = $('[data-toggle=modal-portfolio-weather]');
  var closeModalButtonWeather = $(".menu-close-weather");
  var modalOverlayWeather = $(".modal-weather__overlay");

  modalWeatherButton.on('click', openModalWeather);
  closeModalButtonWeather.on('click', closeModalWeather);
  modalOverlayWeather.on('click', closeModalWeather);

  function openModalWeather() {
    var modalOverlay = $(".modal-weather__overlay");
    var modalDialog = $(".modal-weather__dialog");
    var closeModalButton = $(".menu-close-weather");
    closeModalButton.addClass("menu-close-weather--visible");
    modalOverlay.addClass("modal-weather__overlay--visible");
    modalDialog.addClass("modal-weather__dialog--visible");
  }
  function closeModalWeather(event) {
    event.preventDefault();
    var modalOverlay = $(".modal-weather__overlay");
    var modalDialog = $(".modal-weather__dialog");
    var closeModalButton = $(".menu-close-weather");
    closeModalButton.removeClass("menu-close-weather--visible");
    modalOverlay.removeClass("modal-weather__overlay--visible");
    modalDialog.removeClass("modal-weather__dialog--visible");
  }

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

  var certificatesSlider = new Swiper('.certificates-slider', {
    // Optional parameters
    loop: true,
    navigation: {
      prevEl: '.certificates-buttons__left',
      nextEl: '.certificates-buttons__right',
    },
  });
  var portfolioSlider = new Swiper('.portfolio-slider', {
    // Optional parameters
    loop: true,
  
    navigation: {
      prevEl: '.portfolio-buttons__left',
      nextEl: '.portfolio-buttons__right',
    },
  });
  var weatherSlider = new Swiper('.weather-slider', {
    // Optional parameters
    loop: true,
  
    navigation: {
      prevEl: '.weather-buttons__left',
      nextEl: '.weather-buttons__right',
    },
  });


    $(window).scroll(function(){
      $('.skills').bgscroll({
        direction: 'bottom', // направление bottom или top
        bgpositionx: 50, // x позиция фонового изображения, от 0 до 100, размерность в %, 50 - означает по центру
        debug: false, // Режим отладки
        min:0, // минимальное положение (в %) на которое может смещаться фон
        max:100 // максимальное положение (в %) на которое может смещаться фон
      });
    })
    $(window).scroll(function(){
      $('.works').bgscroll({
        direction: 'bottom', // направление bottom или top
        bgpositionx: 50, // x позиция фонового изображения, от 0 до 100, размерность в %, 50 - означает по центру
        debug: false, // Режим отладки
        min:0, // минимальное положение (в %) на которое может смещаться фон
        max:100 // максимальное положение (в %) на которое может смещаться фон
      });
    })

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
    $(document).keyup(function (e) {
    if (e.keyCode === 27) {
      closeModal(e);
      closeModalSertificate(e);
      closeModalPortfolio(e);
      closeModalWeather(e);
    }
  });

  function openModal() {
    $('input').val('');
    $('textarea').val('');
    $("input").removeClass("invalid");
    $("label").remove(".invalid");
  }
  function closeModal(event) {
    event.preventDefault();
    $('input').val('');
    $('textarea').val('');
    $("input").removeClass("invalid");
    $("label").remove(".invalid");
}

// Маска номера телефона
  $(".phoneInput").mask("+7 (999) 999-99-99");

// i18next
i18next.init({
        lng: 'ru',
        resources: {
          en: {
            translation: {
              bodyAll: {
                menuItemICan: 'I can',
                menuItemStudy: 'Study',
                menuItemPortfolio: 'Portfolio',
                menuItemJob: 'Job',
                menuItemContacts: 'Contacts',
                hello: 'Hello !',
                helloTitle: 'I am Georgy Starkov, a developer of mobile applications for the iOS platform (iOS Developer)',
                helloSubTitle: 'The page was created specifically for potential employers: here are my projects from the portfolio, a description of my skills and contact information',
                viewPortfolio: 'View Portfolio',
                development: 'Development',
                developmentText: 'I have practical experience in developing applications in Swift from scratch with subsequent release and support for updates.',
                design: 'Design',
                designText: 'I use Storyboard and design the app to meet Apple\'s HIG standards, which allows the app to pass validation when published to the AppStore.',
                apiText: 'I have practical skills in building applications using the backend (REST API)',
                architecture: 'Architecture',
                architectureText: 'Familiar with MVC, MVVM, SOLID, DRY, KISS, YAGNI principles.',
                dateStorage: 'Data storage',
                dataStorageText: 'I mostly prefer to use Realm and also familiar with CoreData, UserDefaults, NSCache, Keychain.',
                technologies: 'Applied technologies',
                technologiesText: 'UIKit, AutoLayout, MapKit, CoreLocation, CALayer, Firebase cloud messaging, CocoaPods, Alamofire, SDWebImage, Kingfisher, GCD, Unit & UI tests, TDD.',
                trainingTitle: 'Where did I study',
                trainingSubTitleOwn: 'On my own',
                trainingTextOwn: 'I started by watching videos on YouTube - I followed the authors of practical examples. Then I wrote small applications, consulted in chats, used educational literature, checked my skills by testing.',
                trainingSubTitleTraining: 'Courses',
                trainingTextTraining0: '2019 - iOS Programmer (GeekBrains, iOS Application Developer) Duration - 4 months During the training, I mastered the basic tools of the Swift language. Upon completion of the training, he passed testing in accordance with the mastered course program.',
                trainingTextTraining1: '2019 - iOS Application Development (Swiftbook, iOS Programmer). Duration - 6 months During the training in the video lessons, I mastered the basic tools of the Swift language, OOP, collection-based applications (tableView, collectionView), the UIKit framework, CALayer, CoreData & Realm databases, working with multithreading, using network requests & API, GIT, Firebase for push notifications, MVC architecture, MVVM, SOLID principles, and application development via TDD.',
                trainingTextTraining2: '2020 - Course iOS 13 Apple development Bootcamp (Udemy, Angela Yu) Duration - December 2020 to present. The main content is to consolidate the previously studied material with an introduction to changes in mobile development technologies.',
                workedTitle: 'Where i worked',
                workedIt: '2020 - Slata, GC, Irkutsk www.slata.ru, retail. Engineer of support and software development department Development from scratch of the application "My Slata" in Swift with the subsequent release and support for updates.',
                workedSubTitle: 'Period before IT',
                workedText: '2013 - 2018 - Mobile TeleSystems (MTS), Irkutsk. www.mts.ru, telecommunications, communications. Sales Manager. Sale of home Internet and television services. Conducting trainings "cold selling", "customer orientation", "working with objection".',
                portfolioBlockTitle: 'Portfolio',
                projectTitleSlata: '«My Slata»',
                projectSlataTask: 'A task',
                projectSlataTaskText: 'To develop an informational mobile application for the Slata supermarket chain in the city of Irkutsk. The application should inform about the company\'s promotions, provide a list of stores on the map, form a shopping list, provide an opportunity to use discount coupons, scan the barcode of a product with the subsequent display of its value, and also allow the user to use an individual loyalty program.',
                projectSlataTaskTerm: 'Term',
                projectSlataTaskTermValue: '6 weeks',
                projectSlataDescriptionTitle: 'Project Description',
                projectSlataDescription: 'The application interface is built in accordance with the design layout developed by the Slata company. The application uses the API provided by the main backend of the company, and as part of the customer loyalty program, the API of Loymax Solutions was used. After the delivery of the main functionality of the application, tasks were set to create additional options, for example, to create a price reader with the ability to display the qrCode (containing the names of goods and the total price) for self-service checkouts. This functionality allows you to scan one qrCode instead of each barcode of the purchased goods, which saves time and allows you to go straight to payment and leave the store. The app has been validated against Apple Standards (HIG) and published on the AppStore.',
                projectWeatherAppTitle: 'My project on GitHub',
                projectWeatherAppSubTitle: 'Description',
                projectWeatherAppText: 'The application provides the user with the ability to get the temperature for the desired city, as well as for the current location. The interface has a dark and light mode. The interface is built in Interface Builder (Storyboard). Used MVC architecture, used by CoreLocation for work with location and URLSession for network requests. No third party libraries are used.',
                contactsTitle: 'Contacts for communication',
                contactsReady: 'Currently open to job offers and ready to participate in projects on a full or part time basis. Remote work is preferable, but I am ready to consider the option of moving to another city.',
                contactsWriteMe: 'Write me',
                contactsName: 'Name *',
                contactsPhone: 'Phone *',
                contactsMessage: 'Message',
                contactsSend: 'Send',
                contactsObligatory: '* Obligatory field',

              },
            }
          },
          ru: {
            translation: {
              bodyAll: {
                menuItemICan: 'Я умею',
                menuItemStudy: 'Где учился',
                menuItemPortfolio: 'Портфолио',
                menuItemJob: 'Где работал',
                menuItemContacts: 'Контакты',
                hello: 'Привет !',
                helloTitle: 'Я - Георгий Старков, разработчик мобильных приложений для платформы iOS (iOS Developer)',
                helloSubTitle: 'Страница создана специально для потенциальных работодателей: здесь имеются мои проекты из портфолио, описание моих навыков и контактные данные',
                viewPortfolio: 'Смотреть портфолио',
                development: 'Разработка',
                developmentText: 'Имею практический опыт разработки с нуля приложения на языке Swift с последующим релизом и поддержкой обновлений.',
                design: 'Проектирование',
                designText: 'Использую Storyboard и проектирую приложение в соответствии со стандартами интерфейса компании Apple (HIG), что позволяет приложению успешно проходить проверку при публикации в AppStore.',
                apiText: 'Имею практические навыки построения приложений с использованием бэкенда (REST API)',
                architecture: 'Архитектура',
                architectureText: 'Знаком с MVC, MVVM, принципами SOLID, DRY, KISS, YAGNI.',
                dateStorage: 'Хранение данных',
                dataStorageText: 'В основном предпочитаю использовать Realm, а также знаком с CoreData, UserDefaults, NSCache, Keychain.',
                technologies: 'Применяемые технологии',
                technologiesText: 'UIKit, AutoLayout, MapKit, CoreLocation, CALayer, Firebase cloud messaging, CocoaPods, Alamofire, SDWebImage, Kingfisher, GCD, Unit & UI tests, TDD.',
                trainingTitle: 'Где учился',
                trainingSubTitleOwn: 'Самостоятельно',
                trainingTextOwn: 'Начинал с просмотра роликов на YouTube - повторял за авторами практических примеров. Далее - писал небольшие приложения, консультировался в чатах, использовал учебную литературу. Проверял полученные навыки тестированием.',
                trainingSubTitleTraining: 'Курсы',
                trainingTextTraining0: '2019 - Программист iOS (GeekBrains, Разработчик приложений на iOS).Продолжительность - 4 месяца За время обучения освоил базовые инструменты языка Swift. По окончании обучения прошел тестирование в соответствии с освоенной программой курса.',
                trainingTextTraining1: '2019 - Разработка приложений на iOS (Swiftbook, Программист iOS). Продолжительность - 6 месяцев За время обучения на видеоуроках освоил базовые инструменты языка Swift, ООП, приложения на основе коллекций (tableView, collectionView), фреймворк UIKit, CALayer, базы данных CoreData & Realm, работа с многопоточностью, использование сетевых запросов & API, GIT, Firebase для отправки пуш уведомлений, архитектуры MVC, MVVM, принципы SOLID, а также разработка приложений через TDD.',
                trainingTextTraining2: '2020 - Курс iOS 13 Apple development Bootcamp (Udemy, Angela Yu) Продолжительсность - с декабря 2020 по настоящее время. Основное содержание - закрепление изученного ранее материала с ознакомлением изменений в технологиях мобильной разработки.',
                workedTitle: 'Где работал',
                workedIt: '2020 - Слата, ГК, Иркутск www.slata.ru, розничная торговля. Инженер отдела сопровождения и разработки программного обеспечения. Разработка с нуля приложения «Моя Слата» на языке Swift споследующим релизом и поддержкой обновлений.',
                workedSubTitle: 'Период до IT',
                workedText: '2013 - 2018 - Мобильные ТелеСистемы (МТС), Иркутск. www.mts.ru, телекоммуникации, связь. Специалист по продажам.  Продажа услуг домашнего интернета и телевидения. Проведение тренингов «холодные продажи», «ориентация на клиента», «работа с возражением».',
                portfolioBlockTitle: 'Портфолио',
                projectTitleSlata: '«Моя Слата»',
                projectSlataTask: 'Задача',
                projectSlataTaskText: 'Разработать информационное мобильное приложение сети супермаркетов «Слата» в городе Иркутск. Приложение должно информировать об акциях компании, предоставлять список магазинов на карте, формировать список покупок, предоставлять возможность воспользоваться купонами на скидку, сканировать штрих-код товара с последующим выводом его стоимости, а также позволять пользователю воспользоваться индивидуальной программой лояльности.',
                projectSlataTaskTerm: 'Срок',
                projectSlataTaskTermValue: '6 недель',
                projectSlataDescriptionTitle: 'Описание проекта',
                projectSlataDescription: 'Интерфейс приложения построен в соответствии с дизайн-макетом, разработанным компанией «Слата». Приложение использует API предоставляемый основным бэкендом компании, а в рамках программы лояльности клиентов — использовался API компании Loymax Solutions. После сдачи основного функционала приложения были поставлены задачи по созданию дополнительных опций, например - создание считывателя цен с возможностю вывести qrCode (содержащий наименования товаров и общей цены) для касс самообслуживания. Данный функционал позволяет сканировать один qrCode вместо каждого штрихкода приобретаемых товаров, что экономит время и позволяет   сразу перейти к оплате и покинуть магазин. Приложение прошло проверку на соответствие стандартам Apple (HIG) и было опубликовано в AppStore.',
                projectWeatherAppTitle: 'Мой проект на GitHub',
                projectWeatherAppSubTitle: 'Описание',
                projectWeatherAppText: 'Приложение предоставляет пользователю возможность получить температуру по нужному городу, а также по текущей геопозиции. Интерфейс имеет темный и светлый режим. Интерфейс построен в Interface Builder (Storyboard). Используемая архитектура MVC, используется CoreLocation для работы с локацией и URLSession для сетевых запросов. Сторонние библиотеки не используются.',
                contactsTitle: 'Контакты для связи',
                contactsReady: 'В настоящий момент открыт для предложений о работе.Готов участвовать в проектах на полный или частичный рабочий день. Удаленная работа предпочтительна, однако готов рассмотреть вариант с переездом в другой город.',
                contactsWriteMe: 'Напишите мне',
                contactsName: 'Имя *',
                contactsPhone: 'Телефон *',
                contactsMessage: 'Сообщение',
                contactsSend: 'Отправить',
                contactsObligatory: '* Обязательное поле',
              }
            }
          },
        }
      }, function(err, t) {
        i18nextJquery.init(i18next, $);
        $('.bodyAll').localize();

    $('.lang-select').click(function () {
    /*i18next.changeLanguage(this.innerHTML);*/
      var langEn = $(".lang-en");
      var langRu = $(".lang-ru");
      if (this.type === 'ru') {
        langRu.addClass("lang-select-image--pressed");
        langEn.removeClass("lang-select-image--pressed");
      }
      if (this.type === 'en') {
        langEn.addClass("lang-select-image--pressed");
        langRu.removeClass("lang-select-image--pressed");
      }
      i18next.changeLanguage(this.type);
        $('.bodyAll').localize();
        });
});
  
  var tabsItem = $('.portfolio-header-menu__item');
  var contentItem = $('.portfolio-cards');

  tabsItem.on("click", function(event) {
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass("portfolio-header-menu__item--active");
    contentItem.removeClass("portfolio-cards--visible");
    $(activeContent).addClass("portfolio-cards--visible");
    $(this).addClass("portfolio-header-menu__item--active");
  });
  
});