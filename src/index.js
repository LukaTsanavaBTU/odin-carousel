import "./styles.css";

const carouselHandler = (function () {
  const images = document.querySelectorAll(".image-div img");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  let currentImageIndex = 0;
  let imageCount = images.length;

  const setActive = function setImageAsActiveAndDisableOthers(index) {
    images[index].classList.add("active");
    images.forEach((img, idx) => {
      if (idx !== index) {
        img.classList.remove("active");
      }
    });
  };

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
