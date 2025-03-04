document.addEventListener('DOMContentLoaded', function() {
     // Carrossel de depoimentos
     const depoimentosCarousel = document.querySelector('.depoimentos-carousel');
     if (depoimentosCarousel) {
     const depoimentos = document.querySelectorAll('.depoimento-item');
     let currentIndex = 0;
    
    
     function nextSlide() {
     currentIndex = (currentIndex + 1) % depoimentos.length;
     updateCarousel();
     }
    
    
     function updateCarousel() {
     const itemWidth = depoimentos[0].offsetWidth;
     depoimentosCarousel.scrollLeft = itemWidth * currentIndex;
     }
    
    
     setInterval(nextSlide, 5000);
     }
    });