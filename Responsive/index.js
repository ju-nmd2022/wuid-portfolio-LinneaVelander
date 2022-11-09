const image = document.getElementById("piglet");
const imageContainer = document.getElementById("imageContainer");
const details = document.getElementById("details");
const close = document.getElementById("close");

details.hidden = true;

image.addEventListener("click", function handleEvent() {
  details.hidden = false;
  imageContainer.src = image.src;
});

close.onclick = function () {
  details.hidden = true;
};
