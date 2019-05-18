var admin = require('firebase-admin');

var serviceAccount = require('./secrets/enudge-85fea-firebase-adminsdk-d5sfe-2a9bd2ee9e.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://enudge-85fea.firebaseio.com'
});

var uid = "OnbLITakzTdhVFqodBaBfVQX4g33";

admin.auth().createCustomToken(uid)
  .then(function(customToken) {
    console.log(customToken);
  })
  .catch(function(error) {
    console.log("Error creating custom token:", error);
  });
