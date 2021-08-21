// Pictures
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}

if (isIE()) {
	document.querySelector('body').classList.add('ie');
}
function ibg() {
	if (isIE()) {
		var _ibg = document.querySelectorAll("._ibg");

		for (var i = 0; i < _ibg.length; i++) {
			if (_ibg[i].querySelector('img') && _ibg[i].querySelector('img').getAttribute('src') != null) {
				_ibg[i].style.backgroundImage = 'url(' + _ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}

ibg();

// Icon Menu

const iconMenu = document.querySelector('.icon-menu')
const menuBody = document.querySelector('.menu__list')

if(iconMenu){
    iconMenu.addEventListener('click', function(){
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active')
        menuBody.classList.toggle('_active')
    })

}