let themeSwitcher = document.querySelector('.theme-switcher');
let currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
    currentTheme = 'dark';
}
else if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

function toggleTheme() {
  currentTheme = document.documentElement.getAttribute('data-theme');
  let switchToTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', switchToTheme);
  localStorage.setItem('theme', switchToTheme);
}

themeSwitcher.addEventListener('click', toggleTheme);

// 監聽用戶系統主題更改
let systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
systemTheme.addEventListener('change', function() {
  if (systemTheme.matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
});