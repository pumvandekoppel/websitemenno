
const appel = document.getElementById("appel");
const mandarijntje = document.getElementById("mandarijntje");
const banaan = document.getElementById("up");
appel.addEventListener("click", () => {
    mandarijntje.style.display = "block";
});
banaan.addEventListener("click", () => {
    mandarijntje.style.display = "none";
});

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleElementVisibility() {
//   setTimeout(100)
  if (!isElementInViewport(mandarijntje)) {
    mandarijntje.style.display = "none";
  }
}

// document.addEventListener("scroll", handleElementVisibility); 

