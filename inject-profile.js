document.addEventListener("DOMContentLoaded", function() {
  // Target Quarto's main generated content hub
  const mainContent = document.querySelector("main.content");
  if (!mainContent) return;

  // Track the current file location path to determine active navigation button
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  // Check utility maps to clean matching variants like 'index.html' or 'index.qmd'
  const isActive = (pageName) => {
    const baseName = pageName.replace(/\.qmd$/, '');
    return currentPath.startsWith(baseName) ? 'active' : '';
  };

  const sidebarHtml = `
    <div class="profile-sidebar">
      <div class="avatar-frame">
        <img src="images/roy.jpg" alt="Roy Mwavita">
      </div>
      <h1>Roy Mwavita</h1>
      <h4>Research Data Analyst • Monitoring & Evaluation Specialist</h4>
      <p>2+ years of experience turning program data into actionable insights for public health, research and development programs.</p>
      
      <div class="sidebar-socials">
        <a href="[https://github.com/roy-mwavita0](https://github.com/roy-mwavita0)" target="_blank"><i class="fab fa-github"></i></a>
        <a href="[https://www.linkedin.com/in/roy-mwavita-495b50220/](https://www.linkedin.com/in/roy-mwavita-495b50220/)" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="mailto:lennicroy@gmail.com"><i class="fas fa-envelope"></i></a>
      </div>
      
      <div class="sidebar-skills-title">🛠️ What I work with</div>
      <div class="sidebar-badges">
        <span class="sidebar-badge">R</span>
        <span class="sidebar-badge">Shiny</span>
        <span class="sidebar-badge">Quarto</span>
        <span class="sidebar-badge">KoboToolbox</span>
        <span class="sidebar-badge">ODK</span>
        <span class="sidebar-badge">RedCap</span>
        <span class="sidebar-badge">Python</span>
        <span class="sidebar-badge">Power BI</span>
        <span class="sidebar-badge">Excel</span>
        <span class="sidebar-badge">SQL (basic)</span>
        <span class="sidebar-badge">Data Quality Systems</span>
        <span class="sidebar-badge">M&E Frameworks</span>
      </div>
    </div>
  `;

  const navHtml = `
    <nav class="sidebar-nav">
      <a href="index.html" class="${isActive('index')}"><i class="fas fa-home"></i> Home</a>
      <a href="projects.html" class="${isActive('projects')}"><i class="fas fa-project-diagram"></i> Projects</a>
      <a href="dashboards.html" class="${isActive('dashboards')}"><i class="fas fa-chart-pie"></i> Dashboards</a>
      <a href="digest.html" class="${isActive('digest')}"><i class="fas fa-book-open"></i> R Toolkit Digest</a>
      <a href="newsletter.html" class="${isActive('newsletter')}"><i class="fas fa-paper-plane"></i> Newsletter</a>
    </nav>
  `;

  // Create primary layout structural wrappers
  const container = document.createElement("div");
  container.className = "portfolio-container";

  const showcase = document.createElement("div");
  showcase.className = "content-showcase";

  // Safely extract whatever layout or markdown content is already written inside the file
  const originalContent = mainContent.innerHTML;
  mainContent.innerHTML = "";

  // Stitch components together perfectly
  showcase.innerHTML = navHtml + originalContent;
  container.innerHTML = sidebarHtml;
  container.appendChild(showcase);
  
  // Re-inject the compiled UI layout frame back into the app container
  mainContent.appendChild(container);
});