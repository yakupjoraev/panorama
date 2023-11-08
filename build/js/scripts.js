// Custom Scripts
// Custom scripts

// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  //снять классы при клике на элементы меню
  const menuItems = document.querySelectorAll('.menu__item')

  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    })
  });

  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1199.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu();


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav);

function headerSecond() {
  const burger = document.querySelector('.burger-second');
  const menu = document.querySelector('.menu');

  if (!burger) {
    return null;
  }

  let timeoutId;

  // Функция для удаления классов
  function removeClasses() {
    menu.classList.remove('active-second-menu');
    burger.classList.remove('active-burger-second');
  }

  burger.addEventListener('mouseenter', () => {
    menu.classList.add('active-second-menu');
    burger.classList.add('active-burger-second');

    // Очищаем таймер, чтобы предотвратить удаление классов
    clearTimeout(timeoutId);
  });

  burger.addEventListener('mouseleave', () => {
    // Устанавливаем таймер на удаление классов через 2 секунды
    timeoutId = setTimeout(removeClasses, 1000);
  });

  menu.addEventListener('mouseenter', () => {
    // Очищаем таймер, чтобы предотвратить удаление классов
    clearTimeout(timeoutId);
  });

  menu.addEventListener('mouseleave', () => {
    // Устанавливаем таймер на удаление классов через 2 секунды
    timeoutId = setTimeout(removeClasses, 1000);
  });
}

headerSecond();






document.addEventListener('DOMContentLoaded', function () {
  const sliders = document.querySelectorAll('.swiper');
  sliders.forEach(function (slider) {
    const sliderId = slider.getAttribute('data-slider-container');
    new Swiper(slider, {
      spaceBetween: 20,
      slidesPerView: 'auto',
      navigation: {
        nextEl: `[data-slider-next="${sliderId}"]`,
        prevEl: `[data-slider-prev="${sliderId}"]`,
      },
      pagination: {
        el: `[data-slider-pagination="${sliderId}"]`,
      },
      breakpoints: {
        320: {
          spaceBetween: 20,
        },
        991: {
          spaceBetween: 15,
        },
      },
    });
  });
});

function dateInputs() {
  // Получаем все элементы с атрибутом data-date-input
  const dateInputs = document.querySelectorAll('[data-date-input]');

  if (!dateInputs) {
    return null
  }

  // Проходимся по каждому элементу и создаем для него экземпляр IMask
  dateInputs.forEach(dateInput => {
    IMask(dateInput, {
      mask: Date,
      min: new Date(2010, 0, 1),
      max: new Date(2100, 0, 1),
      lazy: true,

    });
  });

}
dateInputs();

function formCount() {
  // Получаем все элементы с атрибутом data-form-count
  const countContainers = document.querySelectorAll('[data-form-count]');

  if (!countContainers) {
    return null;
  }

  // Функция для обновления класса .minimum и значения счетчика
  function updateCount(container) {
    const countMinusButton = container.querySelector('[data-form-count-minus]');
    const countPlusButton = container.querySelector('[data-form-count-plus]');
    const countSumElement = container.querySelector('[data-form-count-sum]');
    const minValue = 1;

    // Функция для обновления значений и атрибутов
    function updateCountValue() {
      if (currentValue <= minValue) {
        container.classList.add('minimum');
      } else {
        container.classList.remove('minimum');
      }
      countSumElement.value = currentValue;
      countSumElement.setAttribute('data-value', currentValue);
    }

    let currentValue = parseInt(countSumElement.value);

    countPlusButton.addEventListener('click', () => {
      currentValue++;
      updateCountValue();
    });

    countMinusButton.addEventListener('click', () => {
      if (currentValue > minValue) {
        currentValue--;
        updateCountValue();
      }
    });

    // Обработчик события input для обновления data-value при ручном вводе
    countSumElement.addEventListener('input', () => {
      const newValue = parseInt(countSumElement.value);
      if (!isNaN(newValue) && newValue >= minValue) {
        currentValue = newValue;
        updateCountValue();
      } else {
        countSumElement.value = currentValue;
      }
    });

    // Инициализация значений
    updateCountValue();
  }

  // Проходим по всем счетчикам и применяем функцию
  countContainers.forEach(updateCount);
}

formCount();


function phoneMask() {
  const formContainer = document.querySelector('[data-form-container]');

  if (!formContainer) {
    return null
  }

  let formPhones = document.querySelectorAll('[data-form-phone]');

  formPhones.forEach(formPhone => {

    IMask(formPhone, {
      mask: '+{7}(000)000-00-00'
    }
    )
  });


}
phoneMask();

function terraceSlider() {
  const container = document.querySelector('.terrace');

  if (!container) {
    return null
  }

  const swiper = new Swiper('.terrace__slider', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".terrace__arrow--next",
      prevEl: ".terrace__arrow--prev",
    },
  })
}
terraceSlider();


function hallsSlider() {
  const container = document.querySelector('.halls');

  if (!container) {
    return null
  }

  const swiper = new Swiper('.halls__black-slider', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".halls__black-arrow--next",
      prevEl: ".halls__black-arrow--prev",
    },
  })
}
hallsSlider();

function cakesSlider() {
  const container = document.querySelector('.cakes-slider');

  if (!container) {
    return null
  }

  const swiper = new Swiper('.cakes-slider', {
    // Default parameters
    slidesPerView: 1.2,
    navigation: {
      nextEl: ".cakes-slider__arrow--next",
      prevEl: ".cakes-slider__arrow--prev",
    },

    breakpoints: {
      767: {
        slidesPerView: 2,
      },
      1025: {
        slidesPerView: 4,
      },
    },
  })
}
cakesSlider();

function hotelHallsSlider() {
  const container = document.querySelector('.hotel-halls-slider');

  if (!container) {
    return null
  }

  const swiper = new Swiper('.hotel-halls-slider', {
    // Default parameters
    slidesPerView: 1.2,
    navigation: {
      nextEl: ".hotel-halls-slider__arrow--next",
      prevEl: ".hotel-halls-slider__arrow--prev",
    },

    breakpoints: {
      767: {
        slidesPerView: 2,
      },
      1025: {
        slidesPerView: 4,
      },
    },
  })
}
hotelHallsSlider();

function foodSlider() {
  const container = document.querySelector('.food-slider');

  if (!container) {
    return null
  }

  const swiper = new Swiper('.food-slider', {
    // Default parameters
    slidesPerView: 1.2,
    navigation: {
      nextEl: ".food-slider__arrow--next",
      prevEl: ".food-slider__arrow--prev",
    },

    breakpoints: {
      767: {
        slidesPerView: 2,
      },
      1025: {
        slidesPerView: 4,
      },
    },
  })
}
foodSlider();

function tabs(headerSelector, tabSelector, contentSelector, activeClass, display = 'flex') {
  const container = document.querySelector('.tabs');
  if (!container) {
    return null
  }

  const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector)
  function hideTabContent() {
    content.forEach(item => {
      item.style.display = 'none'
    });
    tab.forEach(item => {
      item.classList.remove(activeClass)
    });
  }
  function showTabContent(i = 0) {
    content[i].style.display = display
    tab[i].classList.add(activeClass)
  }
  hideTabContent()
  showTabContent()
  header.addEventListener('click', e => {
    const target = e.target
    if (target.classList.contains(tabSelector.replace(/\./, '')) ||
      target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
      tab.forEach((item, i) => {
        if (target == item || target.parentNode == item) {
          hideTabContent()
          showTabContent(i)
        }
      });
    }
  })
}

// ПЕРВЫЙ аргумент - класс всего нашего хедера табов.
// ВТОРОЙ аргумент - класс конкретного элемента, при клике на который будет переключатся таб.
// ТРЕТИЙ аргумент - класс того блока, который будет переключаться.
// ЧЕТВЕРТЫЙ аргумент - класс активности, который будет добавлятся для таба, который сейчас активен.
tabs('.tabs__header', '.tabs__header-item', '.tabs__content-item', 'active');


function moreText() {
  const container = document.querySelector('[data-more-wrapper]');

  if (!container) {
    return null
  }

  const toggleButton = container.querySelector("[data-more-btn]");
  const textBlock = container.querySelector("[data-more-text]");

  container.addEventListener("click", function () {
    this.classList.toggle("more");
    textBlock.classList.toggle("more");

    if (textBlock) {
      if (textBlock.classList.contains("more")) {
        toggleButton.textContent = "Свернуть";
      } else {
        toggleButton.textContent = "Читать далее";
      }
    }
  });
}

moreText();

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};

function map() {
  const container = document.querySelector('.contacts')
  if (!container) {
    return null
  }

  let center = [54.180225, 45.177524];

  function init() {


    let map = new ymaps.Map('contacts-map', {
      center: center,
      zoom: 17
    });

    let placemark = new ymaps.Placemark(center, {}, {
      iconLayout: 'default#image',
      iconImageHref: '../img/icons/pin.svg',
      iconImageSize: [42, 42],
      iconImageOffset: [-14, -64]
    })

    map.geoObjects.add(placemark);

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  }

  ymaps.ready(init);
}

map();


const openModalBtns = document.querySelectorAll('.open-modal-btn');
const closeModalBtns = document.querySelectorAll('.close-modal-btn');
const modals = document.querySelectorAll('.modal');

openModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.dataset.modalId;
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
  });
});

closeModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    modal.classList.remove('show');
  });
});

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    event.target.classList.remove('show');
  }
});


$(function () {
  $('[data-select-input]').each(function () {
    const selectmenuInstance = $(this).selectmenu();
    console.log(selectmenuInstance);
  });
});

