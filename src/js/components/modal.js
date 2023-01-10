let modal = document.getElementById("modal");
let openModal = document.getElementById("openModal");
let closeModal = document.getElementsByClassName("close-modal")[0];

openModal.onclick = function () {
  modal.style.display = "block";
};

closeModal.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
