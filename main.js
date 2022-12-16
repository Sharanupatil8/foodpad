/// mobile navgation

const header = document.querySelector(".header");
const navButton = document.querySelector(".btn-mobile-nav");

navButton.addEventListener("click", function (e) {
  e.preventDefault;
  header.classList.toggle("nav-open");
});

//closing mobile-navigation on link click

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    header.classList.toggle("nav-open");
  });
});

// navbar fixed on scroll
const heroSection = document.querySelector(".hero");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.querySelector(".navbar").classList.add("sticky");
    } else {
      document.querySelector(".navbar").classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
  }
);
observer.observe(heroSection);
