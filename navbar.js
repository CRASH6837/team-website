document.addEventListener("DOMContentLoaded", function() {
  const navbarHTML = `
    <nav class="navbar">
      <ul class="nav-links">
        <li>
          <a href="/team-website" class="nav-link-item">Home</a>
        </li>
        <li>
          <a href="/team-website/rookie-resources" class="nav-link-item">Rookie Resources</a>
        </li>
      </ul>
    </nav>
  `; 
  document.getElementById("navbar-container").innerHTML = navbarHTML;
});
