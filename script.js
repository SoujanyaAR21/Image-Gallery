const galleryImages = document.querySelectorAll('.gallery img');
let currentImageIndex = 0;

function openLightbox(index) {
      currentImageIndex = index;
      document.getElementById('lightboxImage').src = galleryImages[index].src;
      document.getElementById('lightbox').style.display = 'flex';
    }

function closeLightbox() {
      document.getElementById('lightbox').style.display = 'none';
    }

document.getElementById('lightbox').addEventListener('click', function(e) {
      if (e.target === this || e.target === document.getElementById('lightboxImage')) {
        closeLightbox();
      }
    });

function nextImage() {
      currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
      document.getElementById('lightboxImage').src = galleryImages[currentImageIndex].src;
    }

function prevImage() {
      currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
      document.getElementById('lightboxImage').src = galleryImages[currentImageIndex].src;
    }

function filterImages(category) {
      galleryImages.forEach(img => {
        if (category === 'all' || img.dataset.category === category) {
          img.style.display = 'block';
        } else {
          img.style.display = 'none';
        }
      });
    }


