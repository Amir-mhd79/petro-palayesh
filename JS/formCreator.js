function formCreator() {
  try {
    // اسکریپت نمایش و پنهان کردن فرم
    let plusBtn = document.querySelector("div.newForm");
    let form = document.querySelector("form.form");
    plusBtn.addEventListener("click", () => {
      if (form.classList.contains("show")) {
        form.classList.remove("show");
      } else {
        form.classList.add("show");
      }
    });

    // اسکریپت ساخت فرم به تعداد مورد نیاز کاربر
    const addFormButton = document.querySelector(".newForm");
    const formTemplate = document.querySelector(".formTemplate");
    const container = document.getElementById("vehicles-container");

    // ذخیره نسخه اولیه فرم به عنوان قالب
    const templateHTML = formTemplate.innerHTML;

    // حذف فرم اولیه از DOM (می‌خواهیم با نسخه‌های داینامیک جایگزین کنیم)
    formTemplate.innerHTML = "";

    // کلیک روی دکمه +
    addFormButton.addEventListener("click", () => {
      const vehicleCountInput = document.getElementById("vehicle-count");
      const count = parseInt(vehicleCountInput.value);
      if (!count || count < 1 || count > 20) {
        alert("لطفاً یک عدد معتبر بین 1 تا 20 وارد کنید.");
        return;
      }

      container.innerHTML = ""; // پاک‌سازی قبلی

      for (let i = 1; i <= count; i++) {
        const newForm = document.createElement("div");
        newForm.classList.add("vehicle-form-wrapper");
        newForm.innerHTML =
          `<h4 class="formTitle">فرم خودرو ${i}</h4>` + templateHTML;
        container.appendChild(newForm);
      }
    });
  } catch (error) {
    console.log(error.message);
  }
}
export default formCreator;
