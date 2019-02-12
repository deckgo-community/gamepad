import { Component, Listen } from '@stencil/core';
import { GamepadEventEmitter, GamepadButtonEvent } from '@gamepad/core';
import joycon from '@gamepad/plugin-joycon';


@Component({
  tag: "deckgo-gamepad",
  shadow: true
})
export class DeckdeckgoGamepad {

  private gamepad: GamepadEventEmitter;
  
  componentWillLoad() {
    this.gamepad = new GamepadEventEmitter({
      plugins: [
        joycon()
      ]
    })
  }

  componentDidUnload() {
    this.gamepad.destroy();
  }

  @Listen('window:gamepadbuttondown')
  protected gamepadButtonDownHandler(event: GamepadButtonEvent) {
    // console.log(event.detail.code);
    switch (event.detail.code) {
      case 'Y': return this.slideNext();
      case 'A': return this.slidePrev();
      case 'X': return this.playVideo();
      case 'Screenshot':
      case 'Home':
        return this.toggleFullScreen();
    }
  }

  slideNext() {
    const elem = document.getElementsByTagName('deckgo-deck') as any;
    if (elem && elem.length > 0) {
      elem[0].slideNext(false);
    }
  }

  slidePrev() {
    const elem = document.getElementsByTagName('deckgo-deck') as any;
    if (elem && elem.length > 0) {
      elem[0].slidePrev(false);
    }
  }
  
  toggleFullScreen() {
    const elem = document.getElementsByTagName('deckgo-deck') as any;
    if (elem && elem.length > 0) {
      elem[0].toggleFullScreen();
    }
  }

  playVideo() {
    return new Promise(async (resolve) => {
      const deck = document.getElementsByTagName('deckgo-deck') as any;
      if (!deck) {
        resolve();
        return;
      }
      const index = await deck.getActiveIndex();
      const youtubeSlideElement = document.querySelector('.deckgo-slide-container:nth-child(' + (index + 1) + ')') as any;
      if (!youtubeSlideElement || youtubeSlideElement.tagName !== 'deckgo-slide-youtube'.toUpperCase()) {
        resolve();
        return;
      }
      await youtubeSlideElement.play();
      resolve();
    });
  }

}
