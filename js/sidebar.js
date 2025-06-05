const currentPath = window.location.pathname;
const isHomePage = currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath === '/';

const sidebarHTML = `
  <div class="sidebar" id="mySidebar">
    <button class="close-button" onclick="toggleSidebar()">×</button>
    <div class="sidebar-links">
      <a href="${isHomePage ? 'index.html' : '../index.html'}">Home</a>
      <a href="${isHomePage ? 'pages/' : ''}getting_started.html">Getting Started</a>
      <a href="${isHomePage ? 'pages/' : ''}python_use.html">What is Python used for?🔜</a>
      <a href="${isHomePage ? 'pages/' : ''}installing_python.html">Installing Python🔜</a>
      <a href="${isHomePage ? 'pages/' : ''}data_types.html">Basic and Compund Data Types🔜</a>
      <a href="${isHomePage ? 'pages/' : ''}integers.html">Integers🔜</a>
      <a href="${isHomePage ? 'pages/' : ''}floating_point.html">Floating Point Numbers🔜</a>
      <a href="${isHomePage ? 'pages/' : ''}strings.html">Strings🔜</a>
      <a href="${isHomePage ? 'pages/' : ''}booleans.html">Booleans🔜</a>
      <a href="${isHomePage ? 'pages/' : ''}bytes.html">Bytes and Byte Arrays🔜</a>
      <a href="${isHomePage ? 'pages/' : ''}operaters.html">Operaters🔜</a>
      <a href="${isHomePage ? 'pages/' : ''}lists.html">Lists🔜</a>
      <a href="${isHomePage ? 'pages/' : ''}tuples.html">Tuples🔜</a>
      <a href="${isHomePage ? 'pages/' : ''}sets.html">Sets🔜</a>
      <a href="${isHomePage ? 'pages/' : ''}dictionaries.html">Dictionaries🔜</a>
      <a href="${isHomePage ? 'pages/' : ''}variables.html">Variables🔜</a>
      <a href="${isHomePage ? 'pages/' : ''}print.html">Print Statements🔜</a>
      <a href="${isHomePage ? 'pages/' : ''}input.html">Input Statements🔜</a>
      <a href="${isHomePage ? 'pages/' : ''}comments.html">Comments and Docstrings🔜</a>
      <a href="${isHomePage ? 'pages/' : ''}conditional_statements.html">Conditional Statements🔜</a>
      <a href="${isHomePage ? 'pages/' : ''}for_loops.html">For Loops🔜</a>
      <a href="${isHomePage ? 'pages/' : ''}while_loops.html">While Loops🔜</a>
      <a href="${isHomePage ? 'pages/' : ''}functions.html">Functions🔜</a>
      <a href="${isHomePage ? 'pages/' : ''}classes.html">Classes🔜</a>
      <a href="${isHomePage ? 'pages/' : ''}modules.html">Modules and Packages🔜</a>
      <a href="${isHomePage ? 'pages/' : ''}guis.html">User Interfaces🔜</a>
    </div>
  </div>
  <button class="open-button" onclick="toggleSidebar()">☰</button>
`;

// Insert sidebar when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Create a container for the sidebar HTML
  const sidebarContainer = document.getElementById('sidebarContainer');
  if (sidebarContainer) {
    sidebarContainer.innerHTML = sidebarHTML;
    
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      // Create the theme toggle button
      const themeToggle = document.createElement('button');
      themeToggle.id = 'themeToggle';
      themeToggle.onclick = toggleTheme;
      
      // Create icon span
      const themeIcon = document.createElement('span');
      themeIcon.id = 'themeIcon';
      themeToggle.appendChild(themeIcon);
      
      // Create text span with space
      const textSpace = document.createTextNode(' ');
      themeToggle.appendChild(textSpace);
      
      // Create theme text span
      const themeText = document.createElement('span');
      themeText.id = 'themeText';
      themeToggle.appendChild(themeText);
      
      // Insert the button at the top of the main content
      mainContent.insertBefore(themeToggle, mainContent.firstChild);
    }
    
    // Initialize theme after adding the button
    initTheme();
  } else {
    console.error('Sidebar container not found');
  }
  
  // Add click event to main content to close sidebar
  const mainContent = document.querySelector('.main-content');
  if (mainContent) {
    mainContent.addEventListener('click', function(event) {
      if (event.target.id === 'themeToggle' || 
          event.target.id === 'themeIcon' || 
          event.target.id === 'themeText') {
        return;
      }
      
      const sidebar = document.getElementById('mySidebar');
      if (sidebar && sidebar.style.width === "250px") {
        toggleSidebar();
      }
    });
  }
});

function toggleSidebar() {
  const sidebar = document.getElementById("mySidebar");
  const mainContent = document.querySelector('.main-content');
  
  if (sidebar) {
    if (sidebar.style.width === "250px") {
      sidebar.style.width = "0";
      if (mainContent) mainContent.style.marginLeft = "0";
    } else {
      sidebar.style.width = "250px";
      if (mainContent) mainContent.style.marginLeft = "250px";
    }
  } else {
    console.error('Sidebar element not found');
  }
}