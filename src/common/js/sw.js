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
})

this.addEventListener('activate', function (event) {
})
