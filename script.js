const parallax = document.querySelectorAll(".parallax__layer");

window.addEventListener("scroll", function() {
  let depth, i;
  
  for (i = 0; i < parallax.length; i++) {
    depth = parallax[i].getAttribute("data-depth");
    parallax[i].style.transform = "translate3d(0, 0, " + (window.pageYOffset * depth) + "px)";
  }
});
