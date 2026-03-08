// Back-to-top button
(function () {
	var btn = document.getElementById('backToTop');
	if (!btn) return;

	window.addEventListener('scroll', function () {
		if (window.scrollY > 600) {
			btn.classList.add('visible');
		} else {
			btn.classList.remove('visible');
		}
	});

	btn.addEventListener('click', function () {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});
})();
