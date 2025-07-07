function eyePass() {
  try {
    //start making script for show and hide password
    let password = document.querySelectorAll("input.passSet");
    let eyePass = document.querySelectorAll("span.eyePass");
    
    eyePass.forEach((elem)=>{
      elem.addEventListener("click",(e)=>{
        if(e.target.previousElementSibling.type === "password"){
          e.target.previousElementSibling.type = "text"
          eyePass.remove("fa-eye");
          eyePass.add("fa-eye-slash");
          
        }else{

        }
        
      })
    })


    //end of making script for show and hide password
  } catch (error) {
    console.log(error.message);
  }
}
export default eyePass;




    // let password = document.querySelectorAll("input.passSet");
    // let eyePass = document.querySelector("span.eyePass");
    // password.forEach((elem) => {
    //   elem.addEventListener("click", (e) => {
    //     if (e.target.type === "password") {
    //       eyePass.remove("fa-eye");
    //       eyePass.add("fa-eye-slash");
    //       password.type = "text";
    //     } else {
    //       // this.classList.remove("fa-eye-slash");
    //       // this.classList.add("fa-eye");
    //       password.type = "password";
    //     }




    //     eyePass.addEventListener("click", function () {
    //   if (password.type === "password") {
    //     this.classList.remove("fa-eye");
    //     this.classList.add("fa-eye-slash");
    //     password.type = "text";
    //   } else {
    //     this.classList.remove("fa-eye-slash");
    //     this.classList.add("fa-eye");
    //     password.type = "password";
    //   }
    // });