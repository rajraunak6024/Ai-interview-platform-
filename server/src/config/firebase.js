const { initializeApp, cert } = require("firebase-admin/app");
const serviceAccount = require("./firebaseServiceAccount.json");

const firebaseApp = initializeApp({
  credential: cert(serviceAccount),
});

module.exports = firebaseApp;