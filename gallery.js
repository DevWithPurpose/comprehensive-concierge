window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    // Hide the loader after 5 seconds for smooth transition
    setTimeout(() => {
        loader.style.display = "none";
        content.style.display = "block";
    }, 5000);
});

  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

