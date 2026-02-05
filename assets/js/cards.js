// STEP 5 & 6: Card magnetic tilt + glow
(function () {
	var isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
	if (isTouchDevice) return;

	var cards = document.querySelectorAll('.service-card, .exp-card, .project-card');
	cards.forEach(function (card) {
		card.addEventListener('mousemove', function (e) {
			var rect = card.getBoundingClientRect();
			var x = e.clientX - rect.left;
			var y = e.clientY - rect.top;
			var cx = rect.width / 2;
			var cy = rect.height / 2;
			var rotateX = ((y - cy) / cy) * -3;
			var rotateY = ((x - cx) / cx) * 3;

			card.style.transform = 'perspective(600px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
			card.style.setProperty('--mouse-x', x + 'px');
			card.style.setProperty('--mouse-y', y + 'px');
		});

		card.addEventListener('mouseleave', function () {
			card.style.transform = '';
		});
	});
})();
