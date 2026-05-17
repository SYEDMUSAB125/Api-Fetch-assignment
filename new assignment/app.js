const toggleBtn = document.getElementById("toggleBtn");
const container = document.getElementById("container");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

toggleBtn.addEventListener("click",()=>{

  // Desktop
  if(window.innerWidth > 768){

    container.classList.toggle("active");

  }

  // Mobile
  else{

    sidebar.classList.toggle("show");
    overlay.classList.toggle("show");

  }

});

// Close sidebar when clicking overlay
overlay.addEventListener("click",()=>{

  sidebar.classList.remove("show");
  overlay.classList.remove("show");

});