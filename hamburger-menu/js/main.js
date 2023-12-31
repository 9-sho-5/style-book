//「開く」がクリックされた場合
document.querySelector(".ham_menu").addEventListener("click", function (event) {
  var bodyElement = document.body;
  var bodyOverflow = window
    .getComputedStyle(bodyElement)
    .getPropertyValue("overflow");

  if (bodyOverflow === "auto") {
    var inactiveMenu = document.querySelector(
      '.ham_menu[data-state="inactive"]'
    );
    inactiveMenu.setAttribute("data-state", "active");

    var windowFixed = document.querySelector(".window-fixed");
    windowFixed.style.opacity = "1";
    windowFixed.style.pointerEvents = "all";
    windowFixed.style.transform = "translateX(0%)";

    document.body.style.overflow = "hidden"; // 本文の縦スクロールを無効化
  } else if (bodyOverflow === "hidden") {
    var activeMenu = document.querySelector('.ham_menu[data-state="active"]');
    activeMenu.setAttribute("data-state", "inactive");

    var windowFixed = document.querySelector(".window-fixed");
    windowFixed.style.opacity = "0";
    windowFixed.style.pointerEvents = "none";
    windowFixed.style.transform = "translateX(100%)";

    document.body.style.overflow = "auto"; // 本文の縦スクロールを有効化
  }
});
