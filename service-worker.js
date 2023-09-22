/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3479b01b35e7847eab74a08e1a07d3f7"
  },
  {
    "url": "assets/css/0.styles.ac150faa.css",
    "revision": "453a3fa0dad52402e2b20a58de935494"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.b79c2da0.js",
    "revision": "e8f99f92989847770fb13fc33c94baf8"
  },
  {
    "url": "assets/js/11.38349422.js",
    "revision": "642f36b61f61148e719011715c606ea4"
  },
  {
    "url": "assets/js/12.2af4624c.js",
    "revision": "f69847f2e33784e475d440eb6450cec5"
  },
  {
    "url": "assets/js/13.d52850ea.js",
    "revision": "6299b5de2bc4af81ca406f442d79a642"
  },
  {
    "url": "assets/js/14.cd01abb2.js",
    "revision": "15271f41e0364f2f2704539decbb9948"
  },
  {
    "url": "assets/js/15.36a4e767.js",
    "revision": "544c93473e93d2fac39869a3605fa94a"
  },
  {
    "url": "assets/js/16.d9865885.js",
    "revision": "26f177523f55589c2adb3110dfc00d39"
  },
  {
    "url": "assets/js/17.93e3b0ad.js",
    "revision": "6afad6ffbc6265ebf2366e746222428a"
  },
  {
    "url": "assets/js/18.eda619fb.js",
    "revision": "5c23295f0474c7df8b7f902aa9b169a1"
  },
  {
    "url": "assets/js/19.6a634849.js",
    "revision": "5a6cfb33822169de1969b1ef198aa8d3"
  },
  {
    "url": "assets/js/2.255626f5.js",
    "revision": "d5db5cdff487ae3e468f4c24ffac7cf0"
  },
  {
    "url": "assets/js/20.19f749a9.js",
    "revision": "60f10cd6a0e524965f300c1d3441d9db"
  },
  {
    "url": "assets/js/21.b06e8ea4.js",
    "revision": "31a05e0bfa558bd3fe44a34123dc794a"
  },
  {
    "url": "assets/js/22.9c892eb8.js",
    "revision": "8cfd9c3d439f7d695d90c55f77631d53"
  },
  {
    "url": "assets/js/23.36007bf3.js",
    "revision": "85d80644096b9abb4762d45da33ec0cf"
  },
  {
    "url": "assets/js/24.0f38b173.js",
    "revision": "27de2ade52161b82d19eb1a792e0b718"
  },
  {
    "url": "assets/js/25.0b533aec.js",
    "revision": "875435bdaccfccf20ace0ac80145cd8a"
  },
  {
    "url": "assets/js/26.cc24b924.js",
    "revision": "04d533484e6a1fb9f98a547dce933c90"
  },
  {
    "url": "assets/js/27.7cf47720.js",
    "revision": "7fbe2065d692999c1bffd876c0ffaaeb"
  },
  {
    "url": "assets/js/28.b0b21187.js",
    "revision": "9428ec4ba97b6f21641b7b6f12a21982"
  },
  {
    "url": "assets/js/29.29b9e942.js",
    "revision": "f96dcc40efd05eb64015c50c6593838f"
  },
  {
    "url": "assets/js/3.74742e8f.js",
    "revision": "b81758d0634b2ff1bc910bd402e89bfd"
  },
  {
    "url": "assets/js/30.b2aa07c8.js",
    "revision": "5704e1bd1a614fa44357f871c4b29fbc"
  },
  {
    "url": "assets/js/31.a197274b.js",
    "revision": "cd443528ae7edee9f793fcfe07ddd339"
  },
  {
    "url": "assets/js/32.db26b495.js",
    "revision": "b1e8d4b46bffe3ff27ffe64a8d5f5d6f"
  },
  {
    "url": "assets/js/33.dd383b22.js",
    "revision": "bcec9e96443621da1ddd0bd4ae9c63a4"
  },
  {
    "url": "assets/js/34.3c87f89e.js",
    "revision": "64792d8a17bbad7a80d46bdc3c51cdb8"
  },
  {
    "url": "assets/js/35.57342ba9.js",
    "revision": "ad2e5a1e3dca407f0653938486061a79"
  },
  {
    "url": "assets/js/36.076f926a.js",
    "revision": "9cb6e49c7433b123bf082dcc0b64036d"
  },
  {
    "url": "assets/js/37.4e98e24d.js",
    "revision": "3012af256c42fd6ceb9f5d88cf2cd6e9"
  },
  {
    "url": "assets/js/38.51c0a67b.js",
    "revision": "e124a58ada4c2b322ac9355832c3116e"
  },
  {
    "url": "assets/js/39.adbfcd3a.js",
    "revision": "4e89f91b614443f7fcf7febbb2164ed3"
  },
  {
    "url": "assets/js/4.92e06f8f.js",
    "revision": "3f9490242a0d403a041af8ba36d4a5f3"
  },
  {
    "url": "assets/js/40.73846676.js",
    "revision": "a866049489949ed189fb07293e9af886"
  },
  {
    "url": "assets/js/41.098c1b92.js",
    "revision": "70d55c3ef52723e7277413d4d05d067c"
  },
  {
    "url": "assets/js/42.21ce5220.js",
    "revision": "5fd1aafab59270a187fc3943f081c5ab"
  },
  {
    "url": "assets/js/43.2d36807e.js",
    "revision": "ddbff598ba369789dc8988761e0f6e2e"
  },
  {
    "url": "assets/js/44.22fad77c.js",
    "revision": "c0282f969f7b9b64a04bcaf923b48f1b"
  },
  {
    "url": "assets/js/45.5be4f0b7.js",
    "revision": "02d8fece3679c5e9caa1fbdd9dc52077"
  },
  {
    "url": "assets/js/46.f98f162f.js",
    "revision": "9c39fc4284b8c4e1fc6429a10241ad87"
  },
  {
    "url": "assets/js/47.3c0ab833.js",
    "revision": "ba4b9c53681e022e7c4ff2cff96ba093"
  },
  {
    "url": "assets/js/48.0eae0803.js",
    "revision": "31f6857d003aa890b71c79d7e38fd402"
  },
  {
    "url": "assets/js/49.1be95254.js",
    "revision": "007a8aa1092c08ff6b983a1a12870ba7"
  },
  {
    "url": "assets/js/5.d8daf814.js",
    "revision": "c405923ea9a0a75060900682faf7a8ff"
  },
  {
    "url": "assets/js/50.ef00bc2c.js",
    "revision": "24a8bb2f875ba08ff650d3a36fce43cd"
  },
  {
    "url": "assets/js/51.2e2520fc.js",
    "revision": "7487677b8b9663a249a79ae850073211"
  },
  {
    "url": "assets/js/52.7fe9394b.js",
    "revision": "2f523a0ccde38b75b0abcfc20ec9a37e"
  },
  {
    "url": "assets/js/53.8943dd83.js",
    "revision": "fb7f06b7d0ce0ba8ed93c0a480dc3e29"
  },
  {
    "url": "assets/js/54.195e60fc.js",
    "revision": "81b4f06ce2d9b861a336f1ec518be0aa"
  },
  {
    "url": "assets/js/55.b7aa6fe7.js",
    "revision": "5982102db4aadb489193ce1ff9128bdf"
  },
  {
    "url": "assets/js/56.20eb2e94.js",
    "revision": "f9ee95581dbbe750e84a94a2870f04e5"
  },
  {
    "url": "assets/js/6.c81edcf3.js",
    "revision": "1295d10a35fe017e418fad689081c20d"
  },
  {
    "url": "assets/js/7.7c6143ba.js",
    "revision": "02301f8ffb3965b651e92eb5718d7923"
  },
  {
    "url": "assets/js/8.e1c09b5e.js",
    "revision": "8415db084036391e56a6cb17b22a2111"
  },
  {
    "url": "assets/js/app.f4cac985.js",
    "revision": "a0de1ec8ccb00c19641df81183955541"
  },
  {
    "url": "assets/js/vendors~docsearch.76a29222.js",
    "revision": "9637d52e5fc6d45ad3e65cfe36c64139"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "92702e0e1e951becd16cafb2895c5233"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "a8a4384ee7acca4bec9654d5f457a27c"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "1582eb153cbd4c293fbf878504542a85"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "3bf7287e611f9ed2e01d06e661237371"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "bc624e5772c6fb724757e8d8e7046652"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "55dda8f5f8a5d6e7151fc8c56b7923f7"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "9343f8e602996edde35cb28dc07f8884"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "f63169dbbe4ab054a17c7de95c7484ce"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "b2d69ffdd5d13a050e59066621341a29"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "b0f1e74962b8303a079015e0d704c358"
  },
  {
    "url": "googleb0cb4a6e76619924.html",
    "revision": "997b21b41e019120a987acc0a2de5a22"
  },
  {
    "url": "hero.png",
    "revision": "b0451959428f1596d579dd0a4165e5b9"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "18bd5130d1d2c560f7a64a810f10b567"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "ca0e5ccce3e6597c6a92389767d386f2"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "a0a146811db506577fc59becb1e9df8a"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "eaad287782a03fec4918c03df6f2b1d3"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "81480ca682e35a952f4d63bea5471718"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "200d639632824824997b3658a17ae3ad"
  },
  {
    "url": "index.html",
    "revision": "05566bd86522712ed3f853e95e4ecdbc"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "f3c2670e90741a0d3ec66a0e62174a75"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "6f0094a3886f6f19b4377cdde1dd5da7"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "6ce8ac0df6c4a49d2da2aa90e4fe3ea7"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "bfc4c2569c8a2ade52e21ee1c4ffa8e3"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "65a89c846b4b63026c4cf9feb0a79c92"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "f128c98359cb11b84d14a8df325761fd"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "5cd9c79a99e15fa6bc2e3fca1cc79da1"
  },
  {
    "url": "resources/books.html",
    "revision": "de900d9ba361b9dc70d608e58d0e7b60"
  },
  {
    "url": "resources/community.html",
    "revision": "ab815063b4a45d4a18b41754a5e6d388"
  },
  {
    "url": "resources/conferences.html",
    "revision": "ef047b925f9e370c731311b32097f76d"
  },
  {
    "url": "resources/courses.html",
    "revision": "5931d8b4a4bc9c1d852aece0bd5cb468"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "657af832827d529287d93d0dda27a025"
  },
  {
    "url": "resources/examples.html",
    "revision": "412d14dea0f4b64db5b2f526a79b03ad"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "eff981ebeaedcceee5577366343067f0"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "f373287b9fc9081f62238b74ed2035af"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "1ba86a16ed63234e11d34a6bb99e2232"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "e24e62329f70b4e8e7e90b7bcbd35eec"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "a2234105a20f2a0199b009a284382922"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "9a2e50d20a93936e1ae71eb8fde247d7"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "fec6d5bd425b6e75590544ebfc243fa5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
