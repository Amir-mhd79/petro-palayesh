function eyePass() {
  try {
    //start making script for show and hide password
    let eyePass = document.querySelectorAll("span.eyePass");
    eyePass.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        if (e.target.previousElementSibling.type === "password") {
          e.target.previousElementSibling.type = "text";
          elem.classList.remove("fa-eye");
          elem.classList.add("fa-eye-slash");
        } else {
          e.target.previousElementSibling.type = "password";
          elem.classList.add("fa-eye");
          elem.classList.remove("fa-eye-slash");
        }
      });
    });
    //end of making script for show and hide password
  } catch (error) {
    console.log(error.message);
  }
}
export default eyePass;
