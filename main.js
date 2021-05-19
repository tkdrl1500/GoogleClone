const modalFan = document.querySelector(".modalFan_btn");
const modal = document.querySelector(".modalBack");
const modalOut = document.querySelector(".modalBottom__out");
const body = document.querySelector("body");

function onClick() {
  modal.style.display = "block";
}

function offClick() {
  modal.style.display = "none";
}

modalFan.addEventListener("click", (e) => {
  const onbtn = e.target.parentNode.className;
  if (onbtn) {
    onClick();
    body.style.overflow = "hidden";
    body.style.background = "rgba(0, 0, 0, 0.8)";
  }
});

modalOut.addEventListener("click", (e) => {
  const offBtn = e.target.className;
  if (offBtn === "modalBottom__out hoverBtn") {
    offClick();
    body.style.background = "rgb(232, 233, 235)";
  }
});
