const CACHE = 'flechettes-v5';
const FILES = ['./index.html', './manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = e.request.url;

  // Laisser passer SANS interception :
  // - Firebase (firestore, googleapis, gstatic)
  // - Requêtes non-GET
  if(
    url.includes('firestore.googleapis.com') ||
    url.includes('firebase') ||
    url.includes('googleapis.com') ||
    url.includes('gstatic.com') ||
    e.request.method !== 'GET'
  ){
    // Fetch direct sans passer par le cache
    e.respondWith(fetch(e.request));
    return;
  }

  // Pour index.html : Network First (toujours la dernière version)
  if(e.request.mode === 'navigate' || url.includes('index.html')){
    e.respondWith(
      fetch(e.request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return response;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Autres ressources : cache first
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
