function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
  
    sidebar.classList.toggle('show');
    overlay.classList.toggle('show');
  }
  
  document.querySelector('.showButton').addEventListener('click', toggleSidebar);
  document.querySelector('.overlay').addEventListener('click', toggleSidebar);
  