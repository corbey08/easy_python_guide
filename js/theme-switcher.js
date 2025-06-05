function toggleTheme() {
  const lightTheme = document.getElementById('lightTheme');
  const darkTheme = document.getElementById('darkTheme');
  const themeIcon = document.getElementById('themeIcon');
  const themeText = document.getElementById('themeText');
  
  if (lightTheme.disabled) {
    // Currently in dark mode, switching to light mode
    lightTheme.disabled = false;
    darkTheme.disabled = true;
    themeIcon.textContent = '🌙';
    themeText.textContent = 'Dark Mode';
    localStorage.setItem('theme', 'light');
    console.log('Switched to light theme');
  } else {
    // Currently in light mode, switching to dark mode
    lightTheme.disabled = true;
    darkTheme.disabled = false;
    themeIcon.textContent = '☀️';
    themeText.textContent = 'Light Mode';
    localStorage.setItem('theme', 'dark');
    console.log('Switched to dark theme');
  }
}

function initTheme() {
  console.log('Initializing theme');
  const savedTheme = localStorage.getItem('theme');
  const themeIcon = document.getElementById('themeIcon');
  const themeText = document.getElementById('themeText');
  const lightTheme = document.getElementById('lightTheme');
  const darkTheme = document.getElementById('darkTheme');
  
  if (savedTheme === 'dark') {
    // Initialize to dark theme
    lightTheme.disabled = true;
    darkTheme.disabled = false;
    if (themeIcon) themeIcon.textContent = '☀️';
    if (themeText) themeText.textContent = 'Light Mode';
    console.log('Applied dark theme from localStorage');
  } else {
    // Initialize to light theme
    lightTheme.disabled = false;
    darkTheme.disabled = true;
    if (themeIcon) themeIcon.textContent = '🌙';
    if (themeText) themeText.textContent = 'Dark Mode';
    console.log('Applied light theme from localStorage');
  }
}