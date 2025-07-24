function alert() {
  const path = window.location.pathname;
  if (path.endsWith("/index.html")) {
    // هشدار ورود اشتباه مقادیر در صفحه لاگین
    const loginSubmit = document.getElementById("loginSubmit");
    loginSubmit.addEventListener("click", () => {
      Swal.fire({
        icon: "error",
        title: "نام کاربری یا رمز عبور اشتباه است",
        timer: 4000,
        timerProgressBar: true,
        position: "top",
      });
    });
  } else if (path.endsWith("/ge-expert.html")) {
    exitAlert();
    FormAlerts();
  } else if (path.endsWith("/go-expert.html")) {
    exitAlert();
    FormAlerts();
  } else if (path.endsWith("/ir-agent.html")) {
    exitAlert();
    FormAlerts();
  } else if (path.endsWith("/af-agent.html")) {
    exitAlert();
    FormAlerts();
  } else if (path.endsWith("/af-expert.html")) {
    exitAlert();
    FormAlerts();
  } else if (path.endsWith("/dashboard.html")) {
    exitAlert();
    FormAlerts();
    deleteAlert();
  } else if (path.endsWith("/manager.html")) {
    exitAlert();
  }
  function exitAlert() {
    //هشدار خروج از صفحه
    const exitPage = document.getElementById("exitPage");
    exitPage.addEventListener("click", (e) => {
      e.preventDefault();
      Swal.fire({
        title: "آیا می‌خواهید از صفحه خارج شوید؟",
        icon: "warning",
        position: "top",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "خروج",
        cancelButtonText: "برگشت",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = exitPage.href;
        }
      });
    });
  }
  function FormAlerts() {
    //پیغام هایی که بعد از ثبت فرم میاد
    const form = document.querySelector("form.form");
    const submitForm = document.querySelector("input.submitForm");
    submitForm.addEventListener("click", (e) => {
      e.preventDefault();
      //اگر دیتاها با موفقیت در دیتابیس ثبت شدند
      Swal.fire({
        icon: "success",
        title: "اطلاعات با موفقیت ثبت شدند",
        timer: 4000,
        timerProgressBar: true,
        position: "top",
      });
      //بعد از ثبت موفق دیتاها در دیتابیس، فرم خالی گردد
      form.reset();
      //اگر مشکلی در ثبت اطلاعات در دیتابیس پیش آمد
      Swal.fire({
        icon: "error",
        title: "خطا در ثبت",
        text: "مشکلی در ثبت اطلاعات  پیش آمد",
        timer: 4000,
        timerProgressBar: true,
        position: "top",
      });
      //اگر مشکلی در اتصال یا سرور پیش آمد
      Swal.fire({
        icon: "error",
        title: "خطای شبکه",
        text: "ارتباط با سرور برقرار نشد",
        timer: 4000,
        timerProgressBar: true,
        position: "top",
      });
    });
  }
  function deleteAlert() {
    const deleteBtns = document.querySelectorAll('button[title="حذف"]');

    deleteBtns.forEach((elem) => {
      elem.addEventListener("click", () => {
        Swal.fire({
          title: "آیا ردیف انتخاب شده پاک شود؟",
          text: "بعد از پاک کردن قادر به بازگردانی آن نیستید.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "بله حذف کن",
          cancelButtonText: "برگشت",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "با موفقیت حذف شد",
              icon: "success",
            });
            //اگر مشکلی در حذف اطلاعات در دیتابیس پیش آمد
            Swal.fire({
              icon: "error",
              title: "خطا در حذف",
              text: "مشکلی در حذف اطلاعات  پیش آمد",
              timer: 4000,
              timerProgressBar: true,
              position: "top",
            });
            //اگر مشکلی در اتصال یا سرور پیش آمد
            Swal.fire({
              icon: "error",
              title: "خطای شبکه",
              text: "ارتباط با سرور برقرار نشد",
              timer: 4000,
              timerProgressBar: true,
              position: "top",
            });
          }
        });
      });
    });
  }
}

export default alert;
