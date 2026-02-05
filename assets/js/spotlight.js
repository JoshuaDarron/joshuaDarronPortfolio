// STEP 9: Gradient spotlight (mouse follow on body)
(function () {
	var isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
	if (isTouchDevice) return;

	document.addEventListener('mousemove', function (e) {
		document.body.style.setProperty('--mx', e.clientX + 'px');
		document.body.style.setProperty('--my', e.clientY + 'px');
	});
})();
