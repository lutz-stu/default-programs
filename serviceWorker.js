const staticDefaultPrograms = "default-programs-v1"
const assets = [
  "/",
  "/index.html",
  "/text-editor",
  "/img/calculator.png",
  "/img/favicon.png",
  "/img/photo-viewer.png",
  "/img/text-editor.png",
  "/img/back.svg",
  "/img/download.svg",
  "/img/upload.svg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDefaultPrograms).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
})