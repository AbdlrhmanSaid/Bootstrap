let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".content div");
let divsArray = Array.from(divs);

tabsArray.forEach((el) => {
  el.addEventListener("click", function (e) {
    tabsArray.forEach((ele) => {
      // remove active class
      ele.classList.remove("active");
    });
    // add active class
    e.currentTarget.classList.add("active");
    // divsArray.forEach((div) => {
    //   div.style.display = "none";
  });
  // document.querySelector(e.currentTarget.dataset.cont).style.display =
  //   "block";
  // let All = document.querySelector(".all");
  // All.addEventListener("click", function () {
  //   divsArray.forEach((div) => {
  //     div.style.display = "block";
  //   });
  // });
});
// });
