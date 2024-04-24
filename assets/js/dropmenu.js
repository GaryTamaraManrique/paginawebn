//Menú se cierre cuando se hace clic fuera de él
document.addEventListener("click", function(e) {
    var dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function(dropdown) {
      if (!dropdown.contains(e.target)) {
        var menu = dropdown.querySelector('.dropdown-menu');
        if (menu.style.display === "block") {
          menu.style.display = "none";
        }
      }
    });
  });