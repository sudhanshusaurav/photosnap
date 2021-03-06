const DOMstrings = (DOMstr = {
    navLink: document.querySelectorAll(".nav__link"),
    burger: document.querySelector(".burger"),
    burgerLine: document.querySelector(".line"),
    headerNav: document.querySelector(".header__nav"),
    priceTogglerBtn: document.querySelector(".price__toggler"),
    togglerBtn: document.querySelector(".price__toggler-btn"),
    monthly: document.getElementById("monthly"),
    yearly: document.getElementById("yearly"),
    serviceTable: document.querySelector(".service-table"),
    gallery: document.querySelector(".section-gallery"),
    basicRate: document.querySelector(".basic-rate"),
    proRate: document.querySelector(".pro-rate"),
    businessRate: document.querySelector(".business-rate"),
    planDuration: Array.from(document.querySelectorAll(".plan-duration")),
  }),
  Data = (table = {
    tableData: [
      { feature: "Unlimited Story Posting", basic: 1, pro: 1, business: 1 },
      { feature: "Unlimited Photo Upload", basic: 1, pro: 1, business: 1 },
      { feature: "Embedding Custom Content", basic: 0, pro: 1, business: 1 },
      { feature: "Customize Metadata", basic: 0, pro: 1, business: 1 },
      { feature: "Advanced Metrics", basic: 0, pro: 0, business: 1 },
      { feature: "Photo Downloads", basic: 0, pro: 0, business: 1 },
      { feature: "Search Engine Indexing", basic: 0, pro: 0, business: 1 },
      { feature: "Custom Analytics", basic: 0, pro: 0, business: 1 },
    ],
    galleryData: [
      {
        src: "mountains.jpg",
        title: "The Mountains",
        credit: "by John Appleseed",
        date: "April 16th 2020",
      },
      {
        src: "cityscapes.jpg",
        title: "Sunset Cityscapes",
        credit: "by Benjamin Cruz",
        date: "April 14th 2020",
      },
      {
        src: "18-days-voyage.jpg",
        title: "18 Days Voyage",
        credit: "by Alexei Borodin",
        date: "April 11th 2020",
      },
      {
        src: "architecturals.jpg",
        title: "Architecturals",
        credit: "by Samantha Brooke",
        date: "April 9th 2020",
      },
      {
        src: "world-tour.jpg",
        title: " World Tour 2019",
        credit: "by Timothy Wagner",
        date: "April 7th 2020",
      },
      {
        src: "unforeseen-corners.jpg",
        title: "Unforeseen Corners",
        credit: "by William Malcolm",
        date: "April 3rd 2020",
      },
      {
        src: "king-on-africa.jpg",
        title: "King on Africa: Part II",
        credit: "by Tim Hillenburg",
        date: "March 29th 2020",
      },
      {
        src: "trip-to-nowhere.jpg",
        title: "The Trip to Nowhere",
        credit: "by Felicia Rourke",
        date: "March 21st 2020",
      },
      {
        src: "rage-of-the-sea.jpg",
        title: "Rage of The Sea",
        credit: "by Mohammed Abdul",
        date: "March 19th 2020",
      },
      {
        src: "running-free.jpg",
        title: "Running Free",
        credit: "by Michelle",
        date: "March 16th 2020",
      },
      {
        src: "behind-the-waves.jpg",
        title: "Behind the Waves",
        credit: "by Lamarr Wilson",
        date: "March 11th 2020",
      },
      {
        src: "calm-waters.jpg",
        title: "Calm Waters",
        credit: "by Samantha Brooke",
        date: "March 9th 2020",
      },
      {
        src: "milky-way.jpg",
        title: "The Milky Way",
        credit: "by Benjamin Cruz",
        date: "March 5th 2020",
      },
      {
        src: "dark-forest.jpg",
        title: "Night at The Dark Forest",
        credit: "by  Mohammed Abdul",
        date: "March 4th 2020",
      },
      {
        src: "somwarpet.jpg",
        title: "Somwarpet’s Beauty",
        credit: "by Michelle",
        date: "March 1st 2020",
      },
      {
        src: "land-of-dreams.jpg",
        title: "Land of Dreams",
        credit: "by Michelle",
        date: "March 1st 2020",
      },
    ],
  }),
  Toggler = (function (e) {
    return {
      menuToggler: function () {
        e.burgerLine.classList.toggle("line--open"),
          e.headerNav.classList.toggle("header__nav--open");
      },
      priceToggler: function () {
        e.priceTogglerBtn.classList.contains("price__toggler--active")
          ? (e.priceTogglerBtn.classList.remove("price__toggler--active"),
            (e.monthly.style.fontWeight = "700"),
            (e.yearly.style.fontWeight = "300"),
            (e.basicRate.textContent = "$19.00"),
            (e.proRate.textContent = "$39.00"),
            (e.businessRate.textContent = "$99.00"),
            e.planDuration.forEach((plan) => {
              plan.textContent = "per month";
            }))
          : (e.priceTogglerBtn.classList.add("price__toggler--active"),
            (e.yearly.style.fontWeight = "700"),
            (e.monthly.style.fontWeight = "300"),
            (e.basicRate.textContent = "$190.00"),
            (e.proRate.textContent = "$390.00"),
            (e.businessRate.textContent = "$990.00"),
            e.planDuration.forEach((plan) => {
              plan.textContent = "per year";
            }));
      },
    };
  })(DOMstrings);
DOMstrings.burger.addEventListener("click", Toggler.menuToggler);
const renderGallery = (function (e, t) {
  return {
    renderGalleryImage: function () {
      e.galleryData.forEach((e) => {
        const r = `\n        <div class="gallery-card">\n          <picture>\n            <source\n              srcset="img/stories/mobile/${e.src}"\n              media="(max-width: 676.98px)"\n            />\n\n            <img src="img/stories/desktop/${e.src}" alt="gallery-img" />\n          </picture>\n          <div class="gallery-card__text">\n            <h3 class="text-light">${e.title}</h3>\n            <h4 class="text-light">${e.credit}</h4>\n            <a href="#" class="btn-secondary-light"\n              >Read Story <span class="btn-icon">&rarr;</span></a\n            >\n          </div>\n        </div>\n        `;
        t.gallery.insertAdjacentHTML("beforeend", r);
      });
    },
  };
})(Data, DOMstrings);
"Photosnap | Stories" === document.title && renderGallery.renderGalleryImage();
const RenderTable = (function (e, t) {
  return {
    renderServiceTable: function () {
      e.tableData.forEach((e) => {
        const r = `\n<tr>\n                <td>${
          e.feature
        }</td>\n                <td>${
          1 === e.basic ? "&check;" : "&nbsp;"
        }</td>\n                <td>${
          1 === e.pro ? "&check;" : "&nbsp;"
        }</td>\n                <td>${
          1 === e.business ? "&check;" : "&nbsp;"
        }</td>\n              </tr>\n`;
        t.serviceTable.insertAdjacentHTML("beforeend", r);
      });
    },
  };
})(Data, DOMstrings);
"Photosnap | Pricing" === document.title &&
  (RenderTable.renderServiceTable(),
  DOMstrings.priceTogglerBtn.addEventListener("click", Toggler.priceToggler));
