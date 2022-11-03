if (res.ok) {

    return aches.open(dynamicCache).then(cache => {

        cache.put(req, es.clone());

        return resclone();

    });

} else {
    return res;
}

// Cache with network update
function actualizaCacheStatico(staticCache, req, APP_SHELL_INMUTABLE) {


    if (APP_SHELL_INMUTABLE.includes(req.url)) {
        // No hace falta actualizar el inmutable
        // console.log('existe en inmutable', eq.url );

    } else {
        // console.log('actualizando', req.url );
        return fetch(req)
            .then(res => {
                return acualizaCacheDinamico(staticCache, req, res);
            });
    }



}

//Network witch cache  fallback /   update
function manejoApiMensajes(cacheName, req) {
    if (req.clone().method === 'POST') {
        // POSTEO de un nuevo mensaje
        req.clone().text().then(body => {
            // console.log(body);
            const bodyObj = JSON.parse(body);
            guardarMensaje(bodyObj);
        });

        // Tengo que guardar  en el indexDB

        return fetch(req);

    } else {

        return fetch(req).then(res => {

            if (res.ok) {
                actualizaCacheDinamico(cacheName, req, res.clone());
                return res.clone();
            } else {
                return caches.match(req);
            }

        }).catch(err => {
            return caches.match(req);
        });
    }
}