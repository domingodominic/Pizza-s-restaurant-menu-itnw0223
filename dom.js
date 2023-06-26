var slider = document.querySelector(".slider");

var home = document.querySelector(".home");

var title = document.querySelector(".title");
var desc = document.querySelector(".description");

var sliderChild = slider.children;
sliderChild.item(0).addEventListener("mouseover", () => {
  home.style.backgroundImage = `url("./images/767398.jpg")`;

  title.innerText = "Pepperoni";
  desc.innerText = `Dive into the world of pizza, where crispy crust meets a delightful fusion of flavors. Savory tomato sauce and melted cheese harmonize atop a canvas of dough, while toppings like pepperoni, mushrooms, and fresh herbs add bursts of taste. Pizza is a slice of pure culinary bliss, delivering satisfaction with every bite.`;
});
sliderChild.item(0).addEventListener("mouseout", () => {
  home.style.backgroundImage = `url("./images/826919.jpg")`;
  home.style.backgroundSize = "cover !important";

  title.innerText = "Margherita";
  desc.innerText = `Experience the divine pleasure of pizza, a culinary marvel that enchants with every bite. A crispy crust embraces a symphony of flavors, from tangy tomato sauce to melty cheese. Toppings range from classic pepperoni to gourmet delights like artichokes and truffle oil. Pizza is an irresistible indulgence that satisfies cravings like no other`;
});

var sliderChild = slider.children;
sliderChild.item(1).addEventListener("mouseover", () => {
  home.style.backgroundImage = `url("./images/826922.jpg")`;

  title.innerText = "Four Cheese";
  desc.innerText = `Discover the magic of pizza, a culinary masterpiece that ignites the senses. From the first bite, a symphony of flavors unfolds—crispy crust, tangy tomato sauce, and a melange of melted cheeses. Toppings like pepperoni, olives, and onions add a tantalizing twist. Pizza is an iconic delight that brings joy to every palate.`;
});
sliderChild.item(1).addEventListener("mouseout", () => {
  home.style.backgroundImage = `url("./images/826919.jpg")`;
  home.style.backgroundSize = "cover !important";

  title.innerText = "Margherita";
  desc.innerText = `Experience the divine pleasure of pizza, a culinary marvel that enchants with every bite. A crispy crust embraces a symphony of flavors, from tangy tomato sauce to melty cheese. Toppings range from classic pepperoni to gourmet delights like artichokes and truffle oil. Pizza is an irresistible indulgence that satisfies cravings like no other`;
});

var sliderChild = slider.children;
sliderChild.item(2).addEventListener("mouseover", () => {
  home.style.backgroundImage = `url("./images/767277.jpg")`;

  title.innerText = "Mediterranean";
  desc.innerText = `Indulge in the irresistible allure of pizza, where a thin, crispy crust cradles a world of flavors. Tangy tomato sauce mingles with a melty blend of cheeses, while an array of toppings such as pepperoni, mushrooms, and fresh basil create a symphony of taste. Pizza is pure culinary satisfaction, slice by slice.`;
});
sliderChild.item(2).addEventListener("mouseout", () => {
  home.style.backgroundImage = `url("./images/826919.jpg")`;
  home.style.backgroundSize = "cover !important";

  title.innerText = "Margherita";
  desc.innerText = `Experience the divine pleasure of pizza, a culinary marvel that enchants with every bite. A crispy crust embraces a symphony of flavors, from tangy tomato sauce to melty cheese. Toppings range from classic pepperoni to gourmet delights like artichokes and truffle oil. Pizza is an irresistible indulgence that satisfies cravings like no other.`;
});

var cartList = document.querySelector(".cart-list");

document.querySelector(".cart").addEventListener("click", () => {
  cartList.classList.toggle("visible");

  // if (cartList.style.right == "-100%") {
  //   cartList.style.right = "0";
  // } else if (cartList.style.right == "0") {
  //   cartList.style.right = "-100%";
  // }
});

var loader = document.querySelector(".loader");
setTimeout(function loaderOFF() {
  loader.style.display = "none";
}, 4000);

// Function to scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Show/hide the scroll-to-top button based on scroll position
window.addEventListener("scroll", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (window.pageYOffset > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});
