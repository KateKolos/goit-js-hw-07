import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
const itemsMarkup = createItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", itemsMarkup);

function createItemsMarkup(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
        </a>
    </div>`;
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
