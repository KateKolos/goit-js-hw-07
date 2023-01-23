import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const itemsMarkup = createItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", itemsMarkup);

function createItemsMarkup(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" 
            alt="${description}" />
        </a>`;
    })
    .join("");
}

galleryContainer.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();
  if (
    evt.target.nodeName !== "IMG" &&
    !document.querySelector(".basicLightbox ")
  ) {
    return;
  }
  const source = evt.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${source} "width="800" height="600">`);

  instance.show();

  document.addEventListener("keydown", addKeyboardHandler);

  function addKeyboardHandler(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 100,
  captionType: "alt",
});

// var lightbox = new SimpleLightbox(".gallery a", {
//   /* options */
// });
