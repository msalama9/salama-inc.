const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease in ${index / 7 + 0.3}s`;
      }
    });
    burger.classList.toggle("toggle");
  });
};

navSlide();

function aboutIn() {
  if (this.scrollY > this.innerHeight / 5) {
    document.body.classList.add("image-in", "para-in", "about-scroll");
  } else {
    document.body.classList.remove("image-in", "para-in", "about-scroll");
  }
}

window.addEventListener("scroll", aboutIn);

function projIn() {
  if (this.scrollY > this.innerHeight / 5) {
    document.body.classList.add(
      "proj-image-in",
      "proj-para-in",
      "project-scroll"
    );
  } else {
    document.body.classList.remove(
      "proj-image-in",
      "proj-para-in",
      "project-scroll"
    );
  }
}

window.addEventListener("scroll", projIn);
