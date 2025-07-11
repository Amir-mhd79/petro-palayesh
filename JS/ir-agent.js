import datePicker from "./datePicker.js";
datePicker();
import "../jquery/dist/jquery.min.js";
import "../mpdatepicker/dist/jquery.mpdatepicker.min.js";
import "../bootstrap/dist/js/bootstrap.bundle.min.js";

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

  const addFormButton = document.querySelector(".newForm"); // دکمه ایجاد فرم
  const formTemplate1 = document.querySelector(".formTemplate1"); // قالب فرم خودروهای ایرانی
  const formTemplate2 = document.querySelector(".formTemplate2"); // قالب فرم خودروهای افغانی
  const container1 = document.getElementById("vehicles-container1"); // ظرف فرم خودروهای ایرانی
  const container2 = document.getElementById("vehicles-container2"); // ظرف فرم خودروهای افغانی

  // ذخیره نسخه اولیه فرم به عنوان قالب
  const templateHTML1 = formTemplate1.innerHTML;
  const templateHTML2 = formTemplate2.innerHTML;

  // حذف فرم اولیه از DOM (می‌خواهیم با نسخه‌های داینامیک جایگزین کنیم)
  formTemplate1.innerHTML = "";
  formTemplate2.innerHTML = "";

  // کلیک روی دکمه +
  addFormButton.addEventListener("click", () => {
    const count1 = parseInt(document.getElementById("vehicle-count1").value); //ورودی تعداد خودرو ایرانی
    const count2 = parseInt(document.getElementById("vehicle-count2").value); //ورودی تعداد خودرو افغانی
    if (
      (!count1 || count1 < 1 || count1 > 20) ||
      (!count2 || count2 < 1 || count2 > 20)
    ) {
      alert("لطفاً یک عدد معتبر بین 1 تا 20 وارد کنید.");
      return;
    }

    container1.innerHTML = ""; // پاک‌سازی قبلی
    container2.innerHTML = ""; // پاک‌سازی قبلی

    for (let i = 1; i <= count1; i++) {
      const newForm1 = document.createElement("div");
      newForm1.classList.add("vehicle-form-wrapper");
      newForm1.innerHTML =
        `<h4 class="formTitle">فرم خودروی ایرانی ${i}</h4>` + templateHTML1;
      container1.appendChild(newForm1);
    }
    for (let j = 1; j <= count2; j++) {
      const newForm2 = document.createElement("div");
      newForm2.classList.add("vehicle-form-wrapper");
      newForm2.innerHTML =
        `<h4 class="formTitle">فرم خودروی افغانی ${j}</h4>` + templateHTML2;
      container2.appendChild(newForm2);
    }
  });
} catch (error) {
  console.log(error.message);
}
