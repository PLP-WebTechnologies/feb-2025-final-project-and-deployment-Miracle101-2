document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.classList.toggle('dark', savedTheme === 'dark');
      document.getElementById('themeSelect').value = savedTheme;
    }
  });
  
  document.getElementById('saveBtn').addEventListener('click', () => {
    const theme = document.getElementById('themeSelect').value;
    localStorage.setItem('theme', theme);
    document.body.classList.toggle('dark', theme === 'dark');
  });
  
  document.getElementById('launchBtn').addEventListener('click', () => {
    const rocket = document.getElementById('rocket');
    rocket.classList.remove('launching');
    void rocket.offsetWidth;
    rocket.classList.add('launching');
  });
  