document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image img");
  
    images.forEach((img) => {
      const src = img.getAttribute("src");
      const image = new Image();
      image.src = src;
    });
  
    const filterButtons = document.querySelectorAll(".filter-buttons button");
  
    function filterImages(filterValue) {
      const images = document.querySelectorAll(".image");
  
      images.forEach((image) => {
        if (filterValue === "all" || image.classList.contains(filterValue)) {
          image.style.display = "block";
        } else {
          image.style.display = "none";
        }
      });
  
      // Réinitialisez lightbox après le filtrage
      lightbox.refresh();
    }
  
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const filterValue = this.getAttribute("data-filter");
        filterImages(filterValue);
      });
    });
  });
  