document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true, 
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    touchRatio: 1,
    grabCursor: true,
  });

  // Animate underline on page load
  const highlight = document.querySelector('.highlight');
  if (highlight) {
    setTimeout(() => {
      highlight.classList.add('animate');
    }, 500); // Delay by 500ms for dramatic effect
  }

  // Move accordion code inside DOMContentLoaded
  const accordionHeaders = document.querySelectorAll(".accordion-header");
  const accordionContents = document.querySelectorAll(".accordion-content");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const accordionItem = header.parentElement;
      const accordionContent = accordionItem.querySelector(".accordion-content");

      accordionHeaders.forEach((h) => {
      if (h !== header) {
        h.classList.remove("active");
      }
    });

      accordionContents.forEach((content) => {
        if (content !== accordionContent) {
          content.classList.remove("active");
          content.style.maxHeight = "0";
        }
      });
      
      header.classList.toggle("active"); // Add this line
      accordionContent.classList.toggle("active");

      if (accordionContent.classList.contains("active")) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px"; // Fixed this line
      } else {
        accordionContent.style.maxHeight = "0";
      }
    });
  });
});