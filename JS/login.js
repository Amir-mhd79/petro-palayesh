function login() {
  try {
    //start making script for show and hide password
    let password = document.querySelector("input#password");
    let eyePass = document.querySelector("span.eyePass");
    eyePass.addEventListener("click", function () {
      if (password.type === "password") {
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
        password.type = "text";
      } else {
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
        password.type = "password";
      }
    });
    //end of making script for show and hide password
  } catch (error) {
    console.log(error.message);
  }
}
login();
