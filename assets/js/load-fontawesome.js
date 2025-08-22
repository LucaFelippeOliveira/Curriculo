// Carrega Font Awesome de forma assíncrona sem inline event handler
window.addEventListener('DOMContentLoaded', function() {
  var link = document.querySelector('link[rel="preload"][href*="font-awesome"]');
  if (link) {
    link.rel = 'stylesheet';
  }
});