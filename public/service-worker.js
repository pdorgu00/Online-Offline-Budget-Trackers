
const FILES_TO_CACHE = [
    '/',
    '/database.js',
    '/index.html',
    '/style.css',
    '/index.js',
    
  ];
  
  const CACHE_NAME = "static-cache-v2";
  const DATA_CACHE_NAME = "data-cache-v1";
  
  //install
  self.addEventListener('install', function (event) {
    event.waitUntil(
      caches.open(CACHE_NAME).then(cache => {
        console.log("successfully cached");
        return cache.addAll(FILES_TO_CACHE);
      })
    );
  
    self.skipWaiting();
  });
  
  
  
    self.clients.claim();
  ;
  
  // fetch
  self.addEventListener("fetch", function (event) {
    if (event.request.url.includes("/api/")) {
      event.respondWith(
        caches.open(DATA_CACHE_NAME).then(cache => {
          return fetch(event.request)
            .then(res => {
              // If the res was good, clone it and store it in the cache.
              if (res.status === 200) {
                cache.put(event.request.url, res.clone());
              }
  
              return res;
            })
            .catch(err => {
              
              return cache.match(event.request);
            });
        }).catch(err => console.log(err))
      );
  
      return;
    }
    event.respondWith(
      caches.open(CACHE_NAME).then(cache => {
        return cache.match(event.request).then(res => {
          return res || fetch(event.request);
        });
      })
    );
  });