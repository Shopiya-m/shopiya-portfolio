/*===== MENU SHOW / HIDE =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
        nav.classList.toggle('show');

        toggle.setAttribute(
            'aria-expanded',
            nav.classList.contains('show')
        );
    });
}
};

showMenu("nav-toggle", "nav-menu");

/*===== CLOSE MOBILE MENU WHEN A LINK IS CLICKED =====*/
const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");

    if (navMenu) navMenu.classList.remove("show");
    if (navToggle) navToggle.setAttribute("aria-expanded", "false");
  });
});

/*===== ACTIVE NAVIGATION LINK ON SCROLL =====*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollPosition = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionBottom = sectionTop + section.offsetHeight;
    const sectionId = section.getAttribute("id");

    const activeLink = document.querySelector(
      `.nav__menu a[href="#${sectionId}"]`
    );

    if (!activeLink) return;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionBottom
    ) {
      document.querySelectorAll(".nav__link").forEach((link) => {
        link.classList.remove("active-link");
      });

      activeLink.classList.add("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);
window.addEventListener("load", scrollActive);

/*===== SCROLL REVEAL ANIMATIONS =====*/
if (typeof ScrollReveal === "function") {
  const sr = ScrollReveal({
    origin: "top",
    distance: "40px",
    duration: 1000,
    delay: 100,
    easing: "ease-out",
    reset: false
  });

  sr.reveal(".home__data, .about__img", {});
  sr.reveal(".home__img, .about__subtitle, .about__text", {
    delay: 200
  });
  sr.reveal(".home__social-icon", {
    interval: 120
  });
  sr.reveal(".skills__subtitle, .skills__text, .skills__data", {
    interval: 100
  });
  sr.reveal(".skills__img, .work__img, .contact__input", {
    interval: 120
  });
}
