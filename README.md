# DeckDeckGo - Gamepad

Create a PWA presentation using Web Components, [Ionic](http://ionicframework.com) components and HTML or Markdown 🚀

Cherry on the cake 🍒🎂 [DeckDeckGo] comes with a [Progressive Web App](https://deckdeckgo.app) to remote control your slides 📱

## Table of contents

- [Gamepad](#gamepad)
- [Getting Started](#getting-started)
  - [Using from a CDN](#using-from-a-cdn)
  - [Install from NPM](#install-from-npm)
  - [Framework integration](#framework-integration)
- [Usage](#usage)
- [Develop](#develop)
- [License](#license)

## Gamepad

This project allows you to control your [DeckDeckGo] presentation with a Gamepad. Under the hood, it relies on [@gamepad/core](https://github.com/natemoo-re/gamepad), a wrapper around the Web's [Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API). Currently, it supports Nintendo's [Joy-Con](https://en.wikipedia.org/wiki/Joy-Con), but if you'd like to see support for your favorite controller, feel free to [open an issue](https://github.com/natemoo-re/gamepad/issues) on the Gamepad repository.

## Getting Started

If you just wish to give a try, jump to the [Develop](#develop) chapter of this readme.

Otherwise, start first your new new presentation like described in the quick  👉 [Getting Started guide](https://docs.deckdeckgo.com/docs) 👈

Once done, install this Web Component as described in the following chapters and implement its usage as described in the [Usage](#usage) chapter of this readme or have a look at the provided examples in [src/index.html](src/index.html).

### Using from a CDN

It's recommended to use [unpkg](https://unpkg.com/) to use this component from a CDN. To do so, add the following include script in the main HTML file of your project:

```
<script src="https://unpkg.com/deckdeckgo-gamepad@latest/dist/deckdeckgo-gamepad.js"></script>
```

### Install from NPM

Install it in your project from [npm](https://www.npmjs.com/package/deckdeckgo) using the following command:

```bash
npm install deckdeckgo-gamepad
```

### Framework integration

The [Stencil documentation](https://stenciljs.com/docs/overview) provide examples of framework integration for [Angular](https://stenciljs.com/docs/angular), [React](https://stenciljs.com/docs/react), [Vue](https://stenciljs.com/docs/vue) and [Ember](https://stenciljs.com/docs/ember).

### Usage

```html
  <deckgo-gamepad></deckgo-gamepad>

  <deckgo-deck></deckgo-deck>
```

## Develop

To develop and run this Web Component locally, proceed as following:

```
git clone https://github.com/deckgo/deckdeckgo-gamepade
cd deckdeckgo-gamepade
npm install
npm run start
```

## License

MIT © [Nate Moore](https://natemoo.re) and [David Dal Busco](mailto:david.dalbusco@outlook.com)

[DeckDeckGo]: https://deckdeckgo.com
