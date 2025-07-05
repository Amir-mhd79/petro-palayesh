function formCreator() {
  $(function () {
    let plusBtn=document.querySelector("div.newForm")
    let form=document.querySelector("form.form")
    plusBtn.addEventListener("click",()=>{
        form.classList.add("show")
    })
  });
}
export default formCreator;
