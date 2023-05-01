const modal = document.querySelector('.modal-item');
window.addEventListener('click', function (event) {
	if (event.target.hasAttribute('data-cart')) {
		const card = event.target.closest('.catalog-card');
		const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.watch-image').getAttribute('src'),
			title: card.querySelector('.title-card').innerText,
			price: card.querySelector('.price').innerText,
		};
		const itemInCart = modal.querySelector(`[data-id="${productInfo.id}"]`);
		if (!itemInCart) {
			const cartItemHTML = `<div data-id="${productInfo.id}">
			<img class="watch-image" src="${productInfo.imgSrc}" alt="Steel watch" width="276"/>
			<h3 class="title-card">${productInfo.title}</h3>
			<p class="price">${productInfo.price}</p>
			</div>`;
			modal.insertAdjacentHTML('beforeend', cartItemHTML);
		}
	}
});