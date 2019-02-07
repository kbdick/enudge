## eNudge

eNudge is a simple web app for helping the user be a more energy conscious consumer. It's designed to be accessible to a consumer with amateur developer skills.

This project was generated with [Angular](https://angular.io). The backend is built in [Cloud Firestore](https://firebase.google.com). Data is pulled using [Zapier](https://zapier.com) and the following APIs.
1. [Watttime](https://api.watttime.org) for up to 5 minute grid fossil fuel data for the PJM ISO.
2. [ComEd Hourly Pricing](https://hourlypricing.comed.com) for up to 5 minute pricing data.
3. [Enphase Enlighten](https://enlighten.enphaseenergy.com) for up to 5 minute solar generation output.
4. [Rainforest Eagle](https://rainforestcloud.com) for up to 6 second electriciy demand.

Deployed to [Github Pages](https://github.com) with [NGH](https://github.com/angular-schule/angular-cli-ghpages). 

Future Builds:

1. Reports with [Data Studio](https://datastudio.google.com)
2. Messaging alerts.
3. PWA with push notifications.