'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "83d043db4fdfe6882fb7f01a09d92b11",
".git/config": "6f900023500b5e2c793b8d21dc02c806",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b5531ca2499fc812b132d019a64fc294",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "dde1da0a718e7f6fb91ed2802578e051",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "15d0a877ab828374713ce7889ed02aef",
".git/logs/refs/heads/main": "6403c94aa331b238d1721ef2e13cad27",
".git/logs/refs/remotes/origin/main": "412b654e4f923db156626c5220138f4d",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/13/021285bad13880ce03d572ecc4b854b747ebb9": "26c2949666c8b3e515c34ae86e786915",
".git/objects/16/9378516372610f78bec53f5da8d038b923acf6": "1d7694d273c24968d2b69302d047b434",
".git/objects/17/60d8a18bf9b84f62f3f56927e28c846db96fde": "54780a999308f37605d83307ac9221af",
".git/objects/1d/3a7f30c5eb4114b39b533d8f0763344bfdf1e1": "c3db3fe7cefd09f5c41470e98e55584b",
".git/objects/1f/ff0f8fcc61cf3d013c22e758618f78407c46e7": "830ffd67d66d660edc35a975384597fd",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/5715586b43cab84e178794fc4191c837147ef8": "06244af68467253b907bc8e74395bc21",
".git/objects/2b/45495e70f4a190cec90eafe9dae6ef32f7ad7b": "df4159bf100698fee7dc733ca8347083",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/e3f7048029b79c399cec1bf1e9d7a8c6443334": "0ea8f79160bd0fe9cdad98145597651d",
".git/objects/30/cb88a1ce542c7a6fab289b935ca6550eadf58b": "c24dbc38dbed59e423e13e82ccfc2a1b",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/021f65542caf6402311ffbd59ceaed6f15b542": "58543aee38b28c6a51b0692b3c32b236",
".git/objects/3a/6c4c5ad3d3ad40b40eae1d08145584121345ba": "83a344e4f09bd5219c81df4a6a070b07",
".git/objects/3f/4092ce43fffb39626dde08ec6e1d134b2341de": "0fc90e7293b745836a858a0194d32e7a",
".git/objects/41/34dc1a5d37d615e337e407241b65826e8b8aee": "5be2f44733b8bf2b33675a1c9f2470f1",
".git/objects/45/4cb68ad08f497c0ef1fe71f9c5123bf6b01e11": "38f02d29c48ec12d190aeb09f46d0799",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/85a68614b8d3a700fd05962fe678b7628d201c": "68fc561de18269a59f8b88b8b0a0c491",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/c544165ff842439c6f4338b67951b0fcccc267": "c1619de9c471505a3adeda7246d90a17",
".git/objects/4b/fefe2cba8224dbdb5132025626c26bc2bab104": "4313cb0456dffde5fa15b7a0141806c1",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/56/ee95a99fe4175b1b1e526d29142b56bcfa83d4": "396dc8a356cf92cc873082638267c92e",
".git/objects/57/cf4648d9089ccb03a4277c8a6ab33d3efd7bd9": "336c1f7806d9ab4820f74e36af71a241",
".git/objects/69/04a7ea5f1626d0ecb08eb21f2361abee365d50": "81ee069e861debbdc83df10248807627",
".git/objects/73/1bca378981d358c1e5faec6387436c65c303b7": "d705a346f1312aec23904116140cfb4a",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/08c5836e08b7b695a90e944b41c2c47df017c2": "19f03dd10b434fb202413447d029a8eb",
".git/objects/83/2355d338c95ed79d714da9722d2f9b2fa4e50d": "196fac4ac9633810b35c0854d29b293e",
".git/objects/85/43aeeb592f41f3563b0cb781a8a25acef770cd": "3f16716ae5efcdd63f6208911847e8b2",
".git/objects/99/0ba24309838f78c5f30de7c049dbc76aee57f6": "4e03c655397534f4b4bdedf68aa22256",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/70573638ec3de474a964e06f05569ecb92a27b": "62e71b7507c9dff01f151d4c41d45387",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/82b5ef882c843798b4366b1f8c7dcc8b6a9de3": "1c070131576cdff2f5fee6c105454e56",
".git/objects/c1/1fa380bd36396d7e01d47f013985bf09f23278": "07f2ce7ca554f42415d42dfbe58dfc9d",
".git/objects/c8/2627bbc06a1c970de516afd7bd0861ff749069": "8a98110f4b593fbb9905e49fa636874b",
".git/objects/ca/63ffbbac0e0f8c47685d9515770aaf6721337d": "79fe63009946033d645732f41f8f0176",
".git/objects/ce/cd13373fd95f516dce4c4633d72d7364517eb6": "d28004c7502697d3c035645cd4522aa3",
".git/objects/d7/71b9ee0aef2f84af3124449180c0232e60a2f8": "f17d2c2b627f70b6d5b263516b790b03",
".git/objects/db/f4f70a5039b5e8899ced6ccb329d4cd4ec9beb": "d57db727eca7163ab9db094d7710dda2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/f0/0317f16221ed6a5b9b8a05507832c89ade96a7": "77b2e8ce02080c12ff8d4099bac245c8",
".git/objects/f5/c8f8ce0effc2ce438b5756a67a1d3d1420eb63": "9c080a182d4cff6417d8c5a2751e0b0c",
".git/ORIG_HEAD": "679e34089c87a63c46b9a4141ec69552",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "9f7dbec586da649250ea768b4ce4b850",
".git/refs/remotes/origin/main": "9f7dbec586da649250ea768b4ce4b850",
".git/sourcetreeconfig": "72f688e15ed0d7264d13344407dc2609",
"assets/AssetManifest.json": "2fbbeb4fa5201198f0db10d7a829b07e",
"assets/assets/home.png": "846b694427629b7e0170cf149af01884",
"assets/assets/live.png": "a77ffcbd004f7a24315d8981685dca8a",
"assets/assets/loading.gif": "3f899a790ab677acd5762723b7743334",
"assets/assets/logo.png": "c507b92268441068fc43445a78252638",
"assets/assets/tvshow.png": "994175e254ef9647c265bd0e6ac5b2f3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "9989c8a6cc668ff05d4b2e8a49ef2208",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "c507b92268441068fc43445a78252638",
"icons/Icon-192.png": "c507b92268441068fc43445a78252638",
"icons/Icon-512.png": "c507b92268441068fc43445a78252638",
"icons/Icon-maskable-192.png": "c507b92268441068fc43445a78252638",
"icons/Icon-maskable-512.png": "c507b92268441068fc43445a78252638",
"index.html": "f6e62468dfc139c3e8c1449fbada663a",
"/": "f6e62468dfc139c3e8c1449fbada663a",
"main.dart.js": "e065f0fc39fab9294d6e673b56a9f6d5",
"manifest.json": "b65c158fe0fc1b00d0bfd8950b84d7e9",
"README.md": "c3186a8529d4f5b5523520c4aa2f92c5",
"version.json": "9eb7a362212abb8200566eda9b38cc9c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
