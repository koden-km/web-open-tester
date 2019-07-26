'use strict';

let serviceWorkerRegistration;
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('sw.js')
		.then(function (registration) {
			serviceWorkerRegistration = registration;
			console.log('PWA: Service Worker Registered');
		});

	navigator.serviceWorker.ready
		.then(function (registration) {
			console.log('PWA: Service Worker Ready');
		});
}
