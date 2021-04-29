const slider = document.querySelector("#slider");
slider.value = 50;
const upperImage = document.querySelector("#img_two");
slider.addEventListener("input", () => {
  let value = parseInt(slider.value);
  upperImage.style.width = `${value}%`;
});
