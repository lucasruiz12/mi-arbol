export const showPushNotification = () => {
    console.log("ENTRO")
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.ready.then((registration) => {
            registration.showNotification("¡Notificación local!", {
                body: "Esto es una prueba sin Firebase 🚀",
                icon: "/favicon-192x192.png",
                badge: "/favicon-192x192.png",
                vibrate: [200, 100, 200],
            });
        });
    } else {
        console.error("Service Worker no disponible.");
    };
};