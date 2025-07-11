import datePicker from "./datePicker.js";
datePicker();
import formCreator from "./formCreator.js";
formCreator();
import "../jquery/dist/jquery.min.js";
import "../mpdatepicker/dist/jquery.mpdatepicker.min.js";
import "../bootstrap/dist/js/bootstrap.bundle.min.js";

// اسکریپت ساخت فرم به تعداد مورد نیاز کاربر
document.addEventListener("DOMContentLoaded", () => {
  const vehicleCountInput = document.getElementById("vehicle-count");
  const addFormButton = document.querySelector(".newForm");
  const formTemplate = document.querySelector(".formTemplate");
  const mainForm = document.querySelector(".form");
  const container = document.getElementById("vehicles-container");

  // ذخیره نسخه اولیه فرم به عنوان قالب
  const templateHTML = formTemplate.innerHTML;

  // حذف فرم اولیه از DOM (می‌خواهیم با نسخه‌های داینامیک جایگزین کنیم)
  formTemplate.innerHTML = "";

  // کلیک روی دکمه +
  addFormButton.addEventListener("click", () => {
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
});