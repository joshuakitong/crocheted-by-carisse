const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('visible');
		}
	});
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

const header = document.querySelector('header');
const scrollBtn = document.getElementById('scrollToTop');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
let currentImages = [];
let currentIndex = 0;

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
    document.getElementById('logo')?.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
    document.getElementById('logo')?.classList.remove('scrolled');
  }
});

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('.gallery-item').forEach(item => {
	item.addEventListener('click', () => {
		const imageList = item.dataset.images.split(',');
		currentImages = imageList;
		currentIndex = 0;
		showImage();
		lightbox.style.display = 'flex';
		document.body.classList.add('no-scroll');
	});
});

document.querySelectorAll('.gallery-item img').forEach(img => {
	img.addEventListener('click', () => {
		lightbox.style.display = 'flex';
		lightboxImg.src = img.src;
		document.body.classList.add('no-scroll');
	});
});

document.getElementById('lightbox').addEventListener('click', function (e) {
	if (e.target.id === 'lightbox') {
		closeLightbox();
	}
});

document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape') {
		closeLightbox();
	}
});

function showImage() {
	lightboxImg.src = currentImages[currentIndex];
}

function closeLightbox() {
	lightbox.style.display = 'none';
	currentImages = [];
	document.body.classList.remove('no-scroll');
}

function nextImage() {
	if (currentImages.length > 1) {
		currentIndex = (currentIndex + 1) % currentImages.length;
		showImage();
	}
}

function prevImage() {
	if (currentImages.length > 1) {
		currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
		showImage();
	}
}
