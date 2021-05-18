const modalFan = document.querySelector(".modalFan_btn");
const modal = document.querySelector(".modalBack");
const modalOut = document.querySelector(".modalOut");
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
  }
});

modalOut.addEventListener("click", (e) => {
  const offBtn = e.target.className;
  if (offBtn === "modalOut") {
    offClick();
  }
});
