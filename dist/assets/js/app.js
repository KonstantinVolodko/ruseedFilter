"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
document.addEventListener("DOMContentLoaded", function () {
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
  var File = /*#__PURE__*/function () {
    function File(container) {
      _classCallCheck(this, File);
      this.container = container;
      this.value = this.container.querySelector(".file__value");
      this.text = this.container.querySelector(".file__text");
      if (this.container && this.value && this.text) {
        this.init();
      }
    }
    _createClass(File, [{
      key: "init",
      value: function init() {
        this.value.addEventListener("input", this.handleChange.bind(this));
      }
    }, {
      key: "handleChange",
      value: function handleChange() {
        if (this.value.files[0]) {
          this.text.textContent = this.value.files[0].name;
        }
      }
    }]);
    return File;
  }();
  var Form = /*#__PURE__*/function () {
    function Form(container) {
      _classCallCheck(this, Form);
      this.container = container;
      this.closeBtn = this.container.querySelector(".main-top-form__close-btn");
      if (this.container && this.closeBtn) {
        this.init();
      }
    }
    _createClass(Form, [{
      key: "init",
      value: function init() {
        this.closeBtn.addEventListener("click", this.close.bind(this));
      }
    }, {
      key: "open",
      value: function open() {
        this.container.classList.add("_active");
      }
    }, {
      key: "close",
      value: function close() {
        this.container.classList.remove("_active");
      }
    }]);
    return Form;
  }();
  var Menu = /*#__PURE__*/function () {
    function Menu(header, btn, menu) {
      _classCallCheck(this, Menu);
      this.header = header;
      this.btn = btn;
      this.menu = menu;
      this.isActive = false;
      if (this.header && this.btn && this.menu) {
        this.init();
      }
    }
    _createClass(Menu, [{
      key: "init",
      value: function init() {
        this.btn.addEventListener("click", this.handleClick.bind(this));
      }
    }, {
      key: "handleClick",
      value: function handleClick() {
        if (this.isActive) {
          this.close();
        } else {
          this.open();
        }
      }
    }, {
      key: "open",
      value: function open() {
        this.isActive = true;
        this.header.classList.add("_active");
        this.btn.classList.add("_active");
        this.menu.classList.add("_active");
      }
    }, {
      key: "close",
      value: function close() {
        this.isActive = false;
        this.header.classList.remove("_active");
        this.btn.classList.remove("_active");
        this.menu.classList.remove("_active");
      }
    }]);
    return Menu;
  }();
  var Header = /*#__PURE__*/function () {
    function Header(header) {
      _classCallCheck(this, Header);
      this.header = header;
      this.isMin = false;
      if (this.header) {
        this.init();
      }
    }
    _createClass(Header, [{
      key: "init",
      value: function init() {
        window.addEventListener("scroll", this.scrollHandler.bind(this));
      }
    }, {
      key: "scrollHandler",
      value: function scrollHandler() {
        if (window.scrollY >= window.outerHeight / 2 && !this.isMin) {
          this.isMin = true;
          this.header.classList.add("_min");
        } else if (window.scrollY < window.outerHeight / 2 && this.isMin) {
          this.isMin = false;
          this.header.classList.remove("_min");
        }
      }
    }]);
    return Header;
  }();
  var InfoDropItem = /*#__PURE__*/function () {
    function InfoDropItem(container, items) {
      _classCallCheck(this, InfoDropItem);
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
    _createClass(InfoDropItem, [{
      key: "init",
      value: function init() {
        this.btn.addEventListener("click", this.handleClick.bind(this));
        this.maxHeight = this.content.offsetHeight * 2;
        this.close();
      }
    }, {
      key: "handleClick",
      value: function handleClick() {
        if (this.isOpen) {
          this.close();
        } else {
          this.open();
        }
      }
    }, {
      key: "open",
      value: function open() {
        var _this = this;
        this.container.classList.add("_open");
        this.content.style.maxHeight = this.maxHeight + "px";
        this.isOpen = true;
        this.currentTarget = true;
        this.items.forEach(function (item) {
          if (item !== _this) {
            item.close();
          }
        });
      }
    }, {
      key: "close",
      value: function close() {
        this.container.classList.remove("_open");
        this.content.style.maxHeight = "0px";
        this.isOpen = false;
        this.currentTarget = false;
      }
    }]);
    return InfoDropItem;
  }();
  var Cookie = /*#__PURE__*/function () {
    function Cookie(container) {
      _classCallCheck(this, Cookie);
      this.container = container;
      this.btn = this.container.querySelector(".cookie__btn");
      if (this.container && this.btn) {
        this.init();
      }
    }
    _createClass(Cookie, [{
      key: "init",
      value: function init() {
        this.btn.addEventListener("click", this.close.bind(this));
      }
    }, {
      key: "close",
      value: function close() {
        this.container.classList.add("_hidden");
      }
    }]);
    return Cookie;
  }();
  var cookie = document.querySelector(".cookie");
  if (cookie) {
    new Cookie(cookie);
  }

  // const selectList = document.querySelectorAll(".select");
  // selectList.forEach(item => new Select(item));

  var fileList = document.querySelectorAll(".file");
  fileList.forEach(function (item) {
    return new File(item);
  });
  var sendForm = document.querySelectorAll("[data-send]");
  sendForm.forEach(function (item) {
    item.addEventListener("submit", function (e) {
      e.preventDefault();
      item.classList.add("_send");
    });
  });
  var consultationForm = document.querySelector("[data-consultation-form]");
  if (consultationForm) {
    var form = new Form(consultationForm);
    var btns = document.querySelectorAll("[data-open-consultation]");
    btns.forEach(function (btn) {
      btn.onclick = function () {
        return form.open();
      };
    });
  }
  var careerForm = document.querySelector("[data-career-form]");
  if (careerForm) {
    var _form = new Form(careerForm);
    var _btns = document.querySelectorAll("[data-open-career]");
    _btns.forEach(function (btn) {
      btn.onclick = function () {
        return _form.open();
      };
    });
  }
  var productForm = document.querySelector("[data-product-form]");
  if (productForm) {
    var _form2 = new Form(productForm);
    var _btns2 = document.querySelectorAll("[data-open-product]");
    _btns2.forEach(function (btn) {
      btn.onclick = function () {
        return _form2.open();
      };
    });
  }
  var HEADER = document.querySelector(".header");
  var MENU_BTN = document.querySelector(".header-menu-btn");
  var MENU = document.querySelector(".header-nav");
  if (HEADER && MENU_BTN && MENU) {
    new Menu(HEADER, MENU_BTN, MENU);
    new Header(HEADER);
  }
  if (document.querySelector(".product")) {
    new Swiper(".product-head-swiper", {
      navigation: {
        nextEl: '.product-head-swiper__btn_next',
        prevEl: '.product-head-swiper__btn_prev'
      }
    });
    new Swiper(".product-feedback-swiper", {
      slidesPerView: 1,
      spaceBetween: 100,
      autoHeight: true,
      navigation: {
        nextEl: '.product-feedback-btns__btn_next',
        prevEl: '.product-feedback-btns__btn_prev'
      },
      breakpoints: {
        1025: {
          spaceBetween: 174,
          slidesPerView: 2
        }
      }
    });
  }
  if (document.querySelector(".main-top")) {
    var items = _toConsumableArray(document.querySelector(".main-top__container").children);
    var tl = gsap.timeline({
      delay: 1.5
    });
    items.forEach(function (item) {
      tl.fromTo(item, {
        opacity: 0,
        y: "100%"
      }, {
        opacity: 1,
        y: 0,
        duration: 1
      });
    });
  }
  if (document.querySelector(".production-head__content")) {
    var _items = _toConsumableArray(document.querySelector(".production-head__content").children);
    var _tl = gsap.timeline({
      delay: 1.5
    });
    _items.forEach(function (item) {
      _tl.fromTo(item, {
        opacity: 0,
        y: "100%"
      }, {
        opacity: 1,
        y: 0,
        duration: 1
      });
    });
  }
  var mainInfoCatalog = document.querySelector(".main-info-catalog");
  if (mainInfoCatalog) {
    var _items2 = document.querySelectorAll(".main-info-catalog-list-item");
    _items2.forEach(function (item, i) {
      gsap.from(item, {
        scrollTrigger: {
          trigger: mainInfoCatalog
        },
        scale: 0,
        opacity: 0,
        duration: 1,
        delay: i * 0.3
      });
    });
  }
  var mainBaner = document.querySelector(".main-baner");
  if (mainBaner) {
    gsap.from(".main-baner__title", {
      scrollTrigger: {
        trigger: mainBaner
      },
      x: "-100%",
      opacity: 0,
      duration: 2
    });
  }
  var mainQuestion = document.querySelector(".main-question");
  if (mainQuestion) {
    var _items3 = document.querySelectorAll(".main-question-list-item");
    var TL = gsap.timeline({
      scrollTrigger: {
        trigger: mainQuestion
      }
    });
    _items3.forEach(function (item) {
      TL.from(item, {
        x: "100%",
        opacity: 0,
        duration: 1
      }, "-=0.5");
    });
  }
  var mainRegion = document.querySelector(".main-region");
  if (mainRegion) {
    var _items4 = document.querySelectorAll(".main-region-list-item");
    var _TL = gsap.timeline({
      scrollTrigger: {
        trigger: mainRegion
      }
    });
    _items4.forEach(function (item) {
      _TL.from(item, {
        x: "100%",
        opacity: 0,
        duration: 1
      }, "-=0.5");
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

  var aboutinfo = document.querySelector(".about-info");
  if (aboutinfo) {
    var _items5 = aboutinfo.querySelectorAll(".main-question-list-item");
    _items5.forEach(function (item, i) {
      gsap.from(item, {
        scrollTrigger: {
          trigger: aboutinfo
        },
        x: "100%",
        opacity: 0,
        duration: 1,
        delay: i * 0.5
      });
    });
  }
  var aboutNews = document.querySelector(".about-news");
  if (aboutNews) {
    var _items6 = aboutNews.querySelectorAll(".about-news-list-item");
    _items6.forEach(function (item, i) {
      gsap.from(item, {
        scrollTrigger: {
          trigger: aboutNews
        },
        x: "100%",
        opacity: 0,
        duration: 1,
        delay: i * 0.5
      });
    });
  }
  var dataDropInfoItems = document.querySelectorAll("[data-drop-info]");
  var infoDropItemList = [];
  dataDropInfoItems.forEach(function (item) {
    infoDropItemList.push(new InfoDropItem(item, infoDropItemList));
  });
  var mainQuestionList = document.querySelectorAll(".main-question-list");
  mainQuestionList.forEach(function (list) {
    var items = list.querySelectorAll(".main-question-list-item");
    var row = 1;
    items.forEach(function (item, i) {
      if (i < Math.ceil(items.length / 2)) {
        item.style.gridArea = "".concat(row, "/1/").concat(row + 1, "/2");
      } else {
        item.style.gridArea = "".concat(row, "/2/").concat(row + 1, "/3");
      }
      if (i === Math.ceil(items.length / 2) - 1) {
        row = 1;
      } else {
        row++;
      }
    });
  });
  {
    var mainInfoCatalogListItems = document.querySelectorAll(".main-info-catalog-list-item");
    var row = 1;
    var col_1 = Math.ceil(mainInfoCatalogListItems.length / 3);
    var col_2 = Math.ceil((mainInfoCatalogListItems.length - col_1) / 2);
    mainInfoCatalogListItems.forEach(function (item, i) {
      if (i < col_1) {
        item.style.gridArea = "".concat(row, "/1/").concat(row + 1, "/2");
        if (i + 1 === col_1) row = 0;
      } else if (i >= col_1 && i < col_2 + col_1) {
        item.style.gridArea = "".concat(row, "/2/").concat(row + 1, "/3");
        if (i + 1 === col_1 + col_2) row = 0;
      } else {
        item.style.gridArea = "".concat(row, "/3/").concat(row + 1, "/4");
      }
      row++;
    });
  }
  if (document.querySelector('.info-news-list')) {
    new Swiper(".info-news-list", {
      navigation: {
        nextEl: '.info-news__navigation div button:last-child',
        prevEl: '.info-news__navigation div button:first-child'
      },
      slidesPerView: 1,
      spaceBetween: 30,
      breakpoints: {
        1025: {
          slidesPerView: 3
        },
        500: {
          slidesPerView: 2
        }
      }
    });
  }
  if (document.querySelector('.news-swiper')) {
    new Swiper(".news-swiper", {
      navigation: {
        nextEl: '.news-navigation button:last-child',
        prevEl: '.news-navigation button:first-child'
      },
      slidesPerView: 1,
      grabCursor: true
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
    var select = selectContainer.querySelector('.my-select');
    var selectTrigger = selectContainer.querySelector('.select__btn');
    var selectOptions = selectContainer.querySelector('.main-info-form-select-content');
    var selectOptionsList = selectContainer.querySelectorAll('.main-info-form-select-content li');
    selectTrigger.addEventListener('click', function () {
      selectOptions.style.display = selectOptions.style.display === 'block' ? 'none' : 'block';
    });
    selectOptionsList.forEach(function (option) {
      option.addEventListener('click', function () {
        var country = option.getAttribute('data-country');
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
      var target = event.target;
      if (!selectTrigger.contains(target) && !selectOptions.contains(target)) {
        selectOptions.style.display = 'none';
      }
    });
  }
  function updateDependentSelect(sourceContainer, selectedCountry, dependentSelectId) {
    var dependentContainer = document.querySelector("#".concat(dependentSelectId)).closest('.custom-select');
    if (!dependentContainer) {
      return;
    }
    var dependentSelect = dependentContainer.querySelector('.my-select');
    var dependentOptionsList = dependentContainer.querySelectorAll('.main-info-form-select-content li');
    dependentOptionsList.forEach(function (dependentOption) {
      var optionCountry = dependentOption.getAttribute('data-country');
      if (selectedCountry === '' || selectedCountry === 'Все регионы' || optionCountry === selectedCountry) {
        dependentOption.style.display = 'block';
      } else {
        dependentOption.style.display = 'none';
      }
    });
    dependentSelect.value = ''; // Reset the selected value in the dependent dropdown
  }

  // Применяем функцию к каждому селекту
  var selectContainers = document.querySelectorAll('.custom-select');
  selectContainers.forEach(function (container) {
    initializeCustomSelect(container);
  });
  var filterButton = document.querySelector('#filter-btn');
  filterButton.addEventListener('click', function () {
    var selectedCountry = document.querySelector('#country-select').value;
    var selectedCity = document.querySelector('#city-select').value;
    var selectedProfession = document.querySelector('#profession-select').value;
    console.log(selectedCountry, selectedCity, selectedProfession);
    var questionItems = document.querySelectorAll('.main-question-list-item');
    questionItems.forEach(function (item) {
      var paramsDiv = item.querySelector('.main-question-list-item__params');
      var countryParam = paramsDiv.querySelectorAll('div')[0].querySelector('p:last-of-type').textContent;
      var cityParam = paramsDiv.querySelectorAll('div')[1].querySelector('p:last-of-type').textContent;
      var professionParam = paramsDiv.querySelectorAll('div')[2].querySelector('p:last-of-type').textContent;
      console.log(paramsDiv, countryParam, cityParam, professionParam);
      if ((selectedCountry === '' || selectedCountry === 'Все регионы' || countryParam === selectedCountry) && (selectedCity === '' || selectedCity === 'Все города' || cityParam === selectedCity) && (selectedProfession === '' || selectedProfession === 'Все профессии' || professionParam === selectedProfession)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});