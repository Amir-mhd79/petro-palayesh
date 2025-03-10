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

  let mahsolat = document.querySelector("li.productItem"); 
  let mahsolatSubmenu = document.querySelector("ul.toggleList"); 
  let mahsolatSubmenuItem = document.querySelector("a.listAncher"); 
  let heavyItem = document.querySelector("li.heavyPetrolItem"); 
  let heavyItemsSubmenu = document.querySelector("ul.heavyList"); 

  mahsolat.addEventListener("mouseenter", () => {
    mahsolatSubmenu.classList.add("show");
  });
  mahsolat.addEventListener("mouseleave", () => {
    mahsolatSubmenu.classList.remove("show");
  });

  heavyItemsSubmenu.addEventListener("mouseenter", () => {
    mahsolatSubmenuItem.classList.add("bright");
  });
  heavyItemsSubmenu.addEventListener("mouseleave", () => {
    mahsolatSubmenuItem.classList.remove("bright");
  });

  heavyItem.addEventListener("mouseenter", () => {
    heavyItemsSubmenu.classList.add("show");
  });
  heavyItem.addEventListener("mouseleave", () => {
    heavyItemsSubmenu.classList.remove("show");
  });

  heavyItemsSubmenu.addEventListener("mouseenter",()=>{
    heavyItem.classList.add("bright")
  })
  heavyItemsSubmenu.addEventListener("mouseleave",()=>{
    heavyItem.classList.remove("bright")
  })

  
  let mahsoulat = document.querySelector("li.mahsoul");  
  let mahsoulatSubmenu = document.querySelector("ul.toggleList2");  
  let mahsoulatSubmenuItem = document.querySelector("a.listAncher2");  
  let heavyyItem = document.querySelector("li.heavyPetrolItem2");  
  let heavyyItemsSubmenu = document.querySelector("ul.heavyList2"); 

  mahsoulat.addEventListener("mouseenter", () => {
    mahsoulatSubmenu.classList.add("show");
  });
  mahsoulat.addEventListener("mouseleave", () => {
    mahsoulatSubmenu.classList.remove("show");
  });

  heavyyItemsSubmenu.addEventListener("mouseenter", () => {
    mahsoulatSubmenuItem.classList.add("bright");
  });
  heavyyItemsSubmenu.addEventListener("mouseleave", () => {
    mahsoulatSubmenuItem.classList.remove("bright");
  });

  heavyyItem.addEventListener("mouseenter", () => {
    heavyyItemsSubmenu.classList.add("show");
  });
  heavyyItem.addEventListener("mouseleave", () => {
    heavyyItemsSubmenu.classList.remove("show");
  });

  heavyyItemsSubmenu.addEventListener("mouseenter",()=>{
    heavyyItem.classList.add("bright")
  })
  heavyyItemsSubmenu.addEventListener("mouseleave",()=>{
    heavyyItem.classList.remove("bright")
  })
}
export default header;
