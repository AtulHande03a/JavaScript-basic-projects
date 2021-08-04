const colorArray = ["#21B6A8", "#175873", "rgb(46, 71, 13)", "blueviolet"];

let btn = document.querySelector("#btn");
let colorText = document.querySelector(".color");

btn.addEventListener("click", function () {
  let randomNumber = getrandomNumber();
  document.body.style.backgroundColor = colorArray[randomNumber];

  colorText.innerText = colorArray[randomNumber];
});

function getrandomNumber() {
  return Math.floor(Math.random() * colorArray.length);
}
