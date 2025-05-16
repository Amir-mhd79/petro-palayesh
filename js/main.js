import header from "./header.js";
header();
import "../jquery/dist/jquery.js";

var swiper = new Swiper(".petroProducts", {
  slidesPerView: 2,
  spaceBetween:15,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    400: {
      slidesPerView: 3,
      spaceBetween:100,
    },
    540: {
      slidesPerView: 3,
      spaceBetween:200,
    },
    630: {
      slidesPerView: 3,
      spaceBetween:100,
    },
    730: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

let data=` شرکت پترو پالایش جمیزدر به عنوان پیشرو بخش خصوصی در صنعت هیدروکربنی ایران، با تمرکز بر پالایش میعانات گازی و تولید فرآورده های نفتی (گازوئیل و بنزین استاندارد) فعالیت می‌کند. این شرکت پس از نوسازی ساختاری (در سال ۱۴۰۲) با سرمایه‌گذاری 40 میلیون دلاری، به تولید روزانه ۱۰۰۰ تن فرآورده نفتی دست یافته و سهم نخست بازار صادرات به افغانستان را کسب نموده است. همچنین این شرکت به عنوان الگویی پیشرفته در صنعت پالایش ایران، با ترکیب فناوری‌های روز جهانی و پژوهش‌های کاربردی، تحولی نوین در فرآوری میعانات گازی و تولید سوخت‌های استاندارد ایجاد کرده است.
            
            امتیازات فناورانه ما
            ۱. فناوری‌های نوین پالایش
             - سیستم‌های پیشرفته تقطیر با خلوص ۹۸٪ محصولات
             - بهینه‌ سازی فرآیندها با هوش مصنوعی
             - آزمایشگاه‌های کنترل کیفیت خودکار

            ۲. تعهد به تحقیق و توسعه
             - مرکز تحقیقات اختصاصی با ثبت ۱۰+ اختراع در بهینه‌سازی پالایش
             - همکاری با دانشگاه صنعتی نفت تبریز و مراکز رشد فناوری 
             -سرمایه‌گذاری سالانه ۱۵٪ از درآمد در ارتقای فناوری

            ۳. نوآوری پایدار 
             -فناوری‌های بدون انتشار گازهای flare
             - پروژه‌های تبدیل پسماند به انرژی
             - فرمولاسیون سوخت منطبق با استاندارد یورو ۵ 

            اکوسیستم تولیدی ما
             - ظرفیت روزانه: ۱,۰۰۰ تن سوخت استاندارد افغانستان
             - ۱۲فرمولاسیون انحصاری افزودنی‌های سوخت
             - پیاده‌سازی دیجیتال تویین برای نگهداری پیش‌ بینانه

             چرا ما را انتخاب کنید؟
              - اولین پالایشگاه خصوصی مجهز به اینترنت صنعتی اشیا (IIoT)
              - تأییدیه ISO 17025 برای مراکز تحقیق و توسعه
              -اعتبار قوی در حوزه تامین مواد اولیه
              -تجهیزات به روز به منظور تولید بهینه
              -موقعیت مناسب واحد از نظر لجستیکی و حمل تا مقصد
 `
let paragraph=document.querySelector(".aboutCompany")
let button=document.querySelector(".knowMore")
paragraph.textContent=`${data.substring(0,544)} ....`
function Showtext(){
    button.addEventListener("click",()=>{
        paragraph.classList.toggle("textData")
        if(paragraph.classList.contains("textData")){
            paragraph.textContent=data
            button.textContent=`بستن متن`
        }else{
            paragraph.textContent=`${data.substring(0,544)} ....`
            button.innerHTML=`بیشتر بدانید <i class="fa fa-caret-left"></i>`
        }
    })
}
Showtext()