// SPA Router — vanilla JS with History API
(function () {
	var mainContent = document.getElementById('main-content');
	var detailView = document.getElementById('detail-view');
	var mainNav = document.querySelector('nav');
	var defaultTitle = 'Joshua D. Phillips — Developer Relations Engineer | AI, Data & Privacy';

	function parseRoute(path) {
		var match = path.match(/^\/experience\/([a-zA-Z0-9_-]+)\/?$/);
		if (match) return { view: 'experience', slug: match[1] };
		return { view: 'home' };
	}

	function render(path, isPopstate) {
		var route = parseRoute(path);

		if (route.view === 'experience') {
			mainContent.style.display = 'none';
			mainNav.style.display = 'none';
			detailView.style.display = '';
			clearExperience();
			renderExperience(route.slug);
			if (!isPopstate) window.scrollTo(0, 0);
		} else {
			detailView.style.display = 'none';
			mainContent.style.display = '';
			mainNav.style.display = '';
			document.title = defaultTitle;
			if (!isPopstate) {
				// Handle hash scrolling for home view
				var hash = window.location.hash;
				if (hash) {
					var target = document.querySelector(hash);
					if (target) target.scrollIntoView();
				}
			}
		}

		// Track pageview in Google Analytics
		if (typeof gtag === 'function') {
			gtag('event', 'page_view', { page_path: path });
		}
	}

	function navigate(path) {
		// Save current scroll position in current history entry
		history.replaceState({ scrollY: window.scrollY }, '');
		history.pushState({}, '', path);
		render(path, false);
	}

	// Handle back/forward buttons
	window.addEventListener('popstate', function (e) {
		// Temporarily disable smooth scroll for instant position restore
		document.documentElement.style.scrollBehavior = 'auto';

		render(window.location.pathname + window.location.hash, true);

		// Restore scroll position from state
		if (e.state && typeof e.state.scrollY === 'number') {
			window.scrollTo(0, e.state.scrollY);
		}

		// Re-enable smooth scroll after a frame
		requestAnimationFrame(function () {
			document.documentElement.style.scrollBehavior = '';
		});
	});

	// Intercept internal link clicks
	document.addEventListener('click', function (e) {
		var link = e.target.closest('a');
		if (!link) return;

		var href = link.getAttribute('href');
		if (!href) return;

		// Handle experience detail links
		var expMatch = href.match(/^\/experience\/([a-zA-Z0-9_-]+)\/?$/);
		if (expMatch) {
			e.preventDefault();
			navigate(href);
			return;
		}

		// Handle back link from detail view
		if (link.classList.contains('back-link')) {
			e.preventDefault();
			if (history.length > 1) {
				history.back();
			} else {
				navigate('/');
			}
			return;
		}
	});

	// Initial render on page load
	var initialPath = window.location.pathname;

	// Handle GitHub Pages 404 redirect
	var spaRedirect = new URLSearchParams(window.location.search).get('_spa_path');
	if (spaRedirect) {
		initialPath = spaRedirect;
		history.replaceState({}, '', spaRedirect);
	}

	// Handle legacy experience.html?company=slug URLs
	if (window.location.pathname.indexOf('experience.html') !== -1) {
		var slug = new URLSearchParams(window.location.search).get('company');
		if (slug) {
			initialPath = '/experience/' + slug;
			history.replaceState({}, '', initialPath);
		}
	}

	render(initialPath, false);
})();
