import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// import { customerItems } from './customer-items.js';

const customerItems = [
  {
    preview: './img/customer_340.jpg',
    original: './img/customer_1280.jpg',
    description:
      'Це Дмитро. Він девелопер. За два роки роботи 24/7 втратив спортивну форму. І зрозумів: щось треба робити',
  },
  {
    preview: './img/shop_340.jpg',
    original: './img/shop_1280.jpg',
    description: 'Дмитро побіжав до спортивного магазину',
  },
  {
    preview: './img/equipment_340.jpg',
    original: './img/equipment_1280.jpg',
    description: 'Накупив вселякого приладдя. І почав активно займатися',
  },
  {
    preview: './img/help_340.jpg',
    original: './img/help_1280.jpg',
    description:
      'Але щось поганенько виходить без професійних підказок. Дмитру потрібна допомога!',
  },
];

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
