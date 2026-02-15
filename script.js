const galleryImages = document.querySelectorAll('.gallery img');
let currentImageIndex = 0;

function openLightbox(index) {
      currentImageIndex = index;
      document.getElementById('lightboxImage').src = galleryImages[index].src;
      document.getElementById('lightbox').style.display = 'flex';
    }
