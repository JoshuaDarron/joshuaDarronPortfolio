// Timeline scroll animation
(function () {
	var timeline = document.getElementById('experienceTimeline');
	var line = document.getElementById('timelineLine');
	if (!timeline || !line) return;

	var items = timeline.querySelectorAll('.timeline-item');

	function updateTimeline() {
		var timelineRect = timeline.getBoundingClientRect();
		var timelineTop = timelineRect.top;
		var timelineHeight = timelineRect.height;
		var viewportMiddle = window.innerHeight * 0.6;

		// Calculate how far through the timeline the scroll position is
		var scrollProgress = (viewportMiddle - timelineTop) / timelineHeight;
		scrollProgress = Math.max(0, Math.min(1, scrollProgress));

		line.style.height = (scrollProgress * timelineHeight) + 'px';

		// Activate items as they pass the viewport middle
		items.forEach(function (item) {
			var itemRect = item.getBoundingClientRect();
			var itemMiddle = itemRect.top + itemRect.height / 2;
			if (itemMiddle < viewportMiddle) {
				item.classList.add('active');
			} else {
				item.classList.remove('active');
			}
		});
	}

	window.addEventListener('scroll', updateTimeline, { passive: true });
	updateTimeline();
})();
