let openSideBar = document.querySelector("#openSideBar");
let closeSideBar = document.querySelector("#closeSideBar");
let sideBar = document.querySelector("#sideBar");
let sideBarSub = document
  .querySelector("#sideBar")
  .querySelector(".menu")
  .querySelectorAll("li.relative");

sideBarSub.forEach((item) => {
  item.addEventListener("click", (e) => {
    let isDiv = item.children[0] === e.target.parentElement;
    let isLi = item.children[0] === e.target;
    if (isDiv || isLi) {
      item.querySelector("ul").classList.toggle("!h-0");
      item.querySelector("svg").classList.toggle("rotate-180");
    }
  });
});

const sideBarHandeler = () => {
  sideBar.classList.toggle("side-bar");
};

closeSideBar.addEventListener("click", sideBarHandeler);

openSideBar.addEventListener("click", sideBarHandeler);
