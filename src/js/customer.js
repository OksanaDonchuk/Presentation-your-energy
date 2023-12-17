import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { customerItems } from './customer-items.js';

const gallery = document.querySelector('.customer');

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `<li class="customer_items">
  <a class="customer_link" href="${original}">
    <img
      class="customer_img"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join('');
}

console.log(customerItems);

gallery.insertAdjacentHTML('afterbegin', createMarkup(customerItems));

const lightbox = new SimpleLightbox('.customer a', {
  captionsData: 'alt',
  captionDelay: 250,
});
