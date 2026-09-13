document.getElementById("year").textContent = new Date().getFullYear();

document.querySelector(".menu").addEventListener("click", () => {
  const nav = document.querySelector(".nav nav");
  const open = nav.style.display === "flex";
  nav.style.display = open ? "" : "flex";
  if (!open) {
    nav.style.position = "absolute";
    nav.style.top = "76px";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.padding = "20px 28px";
    nav.style.background = "#0a101a";
    nav.style.flexDirection = "column";
    nav.style.alignItems = "flex-start";
  }
});

/* ===== Profile photo lightbox ===== */
(function () {
  const avatar = document.getElementById("avatar");
  const lightbox = document.getElementById("photoLightbox");
  if (!avatar || !lightbox) return;

  const closeBtn = document.getElementById("photoLightboxClose");

  const open = () => {
    lightbox.classList.add("open");
    document.body.classList.add("lb-open");
    closeBtn.focus();
  };

  const close = () => {
    lightbox.classList.remove("open");
    document.body.classList.remove("lb-open");
    avatar.focus();
  };

  avatar.addEventListener("click", open);
  avatar.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      open();
    }
  });

  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("open")) close();
  });
})();
