/*
@init feather icons
*/
feather.replace()

/*
@big slider for index page
*/
var slider = new Siema({
  selector: '.main-slider',
  duration: 200,
  easing: 'ease-out',
  perPage: 1,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: false,
  rtl: false,
  onChange: checkDots
});

function checkDots() {
 clickDot(this.currentSlide, this)
}

Siema.prototype.addPagination = function() {
	var btn_wrapper = document.createElement('div');
	btn_wrapper.classList.add("dots");
	for (let i = 0; i < this.innerElements.length; i++) {
		var btn = document.createElement('button');
		if(!i) {
			btn.classList.add('dot-active');
		}
		btn.classList.add('dot');
		btn.addEventListener('click', () => clickDot(i, this));
		btn_wrapper.appendChild(btn);
	}
	this.selector.appendChild(btn_wrapper);
}

slider.addPagination();

function clickDot(i, context) {
	context.goTo(i);
	let dotList = document.getElementsByClassName('dot');
	for( var j = 0; j < dotList.length; j++) {
		dotList[j].classList.remove('dot-active');
	}
	dotList[i].classList.add('dot-active');
}