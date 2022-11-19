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
    <a class="gallery__link" href="${original}" target="_self">
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

    
galleryContainer.addEventListener('click',  showModal);
let instance;
function showModal(evt) {
    const pickedPicture = evt.target;
    if (pickedPicture.nodeName !== "IMG") {
        return;
    }
        instance = basicLightbox.create(`
        <img src="${pickedPicture.dataset.source}" alt="${pickedPicture.alt}" >
    `)
        instance.show();
        document.addEventListener('keydown', escPressHandler);
}


function escPressHandler(evt) {
    if (evt.key !== "Escape") {return;}
    document.removeEventListener('keydown', escPressHandler);
    instance.close();
}
     
    
