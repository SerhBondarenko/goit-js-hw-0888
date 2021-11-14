// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const paletteContainer = document.querySelector('.gallery');
const cardsMarkup = createColorCardsMarkup(galleryItems);

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);
paletteContainer.addEventListener('click', onPaletteContainerClick);

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, enableKeyboard: true, });

function createColorCardsMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}"
       alt="${description}"
       title="${description}"/>
    </a> `;
  }).join('');
};
  
function onPaletteContainerClick(e) {
    e.preventDefault()
 };