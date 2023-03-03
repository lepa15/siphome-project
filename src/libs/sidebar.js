const openBtn = document.querySelector('.header-block__btn-menu');
const sidebar = document.querySelector('.sidebar-block');
const closeBtn = document.querySelector('.sidebar-block__btn-close');
const body = document.body;
const active = 'active';
const lock = 'lock';

openBtn.addEventListener('click', () => {
	openBtn.classList.toggle(active);
	sidebar.classList.toggle(active);
	body.classList.toggle(lock);
	setTimeout(() => openBtn.style.display = 'none', 450)
})

closeBtn.addEventListener('click', () => {
	openBtn.classList.remove(active);
	sidebar.classList.remove(active);
	body.classList.remove(lock);
	setTimeout(() => openBtn.style.display = '', 0)
})

sidebar.querySelectorAll('.nav-block__link').forEach(link => {
	link.addEventListener('click', () => {
		openBtn.classList.remove(active);
		sidebar.classList.remove(active);
		body.classList.remove(lock);
		setTimeout(() => openBtn.style.display = '', 0)
	})
})


const anchors = document.querySelectorAll('.nav-block__link');

anchors.forEach(anchor => {
	anchor.addEventListener('click', event => {
		event.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
})


