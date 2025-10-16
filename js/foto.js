// Aqui manejamos la lógica de la galería, especialmente la vista del álbum y el modal
function createImage(src) {
  const image = document.createElement('img');
  image.src = src;
  return image;
}

// Manejadores de eventos, uno para abrir el modal y otro para cerrarlo
function onThumbnailClick(event) {
  const image = createImage(event.currentTarget.src);
  const modalView = document.querySelector('#modal-view');

  document.body.classList.add('no-scroll');

  modalView.style.top = window.pageYOffset + 'px';

  modalView.appendChild(image);
  modalView.classList.remove('hidden');
}

// Cerrar el modal al hacer clic en cualquier parte del mismo
function onModalClick() {
  const modalView = document.querySelector('#modal-view');

  document.body.classList.remove('no-scroll');

  modalView.classList.add('hidden');

  modalView.innerHTML = '';
}

// Inicialización: crear miniaturas y configurar eventos
const albumView = document.querySelector('#album-view');

// Usamos la lista de fotos definida en foto-list.js
for (let i = 0; i < PHOTO_LIST.length; i++) {
  const photoSrc = PHOTO_LIST[i];
  const image = createImage(photoSrc); // Crear la miniatura
  image.addEventListener('click', onThumbnailClick); // Configurar el evento de clic
  albumView.appendChild(image); // Añadir la miniatura al álbum
}

// Configurar el evento de clic para cerrar el modal
const modalView = document.querySelector('#modal-view');
modalView.addEventListener('click', onModalClick);
