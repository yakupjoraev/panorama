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
burgerMenu()


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
window.addEventListener('scroll', fixedNav)


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
      max: new Date(2030, 0, 1),
      lazy: true,
    });
  });

}
dateInputs();

function formCount() {
  // Получаем все элементы с атрибутом data-form-count
  const countContainers = document.querySelectorAll('[data-form-count]');

  if (!countContainers) {
    return null
  }

  // Функция для обновления класса .minimum и значения счетчика
  function updateCount(container) {
    const countMinusButton = container.querySelector('[data-form-count-minus]');
    const countPlusButton = container.querySelector('[data-form-count-plus]');
    const countSumElement = container.querySelector('[data-form-count-sum]');
    const countValue = parseInt(countSumElement.getAttribute('data-value'));

    const minValue = 1;
    let currentValue = parseInt(countSumElement.textContent);

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

    function updateCountValue() {
      if (currentValue <= minValue) {
        container.classList.add('minimum');
      } else {
        container.classList.remove('minimum');
      }
      countSumElement.textContent = currentValue;
      countSumElement.setAttribute('data-value', currentValue); // Обновляем атрибут data-value
    }
  }

  // Проходим по всем счетчикам и применяем функцию
  countContainers.forEach(updateCount);
}

formCount();
