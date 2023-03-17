'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "80b2da852c5673415b5f1c1fa121a48e",
".git/config": "1047c5bc6bcfe0d06b8b1e411cf70b23",
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
".git/index": "dfc08355133589852cd02f1d442854dc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f64968a72fd3844e56464d887752f3be",
".git/logs/refs/heads/main": "f64968a72fd3844e56464d887752f3be",
".git/logs/refs/remotes/origin/HEAD": "fe7f618da1228889fbd8f3862ebd8a4c",
".git/logs/refs/remotes/origin/main": "01bc16f2d10f1639fdaf42fab76d8669",
".git/objects/01/f3fc540be512d83f022454d5293771ebd92382": "44a801598aface5522f81e61f260540b",
".git/objects/06/705169705c0f725c59a215b86fce4d75b5aea4": "27ff7afa2e00bbf6a60193e0cee0b23a",
".git/objects/09/9f76b193b76ad3fd9bb6e6afdcec3038d9d6c3": "c762c8ae69c306de372ddd756b8a2591",
".git/objects/0d/cbd81f62218c2331ad9664863f9855b6e28f5f": "310d23b224fa391ec41335233875a74d",
".git/objects/0e/a37552aa695676fea67806a4f03f615ed2e7e5": "f1cffe2c2b8d9391eb8ea707756690db",
".git/objects/0f/017ecd3398ba93f32fce2bd6df2cd16cad5dda": "c3479e6c1d57384d531ab747f3ba1a63",
".git/objects/0f/bf08ad404a42e00fd0efbabfbb838d928036b6": "ddefa288e2b2e63168c244a71d61ba63",
".git/objects/13/86b09066d6a413c4d8d26492ab6c8ba959d860": "8d5c1f7fb686e8e50a06d0735f12db4a",
".git/objects/13/f4ca1f492aa83409efb242befc6cfc95c845a6": "ebbf40d7da7ecca4de0c9a862646b3d1",
".git/objects/1b/c423e8fe425dcae9d02cabe7686cd92f98277a": "b87dda1d5bd8811c9d1fcd7cb7006ff0",
".git/objects/1d/b058e748d909d955ab96df405d18a14e2d65bb": "1da170e3ab3fbff08c5e894185e1b235",
".git/objects/22/13401d6e4da6f80eef504b907dad49cc188e51": "41f7f1f125bd9c25c62b56d4de1fa991",
".git/objects/22/8453ea01a4703c289b472a68c81a9c7fdf7a45": "e1b017dfcdf2dd3dbfec66032fbd7a26",
".git/objects/23/6ef0182d17671e8b6e0485f32d17ef87444c39": "a23a9a7a1b65711e15815f9deea2c2c7",
".git/objects/29/a5332117898fe03a0d482a4cdcb97199ad0af3": "bce0a28464ba58e5f70b3eaf96861fef",
".git/objects/2b/791d7596a316405cedf111d9a56d09252776ed": "a03058b42426fbbfd7d73df62091dd30",
".git/objects/2d/6d74dbde930e371f78ce8361c179ff4de9a730": "8783a54528728667aa82a5192357e018",
".git/objects/2d/703a68ba798eddc5979b0014868b3634d2b7ce": "933bacbf89939a3314f166f0e1f18f6a",
".git/objects/2e/1eb2486e3ded9e0d850e2eef324f2af0745df1": "32be12c8bd4be53a00a537d003409eec",
".git/objects/2e/8f5e6cd519547ad1661d3f310d178f5ca81598": "0b28451300089ed0aefc75e8cda9829c",
".git/objects/2f/7198f786df0260d30ff72b9f355bb27ae90828": "8db7d9a4b0d864d0334ae8bf4a778d55",
".git/objects/30/075dc550963fa2e90bbd4eca3cb57f2382ddc4": "127dd75929626cc943a9c08055f9e201",
".git/objects/30/90d18034f548157103c334773e67ad87770c0c": "2c5ff852563768e9dbc191bd4a2e8d08",
".git/objects/30/f2e06f69e4eceb4ff26ac35c35d714e6cf9513": "3f12bf3ab3efb52d6945c0cc51871c5f",
".git/objects/38/11f5a844b0fd53fdc9292a3d70c518a53d6b89": "c7f9b90bcc0f1c1d1772e6f8eb66de3a",
".git/objects/3a/f2c4ac1043b6df1968f434e2248d25fe3c5a1e": "8977f4d81ba1139c5557d669d7093b28",
".git/objects/3b/0f92ced4d403aa31179a315d67303143d391e9": "71e8bebc5c9ec5be6eb111450cb8c30a",
".git/objects/3b/fb538e7cbe9689000bc5cb08ddd47b9690500a": "cf0e953f080aeca932f8d03b0184f053",
".git/objects/3c/21b61a8b84588a947b154ffc60c24875ea48bb": "320fa88f758c57fa7642b876c4004e46",
".git/objects/3e/6228aba3a7d583fdeada912e8ec709740322e0": "0b2554cc2b5858ad487cae0e8d3b15db",
".git/objects/3f/3c6e07aa076955113265fbb018f72a31078dbd": "b369b6e9822fa90da9e9f1d02405abed",
".git/objects/45/559cfb58650d299b056169d3d982e34daf9195": "c2842a4bb8eaaefc3af6219643a3bac9",
".git/objects/47/2cc24922d0fb337a3e938c34d528fa13d506e7": "d034b9e3cc582133a07a1c8f9c8c407f",
".git/objects/4a/f1b7aa48cddfa0a3187306976ce54d8eef03c2": "8fe7deefcdd7a6fb28e150364da71f20",
".git/objects/4b/2d50081a48f785ac4f054616defbcfdf552403": "16e6f633ce4e5333e6005b5307c623f4",
".git/objects/4f/0c8ea69eee08c5de4901dd3797b8393d0f4acf": "73a913db27e9d8e17d5f693a684844df",
".git/objects/50/3b100699f46eb89d9469f22fc408b9db074107": "f63f7e168672c4b25625aad923b61cf1",
".git/objects/53/68cb995153dc481581ce3de4e005cada87bb74": "b1293576cc94ebbf2685abe86281cd8b",
".git/objects/5a/5112c53cec7f7a89afdb99f200d46cc89954d7": "c155a6807ee5d50d07bd8180bac28a3c",
".git/objects/5c/47878d9a07ce73217e1b9f35819e09577bdb69": "9afb140f986f4effe2b71a289babe6e0",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/65/dd821ba3af14c5f05e637530bc1fc3a70c253a": "12ae48793255c53edf45ebc491f52f8e",
".git/objects/66/3839add9b391dc247068a82d0db8935ce5fe27": "91068c46072a6a081170a88f3034c3d6",
".git/objects/66/7b293c736d0a236dce25ca405d18801a879298": "a056d828483162cd473d2fe2690b58ed",
".git/objects/66/a583e86f04fa34324313d860f784893503948c": "ad6a0eec026de26b614a5c0da6bcdf17",
".git/objects/68/023d5427081fbc057fd556190e84bcb6a57e56": "1e1d14d943dc4c974ecf04ec421db246",
".git/objects/69/5e30301f89997c7854c71742ad40a3215a2060": "b4acbd1d3ab67232481fcf95c16d7738",
".git/objects/6c/64f73d87986798eca75d2b46807906c2cc975e": "3273ed77bf6aeeff4b273318d25922f7",
".git/objects/6c/ce967cc97a99386f33ca990ed75514bf819e0c": "3c0f24ac7099e00b4df39377b4dfbf1c",
".git/objects/6e/9186d6b345af9c0e243dfa0006b020e65ab150": "7196fb190fd913f2fe3a10881477c17f",
".git/objects/70/79f2bca31add3fd70458bb2bee8d751dbfb710": "0bbf7b1a26c2baafaef91dd2fa2dc0a5",
".git/objects/73/c6bd7f4a625514f4537fbedbdc49744cbc211b": "4f7b4f761b82c862a545575676b6b936",
".git/objects/76/6506b5fd199f2396673f31efe9dcd444ef4344": "9f3a31e2eef45241cf133e1b1fa7f8c6",
".git/objects/7a/4f89a8776744277701778295bd610785176999": "0e45a3f52da106ff1ba2f8b1d66fe94f",
".git/objects/7e/c7ab20b79ceb62ca70edc12c6a92c7b1b0ef18": "ae729fce34f72cc51ef25f691e0accfb",
".git/objects/80/94531e7fd019105623781eeab8a07add05bc6c": "6ae122002ffb147a122a9970f4642adc",
".git/objects/83/21b67f34a791b84d7da3db7e37f525989595a5": "b253e6a80f0b30ec3d50ff167c6cb384",
".git/objects/84/712ef6f36f8743ffeaf801e2c9bb1f1b01ed02": "a195c7202ac136442b25e62725ff80b0",
".git/objects/86/97f35641917b1201ad1b144a9bc0998dc9c2a3": "85d50132331a46ed1d4cbe618f32bfef",
".git/objects/86/e114808f2c5bd79b51bcc37be1261efcd3edd8": "5cab5f9f69d9faf0a7ca3983d24a8d9d",
".git/objects/88/07ca4c07169ebd704b18b33764761a8f42dc0f": "9624cbef8fa4219422cc183ebe7d92cc",
".git/objects/88/4176b7ef8baef34a9369d98601507a6d0d316a": "6448a054abd6ec889537a309b0045155",
".git/objects/8b/e0debe8b383f68d8e851d37c2cf7e3e13f69a8": "46678f1ca7cc952796a9df10cea1ccf2",
".git/objects/8c/51aae9d987f4f7270ad0eef5452bebfff1c3bc": "b66008424b80c1f0bead563d3cdfe7fc",
".git/objects/8e/6fc6d4482cc6426c4b8bf6d20f33d52059fd09": "0d4426bd46e429726e46470a1a8d496f",
".git/objects/8f/bc8205bb3ab20390ad5f39834b96be457c2eec": "32ed29963748956ea484813a215d7873",
".git/objects/91/09853bd361899d7365d51578763471a2f137a3": "72618748600fe1f850c4e0b690e8e30a",
".git/objects/97/90a52c5e2d5aeb6619d1e580564f2d362d722b": "1ff054782ad9d7f01b80ba2e592f8f6a",
".git/objects/9a/429c7e1d7337fc49a0a86e09f11f79ace924e4": "f71c63f326f8e005a5e5519af37fe454",
".git/objects/9a/ee08cdd9320639338121e4de0a6bb57406c735": "f456579cae7626c783c32f433e44a6e5",
".git/objects/9e/5cf1ecd310e438139af7ec60c3be70a32ad936": "f6e3c349ea6fd06ef4554d966bc0af5c",
".git/objects/a0/d32be6b1b4aac4f9dcdf171766c17fe281a646": "536c01751d26ad8f9d45f0aade29d3cd",
".git/objects/a1/357e0414a09d4928ee0c88dd59883ee7e80010": "31c44a0c7695ed31b370e69d0b633f11",
".git/objects/a2/586bdc42c2b36de9ac98e1c06e2a9d6f805363": "db37bc8081492a3bd59f66d0bbaefe08",
".git/objects/a3/2855533d7e2d73d52dac5afd2d52c30a98fb0c": "64d1eafaee88f9e341ff38c85a396b24",
".git/objects/a3/d59b124c59c35520ae611c759b54e768caa89f": "1a27351159272efd47acc084dedfe8c3",
".git/objects/a6/315aa990f3e5c85807fe31cb23f30e4355e3bf": "5d3b90979d81b0be12c76e996204b414",
".git/objects/a6/c287cf58b82a6503f03fccca09fe7a5bf82f46": "02c89ec7abe8e88b7ec100835632b7b3",
".git/objects/a7/677bb5603ece24f5b72715bb23496bb2d7d8e0": "db08475ddbe80bbcbb4e428fa8c9ff11",
".git/objects/b2/4b07a70a0e4089c097129fb9fb382e64aa0348": "6e9fd0aae95f2be01859180c7fab0790",
".git/objects/b3/ce01b4a9c9694afbd1df07aa755706a2cc257c": "a360e600fa1eb26271bfc194b939384b",
".git/objects/b4/25823a90b7adc28d7242e5e90cf56d586e8e1f": "bc951b80f39bed57fe65003be32e0674",
".git/objects/b7/2f47406142dad36aa4bc891c79df24a9dc744f": "12df8b4e7c4377145fc0d36ec84fdae7",
".git/objects/bf/edb70afc275fab56454c4d5cdd23116a7d4ffe": "d6d2b19b95baee41cd6f7fcd7a5ef0ef",
".git/objects/c0/8740461c293bcf90f076a2de3f6bfc950f998a": "f0ab6922d3d4b78f95b45b2db3bd021c",
".git/objects/c7/82d66e676188a32473e1a3709672217d2102cd": "afc1145e97d93ad880a165405d4722b1",
".git/objects/c8/1ebc0dabb892aba08b2123a4b12fa375c72951": "880cd6268c378f260be6761c432a52e2",
".git/objects/ca/db3976b8dbd158ac9d338a0afc7d5d2f1cd237": "59508283c72428194d02c11b66a8febe",
".git/objects/cb/eccdf2b54b2484558724888ff124405b584166": "adc54007f411e3cd398559ca77326142",
".git/objects/ce/a5db13a5a6f73f985337206204ea5fc88edd97": "40e954ce9d05f0c756155e79d7083d5c",
".git/objects/d2/30e97d500333d5f625c67a893b641b42cb880e": "59fdba7fef2cc3a344f6f2ceb9c3e056",
".git/objects/d2/97c630d86bc277dafbb79656be198f0501eb8e": "6b997a649cff054318f945e1be13d9d4",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d7/3f6fc67e6746a19f26423800c9e0d4b3f05c7d": "4c754a03a6884b3a5f252b84e4e2383a",
".git/objects/d9/7387b07c55a74c294a4f9cbfc2a85530376c4c": "6875e4adf89e596730988828c420629a",
".git/objects/dd/ebc6cea6ba8b85bf7235ce102dbbfc5ab3afda": "14afce27e873f6c446f6be8c666eda9d",
".git/objects/de/e3d309f91400c959cb3cfd08db86ecd63ba0b4": "28ce067f6931b3c7353c0b147f7edf71",
".git/objects/e1/dd6570f32700b258ee4cc078b23f7aac9fda24": "ad6ca74b4d794b59358359f228c1dcea",
".git/objects/e2/1f857eb2abd4489ab91a1741c2ac3f1015c28b": "0b4425daf8624bc69240ff1b3355be12",
".git/objects/e3/f32fceaa75d61dde7f6fd68bc79a46f9eb65e3": "61c8085ebb397cf5f84ac22bef6cbf6b",
".git/objects/e4/25362791bb6cc081a63478570a6cce92291ca9": "5ee09449fea6a7ab6bcbbf455dd1249d",
".git/objects/e7/186688aafbc8e60ad59567d807a39487b01192": "d478c1263bf870793262785846338d7e",
".git/objects/e8/078c638b4234a9162663f3f75f53d00318c06f": "3f9cf918878a473bd976d7d59ce41f0d",
".git/objects/e8/5c5711462441dae7eb0dd19b250bd2eba30b06": "b2ecd50236b3653c823a41e7ef79bf5f",
".git/objects/e9/f17d3d5976cd5c11db4c15b3f637b43dde3f4d": "02f69bff43041e8ad71bddb7d478d747",
".git/objects/ec/cadb3e0f3a78632f77affffcd3f7af29c9c4bf": "d8406b4827244589be07d90761ef453c",
".git/objects/ed/866cc6dc27b5781fc0c5d136480990ffb9d7ca": "2f83e304fd67faff8798e23c11e6bee5",
".git/objects/ee/cc2b9bc1053b8eb76d31d1517776a11bebc06e": "48de619690fc8602fe4211e3c6717276",
".git/objects/f3/8a189e17193f5810ad4b1c17ed352242944661": "903e92866e19afcace0122f823904662",
".git/objects/f4/a9038f77d6ed5c33a7b56517470714a3f4c340": "5297593bda58a8834ad2259fb95590df",
".git/objects/f9/c0f1f1c50e423011c621ce6173f92af00a9067": "f6852e169cd8cbc12acc5925a2f29b1d",
".git/objects/fa/3d74bf9e6b157f6bbf52cb63714385732ba2da": "ba24d1ee9d252d4504a78ea2313ce043",
".git/objects/fa/4658d48b9a49922fa162eb9c9af3b7c1c7dcba": "22cbb48b3bfa95604d45bc31b2e9aecb",
".git/objects/fe/dc55bc00fd21e50ea4c128c11a2f1e177e85e4": "fa49d5e2b59fdc6ca10ee4743d342fba",
".git/objects/pack/pack-e739cdf54a03b50e2f67059ed539bb628f3f4f55.idx": "91a9b6a7b3678afb148ebd7e5893062a",
".git/objects/pack/pack-e739cdf54a03b50e2f67059ed539bb628f3f4f55.pack": "6d66b70002c6be8eefe4236035ed3720",
".git/ORIG_HEAD": "0cc78263c125479f7483cea408234bc1",
".git/packed-refs": "0bab4b256fbda0331aa482501e0f53b8",
".git/refs/heads/main": "0cc78263c125479f7483cea408234bc1",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "0cc78263c125479f7483cea408234bc1",
".git/refs/tags/android_v0.1.1": "301bf16fb833d0bad2a76097a57fcc49",
"assets/AssetManifest.bin": "a3d922a0b0bb96200631d1d9f758ce7d",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3e3f45e30914be0012e4daf5607ee5bb",
"assets/NOTICES": "368c74f0d7657193778be3fd37fb5ef7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "57f2f020e63be0dd85efafc7b7b25d80",
"canvaskit/canvaskit.js": "3e7c7e90ff8e206f4023c12e31b0d058",
"canvaskit/canvaskit.wasm": "924effb8e5e442b017e8357694143d6a",
"canvaskit/chromium/canvaskit.js": "f39c7fbb70c7d277f537a7c366d75533",
"canvaskit/chromium/canvaskit.wasm": "11e66328a178c0b33b5806328470360d",
"canvaskit/skwasm.js": "569eed0f1ca775eb9a112f5821ad278b",
"canvaskit/skwasm.wasm": "6484604a7be7b899af27bdd2341a9168",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "fe5808068e7bd00e0371941ab243cc9a",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "d7dc35db087de7a58992d7876554938a",
"icons/Icon-512.png": "c9ee63e5c87abf78258cf0d3f23c9a42",
"icons/Icon-maskable-192.png": "d7dc35db087de7a58992d7876554938a",
"icons/Icon-maskable-512.png": "c9ee63e5c87abf78258cf0d3f23c9a42",
"index.html": "e18e1981e27ec13312045f17e77a5893",
"/": "e18e1981e27ec13312045f17e77a5893",
"main.dart.js": "fe0d598835cf04af8dadfa3e2781c02c",
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
