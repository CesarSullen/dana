//  Nav Bar
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
	navToggle.classList.toggle("active");
	navMenu.classList.toggle("active");

	if (navMenu.classList.contains("active")) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "auto";
	}
});

const navLinks = document.querySelectorAll(".overlay-link");
navLinks.forEach((link) => {
	link.addEventListener("click", () => {
		navToggle.classList.remove("active");
		navMenu.classList.remove("active");
		document.body.style.overflow = "auto";
	});
});
