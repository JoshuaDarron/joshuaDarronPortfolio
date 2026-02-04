// STEP 3: Fade cursor after 3s
setTimeout(function () {
	var greeting = document.querySelector('.hero-greeting');
	if (greeting) greeting.classList.add('cursor-hidden');
}, 3000);

// STEP 4: Hero word-by-word reveal
(function () {
	var words = document.querySelectorAll('.hero h1 .word');
	words.forEach(function (w, i) {
		setTimeout(function () {
			w.classList.add('visible');
		}, 300 + i * 120);
	});
})();
