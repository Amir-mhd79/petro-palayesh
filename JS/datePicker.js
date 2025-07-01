function datePicker() {
  $(function () {
    $("#datePicker").mpdatepicker({
      timePicker: true,
      timeChangeSensitivity: 5,
      gSpliter: "/",
      modal_bg: "rgba(0,0,0,0.3)",
      parentEl: document.body,
    });
  });
}
export default datePicker;
