const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  const menu = document.getElementsByTagName("nav")[0];
  menu.style.display = menu.style.display === "initial" ? "none" : "initial";
  hamburger.style.transform =
    hamburger.style.transform === "rotate(3deg)"
      ? "rotate(0deg)"
      : "rotate(3deg)";
});
