Notes

## Export Firestore to Big Query
Export first after setting up the SDK: https://cloud.google.com/firestore/docs/manage-data/export-import
Command: gcloud beta firestore export gs://enudge-85fea.appspot.com/enudge/020619 --collection-ids=carbons,prices,solars,uses,users
Status: gcloud beta firestore operations describe HASH