let lang = document.getElementById("lang");
let openLang = document.getElementById("openLang");
let closeLang = document.getElementsByClassName("menu-lang__option")[0];

openLang.onclick = function () {
  lang.style.display = "block";
};

closeLang.onclick = function () {
  closeLang.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == lang) {
    lang.style.display = "none";
  }
};
