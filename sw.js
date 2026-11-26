// Service worker minimal : il rend Foulée installable comme une appli (Chrome Android).
// Il ne met rien en cache : chaque requête part sur le réseau, donc l'appli est toujours la dernière version publiée.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request));
});
