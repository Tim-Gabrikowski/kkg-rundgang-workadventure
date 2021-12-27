https://tim-gabrikowski.github.io/kkg-rundgang-workadventure/

# WorkAdventure Map Starter Kit

This is a starter kit to help you build your own map for [WorkAdventure](https://workadventu.re).

To understand how to use this starter kit, follow the tutorial at [https://workadventu.re/map-building](https://workadventu.re/map-building).

![map](./map.png)

## Installation

With npm installed (comes with [node](https://nodejs.org/en/)), run the following commands into a terminal in the root directory of this project:

```shell
npm install
npm run start
```

The project will run at http://localhost:8080/

## Licenses

This project contains multiple licenses:

-   [Code license](./LICENSE.code) _(all files except those for other licenses)_
-   [Map license](./LICENSE.map) _(`map.json` and the map visual as well)_
-   [Assets license](./LICENSE.assets) _(the files inside the `src/assets/` folder)_

### About third party assets

If you add third party assets in your map, do not forget to:

1. Credit the author and license with the "tilesetCopyright" property present in the properties of each tilesets in the `map.json` file
2. Add the license text in LICENSE.assets
