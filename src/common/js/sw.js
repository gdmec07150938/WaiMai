/**
 * Created by lupin on 17-6-7.
 */
this.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('v1').then(function (cache) {
      return cache.addAll([
        '/index.html'
      ]);
    })
  );
});

this.addEventListener('fetch', function (event) {
  console.log(event.request)
  event.respondWith(
    caches.match(event.request)
      .then(function (resp) {
        return resp || fetch(event.request).then(function (response) {
            return caches.open('v1').then(function (cache) {
              cache.put(event.request, response.clone())
              return response
            })
          })
      })
  )
})

this.addEventListener('activate', function (event) {
})
