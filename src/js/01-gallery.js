// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery')

function createGallery(array) {
    return array
        .map(({ original, preview, description }) =>
            `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </li>`)
        .join("")
}
console.log(galleryItems);
const result = createGallery(galleryItems)

gallery.insertAdjacentHTML('beforeend', result)

let lightbox = new SimpleLightbox('.gallery a',
    {
        captionsData: 'alt',
        captionDelay: 250,
    });
lightbox.on('show.simplelightbox', function () {
    // do something…
});