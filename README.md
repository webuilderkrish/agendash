# Agendash

## What is this?

Agendash is a UI for [agenda npm package]. The UI is based on angular 7 & a simple http server in the backend.

> Upcoming release will start supporting different routing moddlewares for frequently used Node framewroks such as express, koa, etc.

---

## Project Structure

The package entry point is [index.js file] in lib directory.

The Angular UI project resides in [ui folder] folder in root directory. The dist folder of UI should point to the [public folder] (inside lib directory).

Build the angular app before checking in the changes to make sure public folder is up to date with latest UI changes.

---

## Demo

Run following command -

``` bash
# install dependencies & start a server on port 8080
npm i && npm start
```

The server will run on http://localhost:8080

---

## Author

Manoj Chalode (chalodem@gmail.com)

Copyrights - Manoj Chalode (December 2018)

---

[agenda npm package]:https://github.com/agenda/agenda
[index.js file]:./lib/index.js
[ui folder]:./ui/index.html
[public folder]:./lib/index.html