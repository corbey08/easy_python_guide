function toggleTheme() {
  const lightTheme = document.getElementById('lightTheme');
  const darkTheme = document.getElementById('darkTheme');
  const themeIcon = document.getElementById('themeIcon');
  const themeText = document.getElementById('themeText');
  const prismTheme = document.getElementById('prismTheme');
  
  if (lightTheme.disabled) {
    lightTheme.disabled = false;
    darkTheme.disabled = true;
    themeIcon.textContent = '🌙';
    themeText.textContent = 'Dark Mode';
    prismTheme.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css';
    localStorage.setItem('theme', 'light');
    console.log('Switched to light theme');
  } else {
    lightTheme.disabled = true;
    darkTheme.disabled = false;
    themeIcon.textContent = '☀️';
    themeText.textContent = 'Light Mode';
    prismTheme.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-dark.min.css';
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
  const prismTheme = document.getElementById('prismTheme');
  
  if (savedTheme === 'dark') {

    lightTheme.disabled = true;
    darkTheme.disabled = false;
    if (prismTheme) prismTheme.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-dark.min.css';
    if (themeIcon) themeIcon.textContent = '☀️';
    if (themeText) themeText.textContent = 'Light Mode';
    console.log('Applied dark theme from localStorage');
  } else {
    lightTheme.disabled = false;
    darkTheme.disabled = true;
    if (prismTheme) prismTheme.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css';
    if (themeIcon) themeIcon.textContent = '🌙';
    if (themeText) themeText.textContent = 'Dark Mode';
    console.log('Applied light theme from localStorage');
  }
}
