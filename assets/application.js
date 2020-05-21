let body;

window.addEventListener('load', () => {
	body = document.querySelector('body');
});

window.addEventListener('scroll', () => {
	if (!body) return;

	body.classList.toggle('scroll', window.scrollY > 0);
});

function setProductFeaturedImg(url) {
	const featuredImg = document.querySelector('#featured-img');
	if (!featuredImg) return;
	featuredImg.setAttribute('src', url);
}
