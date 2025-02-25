// export const newNotification = ({ title, body }) => {
//   new Notification(title, {
//     body,
//   });
// };

const timeouts = {}

export const showPushNotification = ({ title, body }) => {
  navigator.serviceWorker.ready.then((registration) => {
    registration.showNotification(title, {
      body,
      icon: "/favicon-192x192.png",
      badge: "/favicon-192x192.png",
      vibrate: [200, 100, 200],
    });
  });
};


export const scheduleNotification = (date, notification, type) => {

  if (type === "removed") {
    if (timeouts[notification.id]) {
      clearTimeout(timeouts[notification.id]);
    };
  } else {
    const now = new Date();
    const diff = date.getTime() - now.getTime();

    if (diff < 0) {
      return;
    };

    if (timeouts[notification.id]) {
      clearTimeout(timeouts[notification.id]);
    };

    const timeoutId = setTimeout(() => {
      showPushNotification(notification);
    }, diff);

    timeouts[notification.id] = timeoutId; // Guardamos el timeout en el objeto
  };
};