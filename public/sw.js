// Basic service worker to eliminate 404 errors
// Note: This is a minimal service worker to prevent 404 errors.
// For full PWA features, additional configuration would be needed.

const CACHE_NAME = "flytech-cache-v1";

// Install event
self.addEventListener("install", (event) => {
  console.log("Service Worker: Install Event");
  self.skipWaiting();
});

// Activate event
self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activate Event");
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Service Worker: Deleting old cache");
            return caches.delete(cache);
          }
        }),
      );
    }),
  );
});

// Optional: Basic fetch handler (currently just passes through)
self.addEventListener("fetch", (event) => {
  // For now, just pass through all requests
  // In the future, this could cache resources for offline functionality
});
