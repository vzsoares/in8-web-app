# Full Stack test for In8

## About

### What was asked:

For this test it was asked the creation of a REST api with some DB and a SPA made with react , were they both must be independent from each other.

The layout and it's requirements were provided. you can see them at `public/`.

---

## Used techs

- ### web-app

- - [chakra-ui](https://chakra-ui.com/) component library
- - [swr](https://swr.vercel.app/) react fetch hook
- - [typescript](https://www.typescriptlang.org/docs/handbook/react.html) typing tool for js
- - [reactJS](https://reactjs.org/) required framework

- ### server

- - [sqlite3](https://www.npmjs.com/package/sqlite3) sql db for node
- - [express](https://expressjs.com/) node framework
- - [cors](https://www.npmjs.com/package/cors) cors enabling tool
- - [ts-node](https://www.npmjs.com/package/ts-node) typescript node compiler
- - [nodemon](https://www.npmjs.com/package/nodemon) node dev tool

---

## Notes

- provided fonts were converted with https://transfonter.org/ due to unsupported .ttf format by chrome.

---

## Usage

### web-app

- instal deps with `yarn install`
- run `yarn start` to start app
  > - note:
  > - - server port `3000`

### server

- change directory to `/server` with `cd server/`
- instal deps with `yarn install`
- run `yarn dev` to start server
  > - note:
  > - - server port `4000`
