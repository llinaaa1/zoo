const CACHE_NAME = 'zoo-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/tickets.html',
  '/tickets.css',
  '/style.css',
  '/animals.png',
  '/nature.png',
  '/education.png',
  '/leo.png',
  '/panda.png',
  '/giraffe.png',
  '/zoo.png',
  '/zoo512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
