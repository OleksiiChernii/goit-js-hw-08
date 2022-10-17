// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

gallery.append(...galleryItems.map(createLink));

gallery.addEventListener('click', event => event.preventDefault);

function createLink(element) {
  let link = document.createElement('a');
  link.classList.add('gallery__item');
  link.setAttribute('href', element.original);
  link.append(createImage(element));
  return link;
}

function createImage({ preview, description }) {
  let img = document.createElement('img');
  img.classList.add('gallery__image');
  img.setAttribute('src', preview);
  img.setAttribute('alt', description);
  return img;
}

new SimpleLightbox('.gallery a', { docClose: true, captionsData: 'alt', captionDelay: 250});
