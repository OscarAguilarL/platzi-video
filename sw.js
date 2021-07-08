const VERSION = 'v1';

self.addEventListener('install', (event) => {
  event.waitUntil(precache());
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  // get
  if (request.method !== 'GET') {
    return;
  }

  // buscar en cache
  event.respondWith(cachedResponse(request));

  // actualizar el cache
  event.waitUntil(updateCache, request);
});

const precache = async () => {
  const cache = await caches.open(VERSION);
  return cache.addAll([
    '/',
    '/index.html',
    '/assets/js/index.js',
    '/assets/js/MediaPlayer.js',
    '/assets/js/plugins/AutoPlay.js',
    '/assets/js/plugins/AutoPause.js',
    '/assets/css/index.css',
    '/assets/video/pelicula.mp4',
  ]);
};

const cachedResponse = async (request) => {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);
  return response || fetch(request);
};

const updateCache = async (request) => {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  return cache.put(request, response);
};
