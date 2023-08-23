const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.querySelector(".sidebare");
const artikel = document.getElementById("artikelSidebare");
const destinasi = document.getElementById("destinasiSidebare");
const citarasa = document.getElementById("citarasaSidebare");
const rempah = document.getElementById("rempahSidebare");
const informasi = document.getElementById("informasii");

openBtn.addEventListener("click", () => {
  sidebar.style.left = "0";
});

closeBtn.addEventListener("click", () => {
  sidebar.style.left = "-100%";
});

artikel.addEventListener("click", () => {
  sidebar.style.left = "-100%";
});

destinasi.addEventListener("click", () => {
  sidebar.style.left = "-100%";
});

citarasa.addEventListener("click", () => {
  sidebar.style.left = "-100%";
});

rempah.addEventListener("click", () => {
  sidebar.style.left = "-100%";
});

informasi.addEventListener("click", () => {
  sidebar.style.left = "-100%";
});