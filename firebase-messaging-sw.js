/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Same config as src/utils/firebase.js — service workers can't import app
// modules, so this is kept in sync manually.
firebase.initializeApp({
  apiKey: "AIzaSyAmxTIbjJQ2oNTHiIzzRDHKp3dwYcdTApw",
  authDomain: "chitchat-e0a20.firebaseapp.com",
  databaseURL: "https://chitchat-e0a20.firebaseio.com",
  projectId: "chitchat-e0a20",
  storageBucket: "chitchat-e0a20.appspot.com",
  messagingSenderId: "726805710702",
  appId: "1:726805710702:web:b37e62497805a74d69e37f",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const { title, body } = payload.notification || {};
  self.registration.showNotification(title || 'ChitChat', {
    body: body || 'New message',
    icon: '/logo192.png',
    badge: '/logo192.png',
  });
});
