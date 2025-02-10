self.addEventListener("push", (event) => {
    console.log("Push recibido:", event);
    if (event.data) {
        const data = event.data.json();
        self.registration.showNotification(data.title, {
            body: data.body,
            icon: "/favicon-192x192.png",
            badge: "/favicon-192x192.png",
            vibrate: [200, 100, 200],
        });
    }
});

self.addEventListener("notificationclick", (event) => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow("/") // Cambia esto si necesitas abrir una URL específica
        // clients.openWindow("/home") // Cambia esto si necesitas abrir una URL específica
    );
});
