// Theme toggle — loads in <head> to prevent flash
(function () {
	var stored = localStorage.getItem('theme');
	if (stored) {
		document.documentElement.setAttribute('data-theme', stored);
	}

	document.addEventListener('DOMContentLoaded', function () {
		var btn = document.getElementById('themeToggle');
		if (!btn) return;

		var sunIcon = btn.querySelector('.icon-sun');
		var moonIcon = btn.querySelector('.icon-moon');

		function updateIcons() {
			var current = document.documentElement.getAttribute('data-theme');
			if (current === 'light') {
				sunIcon.style.display = 'none';
				moonIcon.style.display = 'block';
			} else {
				sunIcon.style.display = 'block';
				moonIcon.style.display = 'none';
			}
		}

		updateIcons();

		btn.addEventListener('click', function () {
			var current = document.documentElement.getAttribute('data-theme');
			var next = current === 'light' ? 'dark' : 'light';
			document.documentElement.setAttribute('data-theme', next);
			localStorage.setItem('theme', next);
			updateIcons();
		});
	});
})();
