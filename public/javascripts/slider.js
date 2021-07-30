const navslide = () => {
	const small = document.querySelector('.small');
	const nav = document.querySelector('.navlist');
	const navlist = document.querySelectorAll('.navlist li')



	small.addEventListener('click', () =>{
		//move nav bar in sight
		nav.classList.toggle('nav-active')

		//animate navbar links
		navlist.forEach((link, index) => {

		if (link.style.animation) {
			link.style.animation = '';
		} else {
			link.style.animation = `navListFade 1s ease forwards ${index/7+0}s`  //transition timing
		}
		})
		small.classList.toggle('toggle')
	});


}
navslide();
