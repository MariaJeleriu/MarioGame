const sendScore = document.getElementById("sendScore");
const container = document.getElementById("container");
const sendName = document.getElementById("sendName");

var score = sessionStorage.getItem("score");

btn.onclick = async function () {
  const request = await fetch("http://localhost:3000/scores", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      name: sendName.value,
      score: score,
    }),
  });
  const response = await request.json();
  const scores = await fetch("http://localhost:3000/scores", {});
  const pageData = await scores.json();
  console.log(pageData);
  pageData.forEach((element) => {
    container.innerHTML += `<div class="row">
      <div class="name">${element.name}</div><div class="score">${element.score}</div>
      </div>`;
  });
  sendScore.style.display = "none";
  container.style.display = "block";
  button.style.display = "block";
};

var audio = new Audio("sound/coin.mp3");
audio.volume = 0.3;
if (audio) {
  window.addEventListener("keydown", function (event) {
    var key = event.which || event.keyCode;
      audio.load();
      audio.play();
  });
}
