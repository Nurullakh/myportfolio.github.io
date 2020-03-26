const links = document.querySelectorAll('a[href*="#"]')
links.forEach((link) => {
	link.addEventListener('click', function(e) {
		e.preventDefault()
		const blockId = link.getAttribute('href')
		document.querySelector('' + blockId).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
})

const blocks = document.querySelectorAll('.third__block')
const thirdText = document.querySelectorAll('.third__text')

blocks.forEach((el) => {
	el.addEventListener('mouseover', (e) => {
		if (e.target === blocks[0]) {
			thirdText[0].style.display = 'block'
		} else if (e.target === blocks[1]) {
			thirdText[1].style.display = 'block'
		} else if (e.target === blocks[2]) {
			thirdText[2].style.display = 'block'
		}
	})
	el.addEventListener('mouseout', () => {
		thirdText.forEach((el) => {
			el.style.display = 'none'
		})
	})
})

