// open and close the canvas
function header() {
  let bars = document.querySelector("div.canvasBtn");
  let backClose = document.querySelector("div.leftBlurCanvas");
  bars.addEventListener("click", () => {
    if (bars.firstElementChild.classList.contains("fa-bars")) {
      bars.firstElementChild.classList.remove("fa-bars");
      bars.firstElementChild.classList.add("fa-close");
    } else {
      bars.firstElementChild.classList.remove("fa-close");
      bars.firstElementChild.classList.add("fa-bars");
    }
  });
  backClose.addEventListener("click", () => {
    bars.firstElementChild.classList.remove("fa-close");
    bars.firstElementChild.classList.add("fa-bars");
  });
  $("div.leftBlurCanvas").on("click", function () {
    $("div.offcanvas").fadeOut(300);
    $(this).fadeOut(300);
  });
  $("div.canvasBtn").on("click", function () {
    $("div.offcanvas").fadeToggle(300);
    $("div.leftBlurCanvas").fadeToggle(300);
  });
}
export default header;
