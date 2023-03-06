//* Анимация для header 

let minOffset = 67; //670

window.onscroll = function () {
	let has_class = document.body.classList.contains("is_scrolled");

	if (minOffset < document.documentElement.scrollTop) {
		if (!has_class) {
			document.body.classList.add("is_scrolled");
		}

	} else if (has_class) {
		document.body.classList.remove("is_scrolled")

	}
}


//* CSS-анимация при прокрутке страницы
const description = document.querySelector('.features-block__description');
const messageWrapper = document.querySelector('.features-block__message-wrapper');
const messages = document.querySelectorAll('.features-block__message');
const featuresMainContentWrapper = document.querySelector('.features-block__main-content-wrapper');
const featuresSecondaryItems = document.querySelectorAll('.features-block__secondary-item');
 


const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('animation');
			return
		}
	})
})

observer.observe(description);
observer.observe(messageWrapper);
observer.observe(featuresMainContentWrapper);
messages.forEach(message => observer.observe(message))
featuresSecondaryItems.forEach(item => observer.observe(item))