'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "89ef9374b6b0e3304685404ee86e0606",
".git/config": "1047c5bc6bcfe0d06b8b1e411cf70b23",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4d09309d768f645e97d17e40bc3c9ca9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "fd580762e4f582ffe4a8be0a5d240135",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fae299ca304e41f6c207228fff52b8c1",
".git/logs/refs/heads/main": "fae299ca304e41f6c207228fff52b8c1",
".git/logs/refs/remotes/origin/HEAD": "fe7f618da1228889fbd8f3862ebd8a4c",
".git/logs/refs/remotes/origin/main": "3fed190000d6254ad5a5537f97686c37",
".git/objects/0f/017ecd3398ba93f32fce2bd6df2cd16cad5dda": "c3479e6c1d57384d531ab747f3ba1a63",
".git/objects/13/f4ca1f492aa83409efb242befc6cfc95c845a6": "ebbf40d7da7ecca4de0c9a862646b3d1",
".git/objects/29/a5332117898fe03a0d482a4cdcb97199ad0af3": "bce0a28464ba58e5f70b3eaf96861fef",
".git/objects/2d/703a68ba798eddc5979b0014868b3634d2b7ce": "933bacbf89939a3314f166f0e1f18f6a",
".git/objects/2e/8f5e6cd519547ad1661d3f310d178f5ca81598": "0b28451300089ed0aefc75e8cda9829c",
".git/objects/45/559cfb58650d299b056169d3d982e34daf9195": "c2842a4bb8eaaefc3af6219643a3bac9",
".git/objects/65/dd821ba3af14c5f05e637530bc1fc3a70c253a": "12ae48793255c53edf45ebc491f52f8e",
".git/objects/68/023d5427081fbc057fd556190e84bcb6a57e56": "1e1d14d943dc4c974ecf04ec421db246",
".git/objects/6c/64f73d87986798eca75d2b46807906c2cc975e": "3273ed77bf6aeeff4b273318d25922f7",
".git/objects/70/79f2bca31add3fd70458bb2bee8d751dbfb710": "0bbf7b1a26c2baafaef91dd2fa2dc0a5",
".git/objects/76/6506b5fd199f2396673f31efe9dcd444ef4344": "9f3a31e2eef45241cf133e1b1fa7f8c6",
".git/objects/8c/51aae9d987f4f7270ad0eef5452bebfff1c3bc": "b66008424b80c1f0bead563d3cdfe7fc",
".git/objects/97/90a52c5e2d5aeb6619d1e580564f2d362d722b": "1ff054782ad9d7f01b80ba2e592f8f6a",
".git/objects/9a/ee08cdd9320639338121e4de0a6bb57406c735": "f456579cae7626c783c32f433e44a6e5",
".git/objects/a0/d32be6b1b4aac4f9dcdf171766c17fe281a646": "536c01751d26ad8f9d45f0aade29d3cd",
".git/objects/a2/586bdc42c2b36de9ac98e1c06e2a9d6f805363": "db37bc8081492a3bd59f66d0bbaefe08",
".git/objects/a7/677bb5603ece24f5b72715bb23496bb2d7d8e0": "db08475ddbe80bbcbb4e428fa8c9ff11",
".git/objects/c7/82d66e676188a32473e1a3709672217d2102cd": "afc1145e97d93ad880a165405d4722b1",
".git/objects/ca/db3976b8dbd158ac9d338a0afc7d5d2f1cd237": "59508283c72428194d02c11b66a8febe",
".git/objects/cb/eccdf2b54b2484558724888ff124405b584166": "adc54007f411e3cd398559ca77326142",
".git/objects/ce/a5db13a5a6f73f985337206204ea5fc88edd97": "40e954ce9d05f0c756155e79d7083d5c",
".git/objects/d7/3f6fc67e6746a19f26423800c9e0d4b3f05c7d": "4c754a03a6884b3a5f252b84e4e2383a",
".git/objects/e2/1f857eb2abd4489ab91a1741c2ac3f1015c28b": "0b4425daf8624bc69240ff1b3355be12",
".git/objects/f3/8a189e17193f5810ad4b1c17ed352242944661": "903e92866e19afcace0122f823904662",
".git/objects/f9/c0f1f1c50e423011c621ce6173f92af00a9067": "f6852e169cd8cbc12acc5925a2f29b1d",
".git/objects/pack/pack-e739cdf54a03b50e2f67059ed539bb628f3f4f55.idx": "91a9b6a7b3678afb148ebd7e5893062a",
".git/objects/pack/pack-e739cdf54a03b50e2f67059ed539bb628f3f4f55.pack": "6d66b70002c6be8eefe4236035ed3720",
".git/ORIG_HEAD": "9266b1c9b7af714171b0d596e426ccd3",
".git/packed-refs": "0bab4b256fbda0331aa482501e0f53b8",
".git/refs/heads/main": "9266b1c9b7af714171b0d596e426ccd3",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "9266b1c9b7af714171b0d596e426ccd3",
".git/refs/tags/android_v0.1.1": "301bf16fb833d0bad2a76097a57fcc49",
"assets/AssetManifest.bin": "a3d922a0b0bb96200631d1d9f758ce7d",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "5ed062a59bb378e005c1a598256797e8",
"assets/NOTICES": "24642dacef01f06795b5ae907ee95fc6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "57f2f020e63be0dd85efafc7b7b25d80",
"canvaskit/canvaskit.js": "86f049b6f931d2d4f2c21c9419bfca74",
"canvaskit/canvaskit.wasm": "236ae09e794721c0304bc4a6c190309f",
"favicon.png": "fe5808068e7bd00e0371941ab243cc9a",
"flutter.js": "f916451a1f92b11ff8e28c4f8286d327",
"icons/Icon-192.png": "d7dc35db087de7a58992d7876554938a",
"icons/Icon-512.png": "c9ee63e5c87abf78258cf0d3f23c9a42",
"icons/Icon-maskable-192.png": "d7dc35db087de7a58992d7876554938a",
"icons/Icon-maskable-512.png": "c9ee63e5c87abf78258cf0d3f23c9a42",
"index.html": "5ac5d143c4554d2036fbd49bc0c5760c",
"/": "5ac5d143c4554d2036fbd49bc0c5760c",
"main.dart.js": "08e3ee3e4b392a421fe5ea503813792a",
"manifest.json": "b62d35fb2db70d1f0a5805ce3eef8fee",
"version.json": "a566c9b4d86abe99f8909d1409ea6cd1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
