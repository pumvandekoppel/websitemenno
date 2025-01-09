function restart(id1, id2, url1, url2) {
  var img1 = document.getElementById(id1);
  var img2 = document.getElementById(id2);
  img1.style.display = "none";
  img1.style.display = "initial";
  img2.style.display = "none";
  img2.style.display = "initial"
  console.log("hoi")
}

const restarter = document.getElementById("up")

restarter.addEventListener("click", () => {
  restart('stroef', 'ontspannen', 'assets/backward fall sepia - 4K-2.gif', 'assets/forward fall sepia - 4K-2.gif')
});

