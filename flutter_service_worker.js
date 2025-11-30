'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "142f66eccc7d5a640fea8df529744702",
"assets/AssetManifest.bin.json": "5cad100ab487a18d468173c4bc969c94",
"assets/AssetManifest.json": "0245c6ef9a7fee262d30563d349af64b",
"assets/assets/fonts/IBM/font-Bold-700.ttf": "3b112e6aa65695f31fa1e1a8fb0589a9",
"assets/assets/fonts/IBM/font-ExtraLight-200.ttf": "2ac69265ef57c13e2bf7d71f0d86e30b",
"assets/assets/fonts/IBM/font-Light-300.ttf": "fc8d66d7803c5703326895c99f36aa39",
"assets/assets/fonts/IBM/font-Medium-500.ttf": "5fb42fdbaf9db9218cd8b43c4f53cae1",
"assets/assets/fonts/IBM/font-Regular-400.ttf": "bf7497338196d1ed6c36ea4d010f12a8",
"assets/assets/fonts/IBM/font-SemiBold-600.ttf": "c6da47ef5746d5af5a7bca3f07a444c3",
"assets/assets/fonts/IBM/font-Thin-100.ttf": "454434ea7b20d86b0b52f4c8a9e772d9",
"assets/assets/images/404.svg": "2c238f7297f60fbc245f97c080d3366a",
"assets/assets/images/after_purchase.svg": "ee15577f83f6dd7a8a642c63a49f4673",
"assets/assets/images/bg-svg.svg": "c8d607c205e5da33c500b4b1505503cb",
"assets/assets/images/bg.webp": "d94ea5c7f9d92af52bc4a78f6d9f624d",
"assets/assets/images/body_back.webp": "2d2dc474f6bd26a491f39ab449d9b640",
"assets/assets/images/body_front.webp": "57bb9d39491d6051c6ae83a1fa06b9d3",
"assets/assets/images/body_side.webp": "10461e9814f34875b3c57bdff88f501a",
"assets/assets/images/const-svg.svg": "0f082d3178d33db9ef44d9e7a7b9a43e",
"assets/assets/images/error.png": "1fc784623c7400939b69f406614c3172",
"assets/assets/images/icon.png": "64bdb993a13c522b4f1b20de6011623d",
"assets/assets/images/loaders/1.jpg": "ad3d8f43383b880aa28b7a836c2c63f6",
"assets/assets/images/loaders/2.jpg": "eaaff87a116b3d65ca9e2fda7fc352f9",
"assets/assets/images/loaders/3.jpg": "d69e349654433b5d1be1701c56f16edf",
"assets/assets/images/loaders/4.jpg": "5c50c8acf327a70952f625fddac01453",
"assets/assets/images/loaders/5.jpg": "6cbbf2284ad37496835b58d6e9248a0e",
"assets/assets/images/profile_setup/drugs.png": "ac37a005a90110d2a0c564af736cabc1",
"assets/assets/images/profile_setup/labs.png": "b50e8b3a74c0a862184e98df6297d611",
"assets/assets/images/profile_setup/procedures.png": "5799d173168902c907284b661fff3885",
"assets/assets/images/profile_setup/radiology.png": "651bb811ae7d7b7984c81a18a267f9db",
"assets/assets/images/profile_setup/supplies.png": "913e9d0eeea1b13f1f890de437c79169",
"assets/assets/images/register-avatar.webp": "20fc4e3b8df9054a3b606c2f3aaf3c4b",
"assets/assets/images/subscription_icons/annual.svg": "93db83cbabf9ca8bcdc19c5114fa6ec2",
"assets/assets/images/subscription_icons/half%2520annual.svg": "b50f3331f70b9c485dddb1e7e0d2ad36",
"assets/assets/images/subscription_icons/monthly.svg": "34e8704bf0af6ef701d88b1a574add1f",
"assets/assets/json/specialities.json": "131e54fcdc83b19ffc28dc8bc08e5e2d",
"assets/assets/json/visit_form_data.json": "37f2b91235d1626fd83526e06dec59ed",
"assets/assets/lang/app_ar.arb": "58347f589f78b215981545fd9bcbab85",
"assets/assets/lang/app_en.arb": "6a2d68ff5d651b058dfd81dd0b9c913d",
"assets/assets/lang/log.txt": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/sounds/notification.mp3": "b5932f1d3ea5156bb7858a7fd325422d",
"assets/FontManifest.json": "5f307e4038a3450dca80ea36197415e3",
"assets/fonts/MaterialIcons-Regular.otf": "a6e18bf98582eba64f96b99e2e7aee35",
"assets/NOTICES": "b9f346b5cd4dc65c3745a506800c0c8f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89261c1675d0a81b3f8f53cb9dc7057d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00a0d5a58ed34a52b40eb372392a8b98",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5398c916004ff411c47999e192385fbc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "008a533a2e30a490950cae91091542b2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.ico": "ae3b18903bb6aacbbdd9cda6297ee0c0",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "70619d0b20593527e96c560d3b960feb",
"icons/android-chrome-192x192.png": "f55474b35aef0d964e5d5e347d88fdda",
"icons/android-chrome-512x512.png": "64bdb993a13c522b4f1b20de6011623d",
"icons/apple-touch-icon.png": "8b5bb3d5ae6300a03a1f9ba993c9cf01",
"icons/favicon-16x16.png": "f0915e8c5d99bd63d673d2d5c65f3e7e",
"icons/favicon-32x32.png": "b4dba6ed968cf313e52eea55ee2a60a3",
"index.html": "82d48796cfb09cdcfb0db419d45477a5",
"/": "82d48796cfb09cdcfb0db419d45477a5",
"main.dart.js": "d86de78087a19953b326e02c5402adb3",
"manifest.json": "0c86feae43b2d3ea71dd42ca6022687b",
"version.json": "0d08c56d9e4beaaef25b1f4a38f7f6b8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
