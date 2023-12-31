/**
 * Text Circle Animation
 */
const textElementBefore = document.querySelector(".text");
const text = textElementBefore.innerHTML + " ";
const textArray = text.split("");

let textElementAfter = "";
textArray.forEach((val) => {
  textElementAfter += `<span class="circle_tx">${val}</span>`;
});

textElementBefore.innerHTML = textElementAfter;

const textcnt = textArray.length;
const circleR = document.querySelector(".circle").clientHeight / 1.7;
const fontH = document.querySelector(".inner").clientHeight;
const dist = circleR - fontH;

const circleTxElements = document.querySelectorAll(".circle_tx");
circleTxElements.forEach((element, index) => {
  const num = index + 1;
  const radX = Math.sin((360 / textcnt) * num * (Math.PI / 180));
  const radY = Math.sin((90 - (360 / textcnt) * num) * (Math.PI / 180));
  element.style.transform = `translate(${dist * radX}px, ${
    -dist * radY
  }px) rotate(${(360 / textcnt) * num}deg)`;
});
