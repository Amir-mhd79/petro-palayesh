function formCreator() {
  let plusBtn = document.querySelector("div.newForm");
  let form = document.querySelector("form.form");
  plusBtn.addEventListener("click", () => {
    if (form.classList.contains("show")) {
      form.classList.remove("show");
    } else {
      form.classList.add("show");
    }
  });
}
export default formCreator;
