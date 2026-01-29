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

//	Accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
	item.addEventListener("click", () => {
		item.classList.toggle("active");
	});
});

//	Interception Observer
const animatedElements = document.querySelectorAll(
	".show-up, .show-down, .show-left, .show-right, .bounce-in, .rotate-left, .rotate-right"
);

const observer = new IntersectionObserver(
	(entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("animated");
				observer.unobserve(entry.target);
			}
		});
	},
	{ root: null, rootMargin: "0px", threshold: 0.2 }
);

animatedElements.forEach((el) => observer.observe(el));
