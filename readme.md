Application to try out node + angular 2.

To use, run `npm install` on both client and server

Set up the symbolic link for the shared folders as admin from windows command prompt:

`mklink /D {{path-to-project}}\legends-of-chronicle\server\shared {{path-to-project}}\legends-of-chronicle\client\app\shared`

Run `npm typings install` and `npm tsc`.

Then install mongodb and add "chronicledb" as a db, along with "cards" as a collection.

Then using the Intellij node plugin, run server/app.js, and go to http://localhost:3000/ in your browser.