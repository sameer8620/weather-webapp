const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const msgOne = document.getElementById("msg-1");
const msgTwo = document.getElementById("msg-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;
  msgOne.textContent = "loading....";
  msgTwo.textContent = "";
  search.value = "";

  fetch(`http://localhost:3000/weather?address=${location}`).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        msgOne.textContent = data.error;
      } else {
        msgOne.textContent = data.location;
        msgTwo.innerHTML = data.forecast;
      }
    });
  });
});
