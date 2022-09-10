const btn = document.querySelector(".btn");

let container = document.createElement("div");
container.classList.add("container");
document.body.append(container);

let div = document.createElement("div");
div.className = "btn-draw";

let input = document.createElement("input");
input.setAttribute("placeholder", "Diametr = 100");

let button = document.createElement("button");
button.innerText = "Draw";
button.classList.add("btn");

div.append(input);
div.append(button);

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function removeBuble(e) {
  e.target.remove();
}

function createBuble() {
  let buble = document.createElement("p");
  buble.classList.add("buble");
  buble.style.backgroundColor = `rgba(${randomNumber(0, 256)},${randomNumber(
    0,
    256
  )},${randomNumber(0, 256)})`;
  buble.style.top = `${randomNumber(
    2,
    document.documentElement.clientHeight - 102
  )}px`;
  buble.style.left = `${randomNumber(
    2,
    document.documentElement.clientWidth - 102
  )}px`;

  container.append(buble);
  buble.addEventListener("click", removeBuble);
}

btn.addEventListener("click", (e) => {
  if ((e.classList = "btn")) {
    btn.remove();
    container.insertAdjacentElement("beforebegin", div);
  }
  button.addEventListener("click", (e) => {
    if ((e.classList = "btn-draw")) {
      div.remove();
      for (let i = 1; i < 100; i++) {
        createBuble();
      }
    }
  });
});
