// navbar.js

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".toggle");
  const nav = document.querySelector("header .navEl");

  // Sécurité si un élément manque
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    toggle.classList.toggle("active");
  });

  // Fermer le menu quand on clique sur un lien
  document.querySelectorAll(".navLink").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.classList.remove("active");
    });
  });
});



// document.addEventListener("DOMContentLoaded", () => {
//   const toggle = document.querySelector(".toggle");
//   const nav = document.querySelector("header .navEl");
//   const overlay = document.querySelector(".nav-overlay");

//   if (!toggle || !nav || !overlay) return;

//   function openMenu() {
//     nav.classList.add("open");
//     toggle.classList.add("active");
//     overlay.classList.add("show");
//   }

//   function closeMenu() {
//     nav.classList.remove("open");
//     toggle.classList.remove("active");
//     overlay.classList.remove("show");
//   }

//   toggle.addEventListener("click", () => {
//     nav.classList.contains("open") ? closeMenu() : openMenu();
//   });

//   overlay.addEventListener("click", closeMenu);

//   document.querySelectorAll(".navLink").forEach(link => {
//     link.addEventListener("click", closeMenu);
//   });
// });
