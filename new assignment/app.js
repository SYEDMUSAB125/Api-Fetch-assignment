const toggleBtn = document.getElementById("toggleBtn");

const container = document.getElementById("container");

const sidebar = document.getElementById("sidebar");

toggleBtn.addEventListener("click",()=>{

  // Desktop Sidebar Collapse
  if(window.innerWidth > 768){

    container.classList.toggle("active");

  }

  // Mobile Sidebar Open
  else{

    sidebar.classList.toggle("show");

  }

});