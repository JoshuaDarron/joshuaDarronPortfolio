// STEP 1: Scroll-reveal observer
(function () {
	var revealEls = document.querySelectorAll('.reveal');
	// Group siblings for stagger delay
	var parents = new Map();
	revealEls.forEach(function (el) {
		var p = el.parentElement;
		if (!parents.has(p)) parents.set(p, []);
		parents.get(p).push(el);
	});
	parents.forEach(function (children) {
		children.forEach(function (child, i) {
			child.style.setProperty('--delay', (i * 0.08) + 's');
		});
	});

	var observer = new IntersectionObserver(function (entries) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				observer.unobserve(entry.target);
			}
		});
	}, {threshold: 0.15});

	revealEls.forEach(function (el) {observer.observe(el);});
})();
