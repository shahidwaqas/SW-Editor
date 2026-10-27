const C="sw-editor-v9";
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(["./","index.html","manifest.json","banner.png","mark.png","icon-180.png","icon-192.png","icon-512.png"]).catch(()=>{})))});
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;
 e.respondWith(fetch(e.request).then(r=>{if(r.ok&&(e.request.url.startsWith(self.location.origin)||e.request.url.includes("gstatic.com")||e.request.url.includes("fonts.g"))){const k=r.clone();caches.open(C).then(c=>c.put(e.request,k))}return r}).catch(()=>caches.match(e.request)))});
