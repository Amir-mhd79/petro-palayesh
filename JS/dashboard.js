import "../jquery/dist/jquery.min.js";
import "../mpdatepicker/dist/jquery.mpdatepicker.min.js";
import "../bootstrap/dist/js/bootstrap.bundle.min.js";
import eyePass from "./eyePass.js";
import alert from "./alert.js";
eyePass();
alert();
try {
  let bottons = [...document.querySelectorAll(".btn")];
  let ge_expert_btn = document.querySelector(".ge_expert_btn");
  let go_expert_btn = document.querySelector(".go_expert_btn");
  let ir_agent_btn = document.querySelector(".ir_agent_btn");
  let af_agent_btn = document.querySelector(".af_agent_btn");
  let af_expert_btn = document.querySelector(".af_expert_btn");
  let users_btn = document.querySelector(".users_btn");
  let admin_setting_btn = document.querySelector(".admin_setting_btn");

  let ge_expert_mainInfo = document.querySelector(".ge_expert_mainInfo");
  let go_expert_mainInfo = document.querySelector(".go_expert_mainInfo");
  let ir_agent_mainInfo = document.querySelector(".ir_agent_mainInfo");
  let af_agent_mainInfo = document.querySelector(".af_agent_mainInfo");
  let af_expert_mainInfo = document.querySelector(".af_expert_mainInfo");
  let manage_users = document.querySelector(".manage_users");
  let manage_admin = document.querySelector(".manage_admin");
  function data(
    input1,
    input2,
    output1,
    output2,
    output3,
    output4,
    output5,
    output6,
    output7,
    output8,
    output9,
    output10,
    output11,
    output12
  ) {
    bottons.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        if (elem.classList.contains(input1)) {
          elem.classList.add("active_btn");
          input2.classList.add("show_info");

          output1.classList.remove("active_btn");
          output5.classList.remove("show_info");

          output2.classList.remove("active_btn");
          output6.classList.remove("show_info");

          output3.classList.remove("active_btn");
          output7.classList.remove("show_info");

          output4.classList.remove("active_btn");
          output8.classList.remove("show_info");

          output9.classList.remove("active_btn");
          output10.classList.remove("show_info");

          output11.classList.remove("active_btn");
          output12.classList.remove("show_info");
        }
      });
    });
  }
  data(
    "ge_expert_btn",
    ge_expert_mainInfo,
    go_expert_btn,
    ir_agent_btn,
    af_agent_btn,
    af_expert_btn,
    go_expert_mainInfo,
    ir_agent_mainInfo,
    af_agent_mainInfo,
    af_expert_mainInfo,
    users_btn,
    manage_users,
    admin_setting_btn,
    manage_admin
  );
  data(
    "go_expert_btn",
    go_expert_mainInfo,
    ge_expert_btn,
    ir_agent_btn,
    af_agent_btn,
    af_expert_btn,
    ir_agent_mainInfo,
    af_agent_mainInfo,
    af_expert_mainInfo,
    ge_expert_mainInfo,
    users_btn,
    manage_users,
    admin_setting_btn,
    manage_admin
  );
  data(
    "ir_agent_btn",
    ir_agent_mainInfo,
    ge_expert_btn,
    go_expert_btn,
    af_agent_btn,
    af_expert_btn,
    go_expert_mainInfo,
    af_agent_mainInfo,
    af_expert_mainInfo,
    ge_expert_mainInfo,
    users_btn,
    manage_users,
    admin_setting_btn,
    manage_admin
  );
  data(
    "af_agent_btn",
    af_agent_mainInfo,
    ge_expert_btn,
    go_expert_btn,
    ir_agent_btn,
    af_expert_btn,
    go_expert_mainInfo,
    ir_agent_mainInfo,
    af_expert_mainInfo,
    ge_expert_mainInfo,
    users_btn,
    manage_users,
    admin_setting_btn,
    manage_admin
  );
  data(
    "af_expert_btn",
    af_expert_mainInfo,
    ge_expert_btn,
    go_expert_btn,
    ir_agent_btn,
    af_agent_btn,
    go_expert_mainInfo,
    ir_agent_mainInfo,
    af_agent_mainInfo,
    ge_expert_mainInfo,
    users_btn,
    manage_users,
    admin_setting_btn,
    manage_admin
  );
  data(
    "users_btn",
    manage_users,
    ge_expert_btn,
    go_expert_btn,
    ir_agent_btn,
    af_agent_btn,
    go_expert_mainInfo,
    ir_agent_mainInfo,
    af_agent_mainInfo,
    ge_expert_mainInfo,
    af_expert_btn,
    af_expert_mainInfo,
    admin_setting_btn,
    manage_admin
  );
  data(
    "admin_setting_btn",
    manage_admin,
    ge_expert_btn,
    go_expert_btn,
    ir_agent_btn,
    af_agent_btn,
    go_expert_mainInfo,
    ir_agent_mainInfo,
    af_agent_mainInfo,
    ge_expert_mainInfo,
    af_expert_btn,
    af_expert_mainInfo,
    users_btn,
    manage_users
  );

  //datePicker JS
  $(function () {
    $(".datePicker").mpdatepicker({
      timePicker: false,
      timeChangeSensitivity: 5,
      gSpliter: "/",
      modal_bg: "rgba(0,0,0,0.3)",
    });
  });

  // اسکریپت نمایش و پنهان کردن فرم
  let plusBtn = document.querySelector("div.newForm");
  let form = document.querySelector("form.UsersForm");
  plusBtn.addEventListener("click", () => {
    if (form.classList.contains("show")) {
      form.classList.remove("show");
    } else {
      form.classList.add("show");
    }
  });

  // اسکریپت ویرایش آیتم های جدول
  let editButtons = document.querySelectorAll('button[title="ویرایش"]');
  editButtons.forEach((elem) => {
    elem.addEventListener("click", () => {
      // پیدا کردن بخش پدر مربوط به این دکمه (یعنی .leftSection فعال)
      let currentSection = elem.closest(".leftSection");

      // بستن همه فرم‌های موجود در صفحه
      let allForms = document.querySelectorAll(".leftSection form.editForm");
      allForms.forEach((form) => {
        form.classList.remove("show");
      });

      // پیدا کردن فرم داخل همین بخش و نمایش آن
      let sectionForm = currentSection.querySelector("form.editForm");
      sectionForm.classList.add("show");
    });
  });

  // اسکریپت ویرایش آیتم های دومین جدول ترخیص کار ایران
  let secondEditButtons = document.querySelectorAll(
    'button[title="ویرایش سطر"]'
  );
  let secondForm = document.querySelector("form.secondIrForm");
  secondEditButtons.forEach((elem) => {
    elem.addEventListener("click", () => {
      secondForm.classList.add("show");
    });
  });
} catch (error) {
  console.log(error.message);
}
