const body = document.querySelector("body");
const toggleContrast = document.querySelector(".toggle-contrast");
  toggleContrast.addEventListener("click", (e) => {
    e.preventDefault();
    body.classList.toggle("contrast")
  }
);
const toggleColor = document.querySelector(".toggle-color");
  toggleColor.addEventListener("click", (e) => {
    e.preventDefault();
    body.classList.toggle("color")
  }
);
const toggleType = document.querySelector(".toggle-type");
  toggleType.addEventListener("click", (e) => {
    e.preventDefault();
    body.classList.toggle("serif")
  }
);

var scrollToTopBtn = document.querySelector(".logo");
var rootElement = document.documentElement;

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);