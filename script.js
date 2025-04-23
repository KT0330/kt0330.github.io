
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Remove active class from all links
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    
    // Add active class to clicked link
    this.classList.add('active');
    
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
    
    // Change background color for projects section when clicked
    if(this.getAttribute('href') === '#projects') {
      document.querySelector('#projects').style.backgroundColor = '#e0e2d8';
    } else {
      document.querySelector('#projects').style.backgroundColor = '#e8e9e3';
    }
  });
});

// Modal functionality
const modal = document.getElementById("posterModal");
const posterLink = document.querySelector(".poster-link");
const closeBtn = document.querySelector(".close");

posterLink.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
