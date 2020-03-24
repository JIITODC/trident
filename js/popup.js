$(window).load(function() {
  $(".trigger_popup_fricc").click(function() {
    $(".hover_bkgr_fricc").show();
  });
  $(".hover_bkgr_fricc").click(function() {
    $(".hover_bkgr_fricc").hide();
  });
  $(".popupCloseButton").click(function() {
    $(".hover_bkgr_fricc").hide();
  });
});

var popupDiv = document.getElementsByClassName("popupDiv");
popupDiv.style.wordWrap = "break-word";
