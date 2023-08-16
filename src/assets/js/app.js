document.addEventListener("DOMContentLoaded", () => {
  // function getCitiesByCountry(countryValue) {
  //   const cityData = {
  //     "value-2": [
  //       { value: "city-1-1", text: "City 1-1" },
  //       { value: "city-1-2", text: "City 1-2" },
  //       // ... more cities for Brazil
  //     ],
  //     "value-3": [
  //       { value: "city-2-1", text: "City 2-1" },
  //       { value: "city-2-2", text: "City 2-2" },
  //       // ... more cities for Russia
  //     ],
  //     "value-4": [
  //       { value: "city-3-1", text: "City 3-1" },
  //       { value: "city-3-2", text: "City 3-2" },
  //       // ... more cities for India
  //     ],
  //   };

  //   return cityData[countryValue] || [];
  // }

  // class Select {
  //   constructor(container) {
  //     this.container = container;

  //     this.btnText = this.container.querySelector(".select__btn span");
  //     this.value = this.container.querySelector(".select__value");
  //     this.btns = this.container.querySelectorAll(".select__item");
  //     this.selectContent = this.container.querySelector(".main-info-form-select-content");

  //     // Set selectInstance property
  //     this.container.selectInstance = this;

  //     if (this.container && this.btnText && this.value && this.btns && this.selectContent) {
  //       this.init();
  //     }

  //     document.addEventListener("click", (event) => {
  //       if (!this.container.contains(event.target)) {
  //         this.selectContent.classList.remove("open");
  //         this.isContentOpen = false;
  //       }
  //     });

  //   }

  //   init() {
  //     this.btnText.addEventListener("click", this.toggleSelectContent.bind(this));
  //     this.btns.forEach((btn, i) => {
  //       const value = btn.getAttribute("data-value");
  //       const text = btn.textContent;
  //       btn.addEventListener("click", this.setValue.bind(this, value, text));
  //     });
  //     this.isContentOpen = false;
  //   }

  //   toggleSelectContent() {
  //     const allSelects = document.querySelectorAll(".select");
  //     allSelects.forEach(select => {
  //       const selectInstance = select.selectInstance;
  //       if (selectInstance !== this && selectInstance.isContentOpen) {
  //         selectInstance.selectContent.classList.remove("open");
  //         selectInstance.isContentOpen = false;
  //       }
  //     });

  //     this.selectContent.classList.toggle("open");
  //     this.isContentOpen = !this.isContentOpen;
  //   }

  //   setCityValue(value, text) {
  //     const cityValueInput = this.container.nextElementSibling.querySelector(".select__value");
  //     const cityBtnText = this.container.nextElementSibling.querySelector(".select__btn span");

  //     cityValueInput.value = value;
  //     cityBtnText.textContent = text;
  //     this.toggleSelectContent();
  //   }

  //   setValue(value, text) {
  //     if (this.value.value !== value) {
  //       this.value.value = value;
  //       this.btnText.textContent = text;

  //       // Reset the city select to "Город" when the country changes
  //       const cityValueInput = this.container.nextElementSibling.querySelector(".select__value");
  //       const cityBtnText = this.container.nextElementSibling.querySelector(".select__btn span");
  //       cityValueInput.value = ""; // Reset the city value
  //       cityBtnText.textContent = "Город"; // Reset the city button text

  //       if (this.container.classList.contains("region-select-container")) {
  //         const citySelect = this.container.nextElementSibling.querySelector(".main-info-form-select-content");

  //         citySelect.innerHTML = "";

  //         const cities = getCitiesByCountry(value);

  //         cities.forEach(city => {
  //           const cityButton = document.createElement("button");
  //           cityButton.setAttribute("type", "button");
  //           cityButton.classList.add("select__item", "main-info-form-select-content__btn");
  //           cityButton.setAttribute("data-value", city.value);
  //           cityButton.textContent = city.text;
  //           cityButton.addEventListener("click", this.setCityValue.bind(this, city.value, city.text));
  //           citySelect.appendChild(cityButton);
  //         });
  //       }
  //     }

  //     this.toggleSelectContent();
  //   }
  // }

  class File {
    constructor(container) {
      this.container = container;
      this.value = this.container.querySelector(".file__value");
      this.text = this.container.querySelector(".file__text");

      if (this.container && this.value && this.text) {
        this.init();
      }
    }

    init() {
      this.value.addEventListener("input", this.handleChange.bind(this));
    }

    handleChange() {
      if (this.value.files[0]) {
        this.text.textContent = this.value.files[0].name;
      }
    }
  }

  class Form {
    constructor(container) {
      this.container = container;
      this.closeBtn = this.container.querySelector(".main-top-form__close-btn");
      if (this.container && this.closeBtn) {
        this.init();
      }
    }

    init() {
      this.closeBtn.addEventListener("click", this.close.bind(this));
    }

    open() {
      this.container.classList.add("_active");
    }

    close() {
      this.container.classList.remove("_active");
    }
  }

  class Menu {
    constructor(header, btn, menu) {
      this.header = header;
      this.btn = btn;
      this.menu = menu;
      this.isActive = false;

      if (this.header && this.btn && this.menu) {
        this.init();
      }
    }

    init() {
      this.btn.addEventListener("click", this.handleClick.bind(this));
    }

    handleClick() {
      if (this.isActive) {
        this.close();
      } else {
        this.open();
      }
    }

    open() {
      this.isActive = true;
      this.header.classList.add("_active");
      this.btn.classList.add("_active");
      this.menu.classList.add("_active");
    }

    close() {
      this.isActive = false;
      this.header.classList.remove("_active");
      this.btn.classList.remove("_active");
      this.menu.classList.remove("_active");
    }
  }

  class Header {
    constructor(header) {
      this.header = header;
      this.isMin = false;

      if (this.header) {
        this.init();
      }
    }

    init() {
      window.addEventListener("scroll", this.scrollHandler.bind(this));
    }

    scrollHandler() {
      if (window.scrollY >= window.outerHeight / 2 && !this.isMin) {
        this.isMin = true;
        this.header.classList.add("_min");
      } else if (window.scrollY < window.outerHeight / 2 && this.isMin) {
        this.isMin = false;
        this.header.classList.remove("_min");
      }
    }
  }

  class InfoDropItem {
    constructor(container, items) {
      this.container = container;
      this.btn = this.container.querySelector(".main-question-list-item__btn");
      this.content = this.container.querySelector(".main-question-list-item__content");
      this.items = items;
      this.maxHeight = 0;
      this.isOpen = false;
      this.currentTarget = false;

      if (this.container && this.btn && this.content) {
        this.init();
      }
    }

    init() {
      this.btn.addEventListener("click", this.handleClick.bind(this));
      this.maxHeight = this.content.offsetHeight * 2;
      this.close();
    }

    handleClick() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }

    open() {
      this.container.classList.add("_open");
      this.content.style.maxHeight = this.maxHeight + "px";
      this.isOpen = true;
      this.currentTarget = true;

      this.items.forEach(item => {
        if (item !== this) {
          item.close();
        }
      })
    }

    close() {
      this.container.classList.remove("_open");
      this.content.style.maxHeight = "0px";
      this.isOpen = false;
      this.currentTarget = false;
    }
  }

  class Cookie {
    constructor(container) {
      this.container = container;
      this.btn = this.container.querySelector(".cookie__btn");

      if (this.container && this.btn) {
        this.init();
      }
    }

    init() {
      this.btn.addEventListener("click", this.close.bind(this));
    }

    close() {
      this.container.classList.add("_hidden");
    }
  }

  const cookie = document.querySelector(".cookie");
  if (cookie) {
    new Cookie(cookie);
  }

  // const selectList = document.querySelectorAll(".select");
  // selectList.forEach(item => new Select(item));

  const fileList = document.querySelectorAll(".file");
  fileList.forEach(item => new File(item));

  const sendForm = document.querySelectorAll("[data-send]");
  sendForm.forEach(item => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();
      item.classList.add("_send");
    })
  });

  const consultationForm = document.querySelector("[data-consultation-form]");
  if (consultationForm) {
    const form = new Form(consultationForm);
    const btns = document.querySelectorAll("[data-open-consultation]");
    btns.forEach(btn => {
      btn.onclick = () => form.open();
    })
  }

  const careerForm = document.querySelector("[data-career-form]");
  if (careerForm) {
    const form = new Form(careerForm);
    const btns = document.querySelectorAll("[data-open-career]");
    btns.forEach(btn => {
      btn.onclick = () => form.open();
    })
  }

  const productForm = document.querySelector("[data-product-form]");
  if (productForm) {
    const form = new Form(productForm);
    const btns = document.querySelectorAll("[data-open-product]");
    btns.forEach(btn => {
      btn.onclick = () => form.open();
    })
  }

  const HEADER = document.querySelector(".header");
  const MENU_BTN = document.querySelector(".header-menu-btn");
  const MENU = document.querySelector(".header-nav");
  if (HEADER && MENU_BTN && MENU) {
    new Menu(HEADER, MENU_BTN, MENU);

    new Header(HEADER);
  }

  if (document.querySelector(".product")) {
    new Swiper(".product-head-swiper", {
      navigation: {
        nextEl: '.product-head-swiper__btn_next',
        prevEl: '.product-head-swiper__btn_prev',
      },
    });

    new Swiper(".product-feedback-swiper", {
      slidesPerView: 1,
      spaceBetween: 100,
      autoHeight: true,
      navigation: {
        nextEl: '.product-feedback-btns__btn_next',
        prevEl: '.product-feedback-btns__btn_prev',
      },
      breakpoints: {
        1025: {
          spaceBetween: 174,
          slidesPerView: 2
        },
      }
    })
  }



  if (document.querySelector(".main-top")) {
    const items = [...document.querySelector(".main-top__container").children];

    const tl = gsap.timeline({
      delay: 1.5,
    });

    items.forEach(item => {
      tl.fromTo(item, {
        opacity: 0,
        y: "100%",
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
      })
    });
  }

  if (document.querySelector(".production-head__content")) {
    const items = [...document.querySelector(".production-head__content").children];

    const tl = gsap.timeline({
      delay: 1.5,
    });

    items.forEach(item => {
      tl.fromTo(item, {
        opacity: 0,
        y: "100%",
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
      })
    });
  }

  const mainInfoCatalog = document.querySelector(".main-info-catalog");
  if (mainInfoCatalog) {
    const items = document.querySelectorAll(".main-info-catalog-list-item");

    items.forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: mainInfoCatalog,
        },
        scale: 0,
        opacity: 0,
        duration: 1,
        delay: i * 0.3,
      })
    });
  }

  const mainBaner = document.querySelector(".main-baner");
  if (mainBaner) {
    gsap.from(".main-baner__title", {
      scrollTrigger: {
        trigger: mainBaner,
      },
      x: "-100%",
      opacity: 0,
      duration: 2,
    })
  }

  const mainQuestion = document.querySelector(".main-question");
  if (mainQuestion) {
    const items = document.querySelectorAll(".main-question-list-item");

    const TL = gsap.timeline({
      scrollTrigger: {
        trigger: mainQuestion,
      }
    });

    items.forEach(item => {
      TL.from(item, {
        x: "100%",
        opacity: 0,
        duration: 1,
      }, "-=0.5")
    });
  }

  const mainRegion = document.querySelector(".main-region");
  if (mainRegion) {
    const items = document.querySelectorAll(".main-region-list-item");

    const TL = gsap.timeline({
      scrollTrigger: {
        trigger: mainRegion,
      }
    });

    items.forEach(item => {
      TL.from(item, {
        x: "100%",
        opacity: 0,
        duration: 1,
      }, "-=0.5")
    });
  }

  // const aboutMainList = document.querySelector(".about-main-list");
  // if (aboutMainList) {
  //   const items = aboutMainList.querySelectorAll(".main-question-list-item");

  //   items.forEach((item, i) => {
  //     gsap.from(item, {
  //       scrollTrigger: {
  //         trigger: aboutMainList,
  //       },
  //       x: "100%",
  //       opacity: 0,
  //       duration: 1,
  //       delay: i * 0.5,
  //     })
  //   });
  // }

  const aboutinfo = document.querySelector(".about-info");
  if (aboutinfo) {
    const items = aboutinfo.querySelectorAll(".main-question-list-item");

    items.forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: aboutinfo,
        },
        x: "100%",
        opacity: 0,
        duration: 1,
        delay: i * 0.5,
      })
    });
  }

  const aboutNews = document.querySelector(".about-news");
  if (aboutNews) {
    const items = aboutNews.querySelectorAll(".about-news-list-item");

    items.forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: aboutNews,
        },
        x: "100%",
        opacity: 0,
        duration: 1,
        delay: i * 0.5,
      })
    });
  }

  const dataDropInfoItems = document.querySelectorAll("[data-drop-info]");
  const infoDropItemList = [];
  dataDropInfoItems.forEach(item => {
    infoDropItemList.push(new InfoDropItem(item, infoDropItemList));
  });

  const mainQuestionList = document.querySelectorAll(".main-question-list");
  mainQuestionList.forEach(list => {
    const items = list.querySelectorAll(".main-question-list-item");
    let row = 1;

    items.forEach((item, i) => {
      if (i < Math.ceil(items.length / 2)) {
        item.style.gridArea = `${row}/1/${row + 1}/2`;
      } else {
        item.style.gridArea = `${row}/2/${row + 1}/3`;
      }

      if (i === Math.ceil(items.length / 2) - 1) {
        row = 1;
      } else {
        row++;
      }
    });
  });

  {
    const mainInfoCatalogListItems = document.querySelectorAll(".main-info-catalog-list-item");

    let row = 1;
    const col_1 = Math.ceil(mainInfoCatalogListItems.length / 3);
    const col_2 = Math.ceil((mainInfoCatalogListItems.length - col_1) / 2);
    mainInfoCatalogListItems.forEach((item, i) => {
      if (i < col_1) {
        item.style.gridArea = `${row}/1/${row + 1}/2`;

        if (i + 1 === col_1) row = 0;
      } else if (i >= col_1 && i < col_2 + col_1) {
        item.style.gridArea = `${row}/2/${row + 1}/3`;

        if (i + 1 === col_1 + col_2) row = 0;
      } else {
        item.style.gridArea = `${row}/3/${row + 1}/4`;
      }
      row++;
    });
  }

  if (document.querySelector('.info-news-list')) {
    new Swiper(".info-news-list", {
      navigation: {
        nextEl: '.info-news__navigation div button:last-child',
        prevEl: '.info-news__navigation div button:first-child',
      },
      slidesPerView: 1,
      spaceBetween: 30,
      breakpoints: {
        1025: {
          slidesPerView: 3
        },

        500: {
          slidesPerView: 2
        },
      }
    });
  }

  if (document.querySelector('.news-swiper')) {
    new Swiper(".news-swiper", {
      navigation: {
        nextEl: '.news-navigation button:last-child',
        prevEl: '.news-navigation button:first-child',
      },
      slidesPerView: 1,
      grabCursor: true,
    });
  }

  // let filterBtn = document.querySelector('#filter-btn')
  // let offers = document.querySelectorAll('.main-question-list-item__params')
  // let filterSelectContent = document.querySelectorAll('.select__btn span')

  // filterBtn.addEventListener('click', e => {
  //   console.log(document.querySelectorAll('.select__btn span'))
  // })

  // function doesItemMatchFilters(item, filters) {
  //   const params = item.querySelectorAll(".main-question-list-item__params div p:last-child");

  //   return Array.from(params).some(param => {
  //     const paramText = param.innerText.trim();
  //     return filters.some(filter => paramText.includes(filter));
  //   });
  // }

  // // Функция для применения фильтрации и обновления видимости элементов
  // function doesItemMatchFilters(item, filters) {
  //   const params = item.querySelectorAll(".main-question-list-item__params div p:last-child");

  //   return filters.every(filter => {
  //     return Array.from(params).some(param => param.innerText.trim().includes(filter));
  //   });
  // }

  // // Функция для применения фильтрации и обновления видимости элементов
  // function applyFilters() {
  //   const regionSelectValue = document.querySelector(".region-select-container .main-info-form__input span").innerText;
  //   const citySelectValue = document.querySelector(".city-select-container .main-info-form__input span").innerText;
  //   const professionSelectValue = document.querySelector(".profession-select-container .main-info-form__input span").innerText;

  //   const filters = [regionSelectValue, citySelectValue, professionSelectValue].filter(value => value !== "");

  //   items.forEach(item => {
  //     const isVisible = doesItemMatchFilters(item, filters);
  //     item.classList.toggle("hidden", !isVisible);
  //   });
  // }

  // const filterButton = document.getElementById("filter-btn");
  // const items = document.querySelectorAll(".main-question-list-item");
  // const selects = document.querySelectorAll(".main-info-form__input span");

  // // Добавляем обработчик на кнопку
  // filterButton.addEventListener("click", applyFilters);

  // // Добавляем обработчик на изменение значений в селектах
  // selects.forEach(select => {
  //   select.addEventListener("change", applyFilters);
  // });




  function initializeCustomSelect(selectContainer) {
    const select = selectContainer.querySelector('.my-select');
    const selectTrigger = selectContainer.querySelector('.select__btn');
    const selectOptions = selectContainer.querySelector('.main-info-form-select-content');
    const selectOptionsList = selectContainer.querySelectorAll('.main-info-form-select-content li');

    selectTrigger.addEventListener('click', function () {
      selectOptions.style.display = selectOptions.style.display === 'block' ? 'none' : 'block';
    });

    selectOptionsList.forEach(function (option) {
      option.addEventListener('click', function () {
        const country = option.getAttribute('data-country');
        selectTrigger.textContent = option.textContent;
        select.value = option.getAttribute('data-value');
        selectOptions.style.display = 'none';

        // Update the city-select dropdown based on the selected country
        if (select.id === 'country-select') {
          updateDependentSelect(selectContainer, country, 'city-select');
        }
      });
    });

    // Закрытие выпадающего списка при клике вне элемента
    document.addEventListener('click', function (event) {
      const target = event.target;
      if (!selectTrigger.contains(target) && !selectOptions.contains(target)) {
        selectOptions.style.display = 'none';
      }
    });
  }

  function updateDependentSelect(sourceContainer, selectedCountry, dependentSelectId) {
    const dependentContainer = document.querySelector(`#${dependentSelectId}`).closest('.custom-select');
  
    if (!dependentContainer) {
      return;
    }
  
    const dependentSelect = dependentContainer.querySelector('.my-select');
    const dependentOptionsList = dependentContainer.querySelectorAll('.main-info-form-select-content li');
  
    dependentOptionsList.forEach(function (dependentOption) {
      const optionCountry = dependentOption.getAttribute('data-country');
      if (selectedCountry === '' || selectedCountry === 'Все регионы' || optionCountry === selectedCountry) {
        dependentOption.style.display = 'block';
      } else {
        dependentOption.style.display = 'none';
      }
    });
  
    dependentSelect.value = ''; // Reset the selected value in the dependent dropdown
  }

  // Применяем функцию к каждому селекту
  const selectContainers = document.querySelectorAll('.custom-select');
  selectContainers.forEach(function (container) {
    initializeCustomSelect(container);
  });

  const filterButton = document.querySelector('#filter-btn');

  filterButton.addEventListener('click', function () {
    const selectedCountry = document.querySelector('#country-select').value;
    const selectedCity = document.querySelector('#city-select').value;
    const selectedProfession = document.querySelector('#profession-select').value;
  
    console.log(selectedCountry, selectedCity, selectedProfession);
  
    const questionItems = document.querySelectorAll('.main-question-list-item');
  
    questionItems.forEach(function (item) {
      const paramsDiv = item.querySelector('.main-question-list-item__params');
      const countryParam = paramsDiv.querySelectorAll('div')[0].querySelector('p:last-of-type').textContent;
      const cityParam = paramsDiv.querySelectorAll('div')[1].querySelector('p:last-of-type').textContent;
      const professionParam = paramsDiv.querySelectorAll('div')[2].querySelector('p:last-of-type').textContent;
  
      console.log(paramsDiv, countryParam, cityParam, professionParam);
  
      if (
        (selectedCountry === '' || selectedCountry === 'Все регионы' || countryParam === selectedCountry) &&
        (selectedCity === '' || selectedCity === 'Все города' || cityParam === selectedCity) &&
        (selectedProfession === '' || selectedProfession === 'Все профессии' || professionParam === selectedProfession)
      ) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
})