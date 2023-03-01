'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a6f56762720269040d837e9224d10a37",
".git/config": "1047c5bc6bcfe0d06b8b1e411cf70b23",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "594b8e5c8ce031b147c0beae4bedf7b2",
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
".git/index": "b1ea52c03738df8cf8e66474c3576cb7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dc3f6517fff60768465279656479e3ab",
".git/logs/refs/heads/main": "dc3f6517fff60768465279656479e3ab",
".git/logs/refs/remotes/origin/HEAD": "fe7f618da1228889fbd8f3862ebd8a4c",
".git/logs/refs/remotes/origin/main": "525320926fcd058ef95b1f4e7ae48725",
".git/objects/0e/a37552aa695676fea67806a4f03f615ed2e7e5": "f1cffe2c2b8d9391eb8ea707756690db",
".git/objects/0f/017ecd3398ba93f32fce2bd6df2cd16cad5dda": "c3479e6c1d57384d531ab747f3ba1a63",
".git/objects/0f/bf08ad404a42e00fd0efbabfbb838d928036b6": "ddefa288e2b2e63168c244a71d61ba63",
".git/objects/13/86b09066d6a413c4d8d26492ab6c8ba959d860": "8d5c1f7fb686e8e50a06d0735f12db4a",
".git/objects/13/f4ca1f492aa83409efb242befc6cfc95c845a6": "ebbf40d7da7ecca4de0c9a862646b3d1",
".git/objects/22/8453ea01a4703c289b472a68c81a9c7fdf7a45": "e1b017dfcdf2dd3dbfec66032fbd7a26",
".git/objects/23/6ef0182d17671e8b6e0485f32d17ef87444c39": "a23a9a7a1b65711e15815f9deea2c2c7",
".git/objects/29/a5332117898fe03a0d482a4cdcb97199ad0af3": "bce0a28464ba58e5f70b3eaf96861fef",
".git/objects/2b/791d7596a316405cedf111d9a56d09252776ed": "a03058b42426fbbfd7d73df62091dd30",
".git/objects/2d/6d74dbde930e371f78ce8361c179ff4de9a730": "8783a54528728667aa82a5192357e018",
".git/objects/2d/703a68ba798eddc5979b0014868b3634d2b7ce": "933bacbf89939a3314f166f0e1f18f6a",
".git/objects/2e/1eb2486e3ded9e0d850e2eef324f2af0745df1": "32be12c8bd4be53a00a537d003409eec",
".git/objects/2e/8f5e6cd519547ad1661d3f310d178f5ca81598": "0b28451300089ed0aefc75e8cda9829c",
".git/objects/30/90d18034f548157103c334773e67ad87770c0c": "2c5ff852563768e9dbc191bd4a2e8d08",
".git/objects/3b/0f92ced4d403aa31179a315d67303143d391e9": "71e8bebc5c9ec5be6eb111450cb8c30a",
".git/objects/3f/3c6e07aa076955113265fbb018f72a31078dbd": "b369b6e9822fa90da9e9f1d02405abed",
".git/objects/45/559cfb58650d299b056169d3d982e34daf9195": "c2842a4bb8eaaefc3af6219643a3bac9",
".git/objects/65/dd821ba3af14c5f05e637530bc1fc3a70c253a": "12ae48793255c53edf45ebc491f52f8e",
".git/objects/66/a583e86f04fa34324313d860f784893503948c": "ad6a0eec026de26b614a5c0da6bcdf17",
".git/objects/68/023d5427081fbc057fd556190e84bcb6a57e56": "1e1d14d943dc4c974ecf04ec421db246",
".git/objects/6c/64f73d87986798eca75d2b46807906c2cc975e": "3273ed77bf6aeeff4b273318d25922f7",
".git/objects/70/79f2bca31add3fd70458bb2bee8d751dbfb710": "0bbf7b1a26c2baafaef91dd2fa2dc0a5",
".git/objects/76/6506b5fd199f2396673f31efe9dcd444ef4344": "9f3a31e2eef45241cf133e1b1fa7f8c6",
".git/objects/83/21b67f34a791b84d7da3db7e37f525989595a5": "b253e6a80f0b30ec3d50ff167c6cb384",
".git/objects/86/97f35641917b1201ad1b144a9bc0998dc9c2a3": "85d50132331a46ed1d4cbe618f32bfef",
".git/objects/86/e114808f2c5bd79b51bcc37be1261efcd3edd8": "5cab5f9f69d9faf0a7ca3983d24a8d9d",
".git/objects/88/07ca4c07169ebd704b18b33764761a8f42dc0f": "9624cbef8fa4219422cc183ebe7d92cc",
".git/objects/8c/51aae9d987f4f7270ad0eef5452bebfff1c3bc": "b66008424b80c1f0bead563d3cdfe7fc",
".git/objects/91/09853bd361899d7365d51578763471a2f137a3": "72618748600fe1f850c4e0b690e8e30a",
".git/objects/97/90a52c5e2d5aeb6619d1e580564f2d362d722b": "1ff054782ad9d7f01b80ba2e592f8f6a",
".git/objects/9a/429c7e1d7337fc49a0a86e09f11f79ace924e4": "f71c63f326f8e005a5e5519af37fe454",
".git/objects/9a/ee08cdd9320639338121e4de0a6bb57406c735": "f456579cae7626c783c32f433e44a6e5",
".git/objects/a0/d32be6b1b4aac4f9dcdf171766c17fe281a646": "536c01751d26ad8f9d45f0aade29d3cd",
".git/objects/a2/586bdc42c2b36de9ac98e1c06e2a9d6f805363": "db37bc8081492a3bd59f66d0bbaefe08",
".git/objects/a3/d59b124c59c35520ae611c759b54e768caa89f": "1a27351159272efd47acc084dedfe8c3",
".git/objects/a6/315aa990f3e5c85807fe31cb23f30e4355e3bf": "5d3b90979d81b0be12c76e996204b414",
".git/objects/a6/c287cf58b82a6503f03fccca09fe7a5bf82f46": "02c89ec7abe8e88b7ec100835632b7b3",
".git/objects/a7/677bb5603ece24f5b72715bb23496bb2d7d8e0": "db08475ddbe80bbcbb4e428fa8c9ff11",
".git/objects/b2/4b07a70a0e4089c097129fb9fb382e64aa0348": "6e9fd0aae95f2be01859180c7fab0790",
".git/objects/c0/8740461c293bcf90f076a2de3f6bfc950f998a": "f0ab6922d3d4b78f95b45b2db3bd021c",
".git/objects/c7/82d66e676188a32473e1a3709672217d2102cd": "afc1145e97d93ad880a165405d4722b1",
".git/objects/ca/db3976b8dbd158ac9d338a0afc7d5d2f1cd237": "59508283c72428194d02c11b66a8febe",
".git/objects/cb/eccdf2b54b2484558724888ff124405b584166": "adc54007f411e3cd398559ca77326142",
".git/objects/ce/a5db13a5a6f73f985337206204ea5fc88edd97": "40e954ce9d05f0c756155e79d7083d5c",
".git/objects/d2/97c630d86bc277dafbb79656be198f0501eb8e": "6b997a649cff054318f945e1be13d9d4",
".git/objects/d7/3f6fc67e6746a19f26423800c9e0d4b3f05c7d": "4c754a03a6884b3a5f252b84e4e2383a",
".git/objects/e2/1f857eb2abd4489ab91a1741c2ac3f1015c28b": "0b4425daf8624bc69240ff1b3355be12",
".git/objects/e4/25362791bb6cc081a63478570a6cce92291ca9": "5ee09449fea6a7ab6bcbbf455dd1249d",
".git/objects/e9/f17d3d5976cd5c11db4c15b3f637b43dde3f4d": "02f69bff43041e8ad71bddb7d478d747",
".git/objects/ed/866cc6dc27b5781fc0c5d136480990ffb9d7ca": "2f83e304fd67faff8798e23c11e6bee5",
".git/objects/f3/8a189e17193f5810ad4b1c17ed352242944661": "903e92866e19afcace0122f823904662",
".git/objects/f9/c0f1f1c50e423011c621ce6173f92af00a9067": "f6852e169cd8cbc12acc5925a2f29b1d",
".git/objects/fa/3d74bf9e6b157f6bbf52cb63714385732ba2da": "ba24d1ee9d252d4504a78ea2313ce043",
".git/objects/pack/pack-e739cdf54a03b50e2f67059ed539bb628f3f4f55.idx": "91a9b6a7b3678afb148ebd7e5893062a",
".git/objects/pack/pack-e739cdf54a03b50e2f67059ed539bb628f3f4f55.pack": "6d66b70002c6be8eefe4236035ed3720",
".git/ORIG_HEAD": "5bdf071baa42c2477b03877f46d3ea38",
".git/packed-refs": "0bab4b256fbda0331aa482501e0f53b8",
".git/refs/heads/main": "5bdf071baa42c2477b03877f46d3ea38",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "5bdf071baa42c2477b03877f46d3ea38",
".git/refs/tags/android_v0.1.1": "301bf16fb833d0bad2a76097a57fcc49",
"assets/AssetManifest.bin": "a3d922a0b0bb96200631d1d9f758ce7d",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3e3f45e30914be0012e4daf5607ee5bb",
"assets/NOTICES": "24642dacef01f06795b5ae907ee95fc6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "57f2f020e63be0dd85efafc7b7b25d80",
"canvaskit/canvaskit.js": "d8ad2fa33cb436ca011f6077f636fe31",
"canvaskit/canvaskit.wasm": "23f26e30be51c7ab3ec5590e0205c8d6",
"favicon.png": "fe5808068e7bd00e0371941ab243cc9a",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "d7dc35db087de7a58992d7876554938a",
"icons/Icon-512.png": "c9ee63e5c87abf78258cf0d3f23c9a42",
"icons/Icon-maskable-192.png": "d7dc35db087de7a58992d7876554938a",
"icons/Icon-maskable-512.png": "c9ee63e5c87abf78258cf0d3f23c9a42",
"index.html": "c3e49502a2f04b0ed02a32c22acacc33",
"/": "c3e49502a2f04b0ed02a32c22acacc33",
"main.dart.js": "77559b83a8afe73ecc5f87de28add444",
"manifest.json": "b62d35fb2db70d1f0a5805ce3eef8fee",
"version.json": "a566c9b4d86abe99f8909d1409ea6cd1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
