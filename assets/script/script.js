anime.timeline({loop: true})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });









  // https://codepen.io/codeorum/pen/JjGzMRQ
	// https://codeorum.com/tutorials/simple-accordion-collapsible-element-with-vanilla-js-and-simple-animation-effect

	// Accordion
	// initAccordion('.accordion', true);
	// initAccordion('.accordion', false);

	function initAccordion(elem, option){
		document.addEventListener('click', function (e) {
			// Daca elementul nu este .acc-title, nu fa nimic
			if (!e.target.matches(elem+' .acc-title')) return;
			else {
				// Daca parintele (.acc-container) lui .acc-title are clasa .acc-active
				if(!e.target.parentElement.classList.contains('acc-active')) {
					// Daca option==true, sterge clasa .acc-active pentru celelalte elemente
					if(option==true) {
						var elementList = document.querySelectorAll(elem+' .acc-container');
						Array.prototype.forEach.call(elementList, function (e) {
	                        e.classList.remove('acc-active');
						});
					}
					// Daca nu are clasa .acc-active, adauga clasa .acc-active
					e.target.parentElement.classList.add('acc-active');
				} else {
					// Daca are clasa .acc-active, remove clasa .acc-active
					e.target.parentElement.classList.remove('acc-active');
				}
			}
		});
	}

	// Deschide doar unul, inchide celelalte
	initAccordion('.accordion.acc-single-open', true);
	// Deschide multiple, fara a inchide celelalte
	initAccordion('.accordion.acc-multiple-open', false);