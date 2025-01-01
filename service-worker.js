const CACHE_NAME = "rabs-cache-v1";
const urlsToCache = [
  "/index.html",
  "/manifest.json",
  "/rabs.jpeg",
  // Add other assets like CSS, JS files, and images here
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
