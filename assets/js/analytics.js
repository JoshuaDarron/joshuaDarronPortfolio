// GA4 custom event tracking
(function () {
	if (typeof gtag !== 'function') return;

	// Track section views with IntersectionObserver
	var sections = document.querySelectorAll('section[id]');
	if (sections.length > 0) {
		var sectionObserver = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					gtag('event', 'section_view', {
						section_name: entry.target.id
					});
					sectionObserver.unobserve(entry.target);
				}
			});
		}, { threshold: 0.3 });

		sections.forEach(function (section) {
			sectionObserver.observe(section);
		});
	}

	// Track experience card clicks
	document.querySelectorAll('.exp-card-link').forEach(function (link) {
		link.addEventListener('click', function () {
			var company = link.querySelector('h3');
			gtag('event', 'experience_click', {
				company_name: company ? company.textContent : 'unknown'
			});
		});
	});

	// Track portfolio card clicks
	document.querySelectorAll('.project-card a').forEach(function (link) {
		link.addEventListener('click', function () {
			var name = link.querySelector('h3');
			gtag('event', 'portfolio_click', {
				project_name: name ? name.textContent : 'unknown'
			});
		});
	});

	// Track outbound links
	document.querySelectorAll('a[target="_blank"]').forEach(function (link) {
		link.addEventListener('click', function () {
			gtag('event', 'outbound_click', {
				link_url: link.href
			});
		});
	});

	// Track theme toggle
	var themeBtn = document.getElementById('themeToggle');
	if (themeBtn) {
		themeBtn.addEventListener('click', function () {
			var theme = document.documentElement.getAttribute('data-theme') || 'dark';
			gtag('event', 'theme_toggle', {
				theme: theme
			});
		});
	}

	// Track contact form submit
	var form = document.querySelector('.contact-form');
	if (form) {
		form.addEventListener('submit', function () {
			gtag('event', 'contact_form_submit');
		});
	}
})();
