'use strict';

const basePath = '/web-open-tester/';

let serviceWorkerRegistration;
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register(basePath + 'sw.js')
		.then(function (registration) {
			serviceWorkerRegistration = registration;
			console.log('PWA: Service Worker Registered');
		});

	navigator.serviceWorker.ready
		.then(function (registration) {
			console.log('PWA: Service Worker Ready');
		});
}
