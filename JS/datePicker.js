function datePicker() {
  $(function () {
    $("#datePicker").mpdatepicker({
      timePicker: false,
      timeChangeSensitivity: 5,
      gSpliter: "/",
      modal_bg: "rgba(0,0,0,0.3)",
    });
  });
}
export default datePicker;
