var gallery = document.querySelector('main');

var imageUrls = ['https://i.redd.it/scykquaxyyn71.jpg',
  'https://i.redd.it/plzqc9tcbst71.jpg',
  'https://i.redd.it/ywi0fy0hn6n31.jpg',
  'https://i.redd.it/lpmknjhnqfu41.jpg'];

var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('button');

addImageButton.addEventListener('click', function () {
// listen for a click on the button, when it happens do this function:
  if (imageUrlInput.value !== '') {
    // if the value in the input field is not a blank string, then
    imageUrls.push(imageUrlInput.value);
    // push that value in the input field onto the imageUrls array
  }
  imageUrlInput.value = '';
  // otherwise, keep the input field blank (only the placeholder text)
  updateGallery();
});

function updateGallery() {
  gallery.innerHTML = '';
  for (let i = 0; i < imageUrls.length; i++) {
    var imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }
}

updateGallery();
