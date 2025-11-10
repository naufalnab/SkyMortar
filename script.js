document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  // Close mobile menu on link click
  document.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });

  // Active Nav Link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Main Carousel
  new Swiper(".main-carousel", {
    loop: true,
    autoplay: { delay: 5000 },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Product Carousel
  new Swiper(".product-carousel", {
    loop: true,
    slidesPerView: 1.5, // Tampilkan 1.5 slide di mobile
    spaceBetween: 10,
    centeredSlides: true, // Slide aktif akan di tengah
    pagination: {
      el: ".product-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".product-nav-next",
      prevEl: ".product-nav-prev",
    },
    breakpoints: {
      // Saat layar tablet (640px ke atas)
      640: {
        slidesPerView: 3, // Tampilkan 3 slides
        spaceBetween: 20,
      },
      // Saat layar desktop (1024px ke atas)
      1024: {
        slidesPerView: 5, // Tampilkan 5 slides
        spaceBetween: 30,
      },
    },
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});