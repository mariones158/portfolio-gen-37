const langIcon = document.querySelector('#language-toggle');

if (localStorage.getItem('lang') === 'en') {
	langIcon.checked = true;
} else {
	langIcon.checked = false;
}

function changeLang() {
	langIcon.addEventListener('change', () => {
		if (langIcon.checked) {
			localStorage.setItem('lang', 'en');
			window.location.href = 'assets/lang/indexEn.html';
		} else {
			localStorage.setItem('lang', 'es');
			window.location.href = '../../index.html';
		}
	});
}

export default changeLang;

