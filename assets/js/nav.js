// Mobile menu toggle
document.getElementById('menuToggle').addEventListener('click', function () {
	document.getElementById('navLinks').classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(function (link) {
	link.addEventListener('click', function () {
		document.getElementById('navLinks').classList.remove('open');
	});
});

// STEP 12: Nav active indicator
(function () {
	var sections = document.querySelectorAll('section[id]');
	var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

	var navObserver = new IntersectionObserver(function (entries) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) {
				var id = entry.target.getAttribute('id');
				navLinks.forEach(function (link) {
					link.classList.toggle('active', link.getAttribute('href') === '#' + id);
				});
			}
		});
	}, {threshold: 0.3, rootMargin: '-' + getComputedStyle(document.documentElement).getPropertyValue('--nav-height').trim() + ' 0px 0px 0px'});

	sections.forEach(function (s) {navObserver.observe(s);});
})();
