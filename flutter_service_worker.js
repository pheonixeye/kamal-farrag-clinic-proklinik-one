'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "a99703f966316b267f1898dfa2d90ac5",
"index.html": "e8d5aa82b2a540b572d2ae536dd24c85",
"/": "e8d5aa82b2a540b572d2ae536dd24c85",
"main.dart.js": "ba12b42cc1844ddc1606b9336422bcd3",
"version.json": "0d08c56d9e4beaaef25b1f4a38f7f6b8",
"assets/assets/images/404.svg": "507fd10098538408ba07f7b97551187d",
"assets/assets/images/after_purchase.svg": "ee15577f83f6dd7a8a642c63a49f4673",
"assets/assets/images/bg-svg.svg": "375fd7473b052e726eef6c2fbf9241fe",
"assets/assets/images/bg.webp": "d94ea5c7f9d92af52bc4a78f6d9f624d",
"assets/assets/images/body_back.webp": "2d2dc474f6bd26a491f39ab449d9b640",
"assets/assets/images/body_front.webp": "57bb9d39491d6051c6ae83a1fa06b9d3",
"assets/assets/images/body_side.webp": "10461e9814f34875b3c57bdff88f501a",
"assets/assets/images/const-svg.svg": "2c4e99705d2b46978f756ffacf21601c",
"assets/assets/images/error.png": "1fc784623c7400939b69f406614c3172",
"assets/assets/images/icon.png": "64bdb993a13c522b4f1b20de6011623d",
"assets/assets/images/register-avatar.webp": "20fc4e3b8df9054a3b606c2f3aaf3c4b",
"assets/assets/images/profile_setup/drugs.png": "ac37a005a90110d2a0c564af736cabc1",
"assets/assets/images/profile_setup/labs.png": "b50e8b3a74c0a862184e98df6297d611",
"assets/assets/images/profile_setup/procedures.png": "5799d173168902c907284b661fff3885",
"assets/assets/images/profile_setup/radiology.png": "651bb811ae7d7b7984c81a18a267f9db",
"assets/assets/images/profile_setup/supplies.png": "913e9d0eeea1b13f1f890de437c79169",
"assets/assets/images/subscription_icons/annual.svg": "93db83cbabf9ca8bcdc19c5114fa6ec2",
"assets/assets/images/subscription_icons/half%2520annual.svg": "b50f3331f70b9c485dddb1e7e0d2ad36",
"assets/assets/images/subscription_icons/monthly.svg": "34e8704bf0af6ef701d88b1a574add1f",
"assets/assets/images/loaders/1.jpg": "ad3d8f43383b880aa28b7a836c2c63f6",
"assets/assets/images/loaders/2.jpg": "eaaff87a116b3d65ca9e2fda7fc352f9",
"assets/assets/images/loaders/3.jpg": "d69e349654433b5d1be1701c56f16edf",
"assets/assets/images/loaders/4.jpg": "5c50c8acf327a70952f625fddac01453",
"assets/assets/images/loaders/5.jpg": "6cbbf2284ad37496835b58d6e9248a0e",
"assets/assets/fonts/IBM/font-Bold-700.ttf": "3b112e6aa65695f31fa1e1a8fb0589a9",
"assets/assets/fonts/IBM/font-ExtraLight-200.ttf": "2ac69265ef57c13e2bf7d71f0d86e30b",
"assets/assets/fonts/IBM/font-Light-300.ttf": "fc8d66d7803c5703326895c99f36aa39",
"assets/assets/fonts/IBM/font-Medium-500.ttf": "5fb42fdbaf9db9218cd8b43c4f53cae1",
"assets/assets/fonts/IBM/font-Regular-400.ttf": "bf7497338196d1ed6c36ea4d010f12a8",
"assets/assets/fonts/IBM/font-SemiBold-600.ttf": "c6da47ef5746d5af5a7bca3f07a444c3",
"assets/assets/fonts/IBM/font-Thin-100.ttf": "454434ea7b20d86b0b52f4c8a9e772d9",
"assets/assets/lang/app_ar.arb": "59dad32ef5a3d8d9c844d6636cbc70c8",
"assets/assets/lang/app_en.arb": "75ba0251777e8daa1fffaee8e6cd6da2",
"assets/assets/lang/log.txt": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/json/specialities.json": "e7dc488fd62eb09092230c8f1b7ebd10",
"assets/assets/json/visit_form_data.json": "dfb928ea9bf1cd5c66934a34887213a9",
"assets/assets/sounds/notification.mp3": "b5932f1d3ea5156bb7858a7fd325422d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00a0d5a58ed34a52b40eb372392a8b98",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5398c916004ff411c47999e192385fbc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "008a533a2e30a490950cae91091542b2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89261c1675d0a81b3f8f53cb9dc7057d",
"assets/fonts/MaterialIcons-Regular.otf": "defe8bac2103fc4c89d742355c9f1ca9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "142f66eccc7d5a640fea8df529744702",
"assets/AssetManifest.bin.json": "5cad100ab487a18d468173c4bc969c94",
"assets/FontManifest.json": "7580441a0a9acef0512d626225dd0487",
"assets/NOTICES": "c1357cdc9d4a4c4f18ef5c3709e46108",
"favicon.ico": "ae3b18903bb6aacbbdd9cda6297ee0c0",
"icons/android-chrome-192x192.png": "f55474b35aef0d964e5d5e347d88fdda",
"icons/android-chrome-512x512.png": "64bdb993a13c522b4f1b20de6011623d",
"icons/apple-touch-icon.png": "8b5bb3d5ae6300a03a1f9ba993c9cf01",
"icons/favicon-16x16.png": "f0915e8c5d99bd63d673d2d5c65f3e7e",
"icons/favicon-32x32.png": "b4dba6ed968cf313e52eea55ee2a60a3",
"manifest.json": "5ee55aafa39143f640de6aff35c1cce3"};
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
