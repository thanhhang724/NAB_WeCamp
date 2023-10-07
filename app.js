const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
menuItems.forEach((item, index) => {
    item.addEventListener("click", function() {
      wrapper.style.transform = `translateX(${-100 * index}vw)`;
    });
  });