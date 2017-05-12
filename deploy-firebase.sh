#!/bin/sh

#rm -rf build
#polymer build
#npm run build
#polymer build --add-service-worker --js-compile --add-push-manifest --sw-precache-config sw-precache-config.js --js-minify --css-minify --html-minify --insert-prefetch-links
polymer build --add-service-worker --js-compile --add-push-manifest --sw-precache-config sw-precache-config.js --css-minify --html-minify --insert-prefetch-links

firebase deploy
