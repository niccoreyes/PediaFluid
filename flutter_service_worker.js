'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2ac876e65a6c510f159bd160237bbddf",
".git/config": "e7d58cffd5b476299e60ca21ee7fcf8f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
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
".git/index": "7f1085f219abb687baace09332c88063",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "56dc8b057de66db3dca3c9c7a6478b46",
".git/logs/refs/heads/main": "6e1efc2e16e743874c2ae72d83489ee8",
".git/logs/refs/remotes/origin/main": "792336ba903b9d2e75dfd8f48147d16d",
".git/logs/refs/remotes/origin/master": "e6b501bc0bea2c98f9ed738d2cd658d8",
".git/objects/00/270bb0a73a4b2249098a5ae25e35ab4c940451": "250a86ee6bf503cc85251e59f8a4c8bd",
".git/objects/03/ba74d0756afed8edf48a3bac497d66613a6e27": "10ad229a7f88e785918a3aef0374ad51",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/b833e39b8d3bba9449e7f18da03178c8f19ff9": "7f70d5e1adbba01a54968a5fff3b107e",
".git/objects/0a/40894faae4b4088fe4a9404d21b1fbbd358fbc": "c632ec8d3ea919f57c0712144a0ac83a",
".git/objects/0a/c02f37c9fe676a1e91bb70e81ca47808f1851f": "000b7b6b0a6ba4cb44e8663a20e9f710",
".git/objects/0b/098f09caec924c55f5a716e90706f4d5ce3d45": "5961b125427b1f0dcef5b8d7c1544b3c",
".git/objects/0c/eb284341d945cb207906a260c6d36aa82175bd": "fc1dc4a961db2f22e518c0db74ec6380",
".git/objects/0f/0d3d0694c540ceaee531355d28d54397d49044": "c3d3af9d640a16620fe0d32a10a3198b",
".git/objects/10/8af3489c866fc2c1ce08eb76ea3647fa09d992": "f8f117cbaa707cad2f9e9afd6ece5b42",
".git/objects/11/a8a1bc04a5bf6115d7c306ac7ba052dc9e93fb": "b83feaeac5ad16a0ede58e42fb5f6555",
".git/objects/12/90d8cd75ac2d918eab6ed242d1f767329438b5": "4f0b037d6af7dc64418effce233239cd",
".git/objects/14/bab7bd8b65a2edb3291a9b096178d23bcebeeb": "8c4f59c087c4d9a6ec2a87b3d8035524",
".git/objects/17/f1c7301e3d8a442d1e9f6234ae4da6c8f73262": "00bed088bf2638c8d0832a2485cd3234",
".git/objects/19/976aac62996bb691d9bd335fcd694d929334bf": "33ca44c52ddebbeed20d68b6a3945db2",
".git/objects/19/e6eb4c5fc60933e4a27c7e3dbf26176a9e5ad1": "26b479327587257931354330bf6481ac",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/1914da04bfb1594c2193791cb291265edd8834": "07568183612761954d4f1f127e363270",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/23/9ff00f5802c30be53f3f892c6c58976c63ce0a": "4d9c7c616d40f85de358d3db419e8630",
".git/objects/23/b012b2cd7ce85e35f418ae84db9804a1e1f240": "7d29397651e302db89a8994821df2352",
".git/objects/23/dd764c9a02e584b8b63a8db4411e8ecf2edf8c": "b16640c0fa1e1d4ed761dfd6c97f1c9b",
".git/objects/25/82e536d8275aed9f73b0839dea6e5ce11c10da": "5f1bc827b40e36bb8b079475f2029296",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/28/a6eefeb72fc98b8e6a66d8d0d766f95a096832": "25ed64155508abf49d7276fc08e07f91",
".git/objects/2c/c2fde4bd9c63cae7360d6a4679c2f6727e2467": "e9cae591fb03165d3cec094cc8f55fc0",
".git/objects/2e/3a3664db40f1bbc657df075f18b486feb74c4b": "8e569b42dac8d8eaf7ba3e0a00d62ca8",
".git/objects/2f/826d7b44a16e3697521dce3d9202311ed3715c": "79745d1ffdacb2445c164fa3e584b2e4",
".git/objects/30/86302a3f4651f5f96018dd603f11bed4d9e7ab": "fa398b93f4aec4be17f1288d57fff3a7",
".git/objects/32/be8f4aee7a810d986f591dfaea40b5e1917b95": "50c5523c42dc4e98d2b0164bb716baa2",
".git/objects/33/4391632bc83d0a898e6fd86b07d1a9d703f908": "4210a2def9481272ae8a6722f7e0c094",
".git/objects/36/a5f4b953642bc505d9be2271f427b9c682ad4a": "213598903d275839979cd96d013a1f81",
".git/objects/37/4ad14d93d945c4a36e49d86c0f6a32476354d9": "ef271a04d466facb694eab33b5de849e",
".git/objects/38/2f992d3c25eddc2fe6ecd17b67cc4d9ef36c65": "13f4b803d8b26260aa39bbf1d59c3bb0",
".git/objects/3a/08d04ae5a6c9dae357933d440959a340591f74": "6bc13525685ab39e25dc883a9867137b",
".git/objects/3f/9d83625ce502f164cf628147e78e7d1bba3179": "fcbc38c586d04a09b9c90d71649769b3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/7b29a768626379bd55d6c30084252c6b6ff087": "8f1759e4fb61b922b4f416e53d11829a",
".git/objects/4a/4c848416737ca30be58e6db336843f3c5fef67": "e2a88c08172a97b4508f9d1317887b91",
".git/objects/4a/6730ff3ab2892630fda20181675602eb775845": "a27934357cf98780f1476a19b91f9229",
".git/objects/4b/f2bb8d575f7e60716a14abc5523927841142c0": "791544fd8e19c0141a6302297353808c",
".git/objects/52/cfb77a424101413b81e246b965151f443a0e85": "453827b9337fef0116c048dee437d21d",
".git/objects/54/386dbbbb3bab1479a6253a8f9dfd47f39c75e4": "9c58e4735c91435c3e65bcda1510b36f",
".git/objects/56/055caa9a8a28b0074ca805e4ba41fb89b01c49": "1d6419a668846fbf09e0fbc6cf4f6967",
".git/objects/59/da10eece2d7473d70202b60d7590a948f61f50": "7f68689ceebefd9a60f74e921abe471f",
".git/objects/5c/8f1dfad0c34977df54d420d0c416d3c7ce7ea6": "64f4d40f5d0144b476c1ddfeeeadd8ac",
".git/objects/5d/f451a3a4f702dc0efa06b133aa694f6ffb6f54": "272bf01f578139be4bba914ce405b491",
".git/objects/62/2b08db11c0df5ef43f354c30b6dee3a1d7de67": "f5edbca318951f86012c7492c2993b4f",
".git/objects/62/edbe3dc927181f01be5fe73689a77afdf93cad": "af574c9032cdc75b482aa64364632331",
".git/objects/63/3f48f5d349a1bb9add7bbb023dc380b767b864": "ebf4dbd4ed9ff03f95d7f9974f6a22d7",
".git/objects/65/08aac60cad782e8a0fb7445194db9dbdd61e4d": "18cc28cb1043849d94d708995531a373",
".git/objects/66/5a9ef74e7444abc2511de0c7e1c2b121290332": "d73bb8a11ad90a72864b3f2bdce7b8f0",
".git/objects/68/d267d7206268c44ed0ba22adc843e627e6617c": "d0545eb0013fe525af061156c4d8be95",
".git/objects/6b/a7a835814dd67fee3c15c09178c6b03f5e6b51": "f4691d415052672aacfd77219e308ba3",
".git/objects/6c/e8c33e589c9a1e10b6db12c099447a70dcc5d6": "e565fff1e76503941fb1b4cb348bde63",
".git/objects/6e/ba28b5887c817b6b959ad1baf3be66a9a5b8eb": "082f1cd392c9428200b0eb97b8cc8c3e",
".git/objects/77/731a4eb2f4041fcde75edc55c0b61cba5b850a": "be76a8ef0388cfe7c88ba2d91c2df290",
".git/objects/79/3cf98b7f31e203e2e8e06e803015e4cfa4bcb6": "1ecc597508cfaaffcf4d12761e16eb8e",
".git/objects/7a/2ca4d9fba65f40ff48f892f6179e564b99d04d": "2bea2625a4a4e3b558d49ff31ac4ddde",
".git/objects/86/ab05c7ce9c82cc0736201fdaae3f7622cad52c": "e8c1c6024d001ae21d73e858f599007f",
".git/objects/86/bb8a8ca35e8038135c844c4957eb4f5415461c": "4066e6eae81c0d563887a13b78f298de",
".git/objects/89/c34ffbda1ceba8347b1d2eb36a14cb1e839362": "73ea2f3ca8b8fc549544be06c59387ca",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/93/c5bfdb60818c0e48e456b9994522a2cdcf9a8f": "43f728c861f56caaee658eedf615db02",
".git/objects/96/5f1d0c30915a9f7d7c0b5e155ee79cf7b2dc77": "0bcf7ea1eaa29b5dcd6394864bb049fa",
".git/objects/9a/f57f64b5453b8925f671bc63c7f9aaa4dcc2fc": "a7893328fa6bb1418296086e059a615e",
".git/objects/9c/2cdee0326767c989e251b35995620978a94d5c": "3e73f757636e55b26c68859cbd3e0cca",
".git/objects/9f/cc183339b42185ac2876c31e24e4320280f217": "c6ece022c34e20555a1381c093394f07",
".git/objects/a0/90312b8f7655990f31526b8861bebce01bb4e9": "862bd7609157bf97cd05b7bd0f6775f0",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ac/6243f4adc8a5a90b1f50128071243e1e566d20": "514f073c1d842b9b7357a8a1d41e10e2",
".git/objects/ad/286fc5ff0a4fe1359ba4e481b8a9cc92e89e9e": "9d1a4cdcfdfb5872385b8fde9a70d0a8",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ae/696e4379abccf7ff7dda70828185ca3f70bceb": "4d54f1a592621327a1d43cd7fa7691e4",
".git/objects/b0/38443fbf25b4fd90384a610a149b2048be5bb1": "2221f8cdd61d244ecb6c44121c3805aa",
".git/objects/b3/00fda6c436de92f70955e779585b2001defb25": "3ddbea66b7fff57aa9af4b2799a223da",
".git/objects/b3/497130adb606383498e64b92a2d360144da02e": "2bbd2354e028a6afd8caa964ecab4f14",
".git/objects/b4/a199367f965b6ea935aeb81a5ac7f6c75cef7b": "407750cedf730aff7f17bf62aa398541",
".git/objects/b6/847af84668f859e670bc343cb1767c5f9fb9a1": "2b1c613b00e1262af4bd1c864593130b",
".git/objects/b7/81ca69b5f61e5e9f5f23a1e6037c7383ea3c49": "5f92719d4dbe3fdb1dcd18319ae1e7e4",
".git/objects/ba/37b2241a6944883244f0ab6676de8412d7692b": "de174a7d72eeef90509a1e79b9f84f72",
".git/objects/bd/f438bbd329d17c9a6a693a4444603f7ab55974": "75d18078154310949fd966e63a376e82",
".git/objects/c2/9e21691b870f79eec3a32899f7c7d1efb00ac4": "d39af28d4ef42432cd15ab19ead1a6d9",
".git/objects/c3/4a84b94bb1438dd9daeea1327ac2bb379a6a16": "b59c5647039eff82265fc5486553cd7d",
".git/objects/c3/b6af42dc8b7371ac9a8454035d81a4a8d933e4": "35d6dab6987137af3c1c857f3b06ff96",
".git/objects/d0/39f10e454fd85333174162d1be7b88c213ee31": "d5a3fd8c1aae23113dc8da4a1f48ea8e",
".git/objects/d5/e6f99db19070222334f27dc64521b529c4f59f": "a57d83fc1dbc7be516ae067d8ff8f607",
".git/objects/d9/01c2e8172b5bfa72190bb0c5500495b3ead0f0": "506a8502688b8b75a91ed36d0cf93bde",
".git/objects/d9/6f3bc915a781b47090c15379bfe7fb711a7809": "e1703d41b898e2446288156367695fbf",
".git/objects/de/47e38ce33dc262ca4f430f56fa62b1eb6839bc": "2a92fa9b8e369e4738d2ccb405dc37b1",
".git/objects/e1/6ccb45089f381aedd61c8bbb92a2e4ef905b66": "257b0add3ec836b6d1f1c12cb8c120c3",
".git/objects/e4/42e34868eac38df017114868eff0822db24b69": "883ea081b32e374ee9b11f08f9a29785",
".git/objects/e5/2e623a8a4b0b542351e89d5116ce3d35a0edd8": "442ab7b46add87b6de8a2fc9c7d23a78",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e8/0639d238a7ded047c82173ce95fe39d206f5ce": "e2ed7474e1cb7a87af20b1a2ec1b0507",
".git/objects/e8/21cc057e0d8bd0e8f687189b11ec95d7eefbdb": "684988d8090a9c7c459e1fe3095a8cea",
".git/objects/f0/fd6ddd90dc0ed82f0d48c1fd7a66ee497635e3": "392ebd2f169fa0e94da881408569fd03",
".git/objects/f2/153907fb3c70b04d0be00b56fdfe6e79831e43": "7423ac078437984cb1bc517044b425ba",
".git/objects/f3/f6d3d6cd90f912dbb2d616e7b56a709f57b89f": "fef4d2c8c1b0a3443ecf0e0791dc2c97",
".git/objects/fa/01b7015e7b2b80a2316816365b0d58400afe8f": "115c84a9bfcc2cd02e9f651c9f5712bb",
".git/objects/fa/e02d1e733efe6ed7cba14eb08dbca0c0f54c45": "054c528e773373a33fdcd13c05df8c19",
".git/objects/fb/04287624ab04966143487f466cd11659a5f388": "a4ca3a697858f896d0e6b2932b89ae5b",
".git/objects/fd/576859a3152f1d2a6ff2047ad617df2a021b46": "7e8cc385650aee8f71477bb5b9a55188",
".git/objects/fe/f25cc8dd89caccb420f0a069f9d2bdd916c22a": "5a88df4254ef8e4216320954a71f9fbf",
".git/objects/ff/fb83048b696be37eb5316ba44f1fec5a6347c5": "2b41a737498f11f0806ac87468d5e37d",
".git/ORIG_HEAD": "de8e935f9c583f3c74b6ebf41cccb20e",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "de8e935f9c583f3c74b6ebf41cccb20e",
".git/refs/remotes/origin/main": "de8e935f9c583f3c74b6ebf41cccb20e",
".git/refs/remotes/origin/master": "c457f09e0897cec97b126b96860d1e63",
".git/refs/tags/android_v0.1": "c457f09e0897cec97b126b96860d1e63",
"assets/AssetManifest.bin": "a3d922a0b0bb96200631d1d9f758ce7d",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "5ed062a59bb378e005c1a598256797e8",
"assets/NOTICES": "b4973ecfccee1a30de30f4204db9923b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "57f2f020e63be0dd85efafc7b7b25d80",
"canvaskit/canvaskit.js": "1338eccfe817956d34753284f2b1cdf6",
"canvaskit/canvaskit.wasm": "236ae09e794721c0304bc4a6c190309f",
"favicon.png": "fe5808068e7bd00e0371941ab243cc9a",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "d7dc35db087de7a58992d7876554938a",
"icons/Icon-512.png": "c9ee63e5c87abf78258cf0d3f23c9a42",
"icons/Icon-maskable-192.png": "d7dc35db087de7a58992d7876554938a",
"icons/Icon-maskable-512.png": "c9ee63e5c87abf78258cf0d3f23c9a42",
"index.html": "6af5f72cad032dff39eb5603f81bc622",
"/": "6af5f72cad032dff39eb5603f81bc622",
"main.dart.js": "f79aa6a791613f823fb4e8683e5f1a94",
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
