window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  // Hide the loader after 1 second for smooth transition
  setTimeout(() => {
      loader.style.display = "none";
      content.style.display = "block";
  }, 5000);
});

// Select the menu icon and navigation links
document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.querySelector(".nav-links");

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});



// // Add active class to the clicked link
// document.querySelectorAll('.nav-links a').forEach(link => {
//     link.addEventListener('click', () => {
//       document.querySelector('.nav-links a.active')?.classList.remove('active');
//       link.classList.add('active');
//     });
//   });
// // JavaScript for Blog Section

// document.addEventListener('DOMContentLoaded', function() {
//   const readMoreLinks = document.querySelectorAll('.read-more');

//   readMoreLinks.forEach(link => {
//     link.addEventListener('click', function(event) {
//       event.preventDefault();
//       const url = this.getAttribute('data-link');
//       window.open(url, '_blank');
//     });
//   });
// });
// document.addEventListener('DOMContentLoaded', function() {
//   const socialIcons = document.querySelectorAll('.social-icon');
  
//   socialIcons.forEach(icon => {
//     icon.addEventListener('click', function(event) {
//       event.preventDefault();
//       const platform = this.querySelector('i').classList[1].split('-')[1]; // Get platform name
//       alert(`Redirecting to our ${platform.charAt(0).toUpperCase() + platform.slice(1)} page!`);
//     });
//   });
// });
