import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<div class="gallery__item">
    <a class="gallery__link" href="${original}" download=none>
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
</div>`;
    })
    .join('');
}

const pictureModal = document.querySelector('.modal');
pictureModal.addEventListener('click', toggleModal);
galleryContainer.addEventListener('click', toggleModal);

function toggleModal() {
  pictureModal.classList.toggle('is-hidden');
  document.body.classList.toggle('modal-open');
}
