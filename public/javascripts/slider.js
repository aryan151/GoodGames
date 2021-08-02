const navslide = () => {
	const small = document.querySelector('.small');  //small navbar
	const nav = document.querySelector('.navlist');
	const navlist = document.querySelectorAll('.navlist li')

	small.addEventListener('click', () =>{
		//morph nav bar when screen is smaller
		nav.classList.toggle('nav-active')

		//animate navbar links
		navlist.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = '';
		} else {
			link.style.animation = `navListFade 0.5s ease forwards ${index/7}s`
		}
		})
	});
}
navslide();
