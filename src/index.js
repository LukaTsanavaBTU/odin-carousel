import "./styles.css";

const carouselHandler = (function () {
  const images = document.querySelectorAll(".image-div img");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  const orderButtonsWrapper = document.querySelector(".order-buttons-wrapper");

  let currentImageIndex = 0;
  let imageCount = images.length;

  for (let i = 0; i < imageCount; i++) {
    const orderButton = document.createElement("div");
    orderButton.textContent = "●";
    orderButton.classList.add("order-button");
    if (i === 0) {
      orderButton.classList.add("selected");
    }
    orderButtonsWrapper.appendChild(orderButton);
  }

  const orderButtons = document.querySelectorAll(".order-button");

  const setOrderSelected = function (selectedIndex) {
    orderButtons[selectedIndex].classList.add("selected");
    orderButtons.forEach((button, index) => {
      if (index !== selectedIndex) {
        button.classList.remove("selected");
      }
    });
  };

  const setActive = function setImageAsActiveAndDisableOthers(index) {
    images[index].classList.add("active");
    images.forEach((img, idx) => {
      if (idx !== index) {
        img.classList.remove("active");
      }
    });
    setOrderSelected(index);
  };

  orderButtons.forEach((clickedButton, clickedIndex) => {
    clickedButton.addEventListener("click", (e) => {
      setActive.call(e.target, clickedIndex);
    });
  });

  leftArrow.addEventListener("click", () => {
    const targetImageIndex =
      currentImageIndex - 1 < 0 ? imageCount - 1 : currentImageIndex - 1;
    currentImageIndex = targetImageIndex;
    setActive(targetImageIndex);
  });

  rightArrow.addEventListener("click", () => {
    const targetImageIndex =
      currentImageIndex + 1 === imageCount ? 0 : currentImageIndex + 1;
    currentImageIndex = targetImageIndex;
    setActive(targetImageIndex);
  });
})();
