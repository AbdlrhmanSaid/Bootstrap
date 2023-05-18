let login = document.querySelector("nav .log");

login.addEventListener("click", function () {
  document.querySelector(".log-in").style.transform = "translateY(0%)";
  let btn = document.querySelector("form button");
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    let inputs = document.querySelectorAll("form input");
    Array.from(inputs).forEach((e) => {
      if (e.value === "") {
        e.style.borderBottom = "1px solid red";
        document.querySelector(".log-in").style.transform = "translateY(0%)";
      } else {
        e.style.borderBottom = "1px solid white";
        document.querySelector(".log-in").style.transform = "translateY(-100%)";
      }
    });
  });
  document
    .querySelector(".log-in .close")
    .addEventListener("click", function () {
      document.querySelector(".log-in").style.transform = "translateY(-100%)";
    });
});

let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".content div");
let divsArray = Array.from(divs);

tabsArray.forEach((el) => {
  el.addEventListener("click", function (e) {
    // remove active class
    tabsArray.forEach((ele) => {
      ele.classList.remove("active");
    });
    // add active class
    e.currentTarget.classList.add("active");

    divsArray.forEach((div) => {
      div.style.display = "none";
    });

    let select = document.querySelectorAll(e.currentTarget.dataset.cont);

    let selectArry = Array.from(select);

    selectArry.forEach((e) => {
      e.style.display = "block";
    });

    let All = document.querySelector(".all");
    All.addEventListener("click", function () {
      divsArray.forEach((div) => {
        div.style.display = "block";
      });
    });
  });
});
