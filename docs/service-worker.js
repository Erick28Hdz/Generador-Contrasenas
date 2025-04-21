self.addEventListener('install', e => {
    e.waitUntil(
      caches.open('pwacache').then(cache => {
        return cache.addAll([
          '/docs/',             // Cambiar la ruta raíz
          '/docs/index.html',   // Ruta completa a index.html
          '/docs/style.css',
          '/docs/app.js',
          '/docs/manifest.json',
          '/docs/icon-128.png',
          '/docs/icon-512.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', e => {
    e.respondWith(
      caches.match(e.request).then(response => response || fetch(e.request))
    );
  });
  