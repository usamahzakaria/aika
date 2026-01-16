const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // masuk viewport → animasi jalan
        entry.target.classList.add("active");
      } else {
        // keluar viewport → reset animasi
        entry.target.classList.remove("active");
      }
    });
  },
  {
    threshold: 0.2 // 20% elemen terlihat baru dianggap masuk
  }
);

document.querySelectorAll(".reveal").forEach(el => {
  observer.observe(el);
});

