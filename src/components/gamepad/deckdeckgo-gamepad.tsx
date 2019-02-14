import { Component, Listen } from '@stencil/core';
import { GamepadEventEmitter, GamepadButtonEvent } from '@gamepad/core';
import joycon from '@gamepad/plugin-joycon';


@Component({
  tag: "deckgo-gamepad",
  shadow: true
})
export class DeckdeckgoGamepad {

  private deck: any;
  private gamepad: GamepadEventEmitter;
  
  componentWillLoad() {
    this.deck = document.querySelector('deckgo-deck') as any;

    this.gamepad = new GamepadEventEmitter({
      plugins: [
        joycon()
      ]
    })
  }

  componentDidUnload() {
    this.deck = undefined;
    this.gamepad.unsubscribe();
  }

  @Listen('window:gamepadbuttondown')
  protected async gamepadButtonDownHandler(event: GamepadButtonEvent) {
    // console.log(event.detail.code);
    switch (event.detail.code) {
      case 'Y': return this.slideNext();
      case 'A': return this.slidePrev();
      case 'X':
      case 'LStick':
      case 'RStick':
        return this.playVideo();
      case 'Screenshot':
      case 'Home':
        return this.toggleFullScreen();
    }
  }

  private loop: any;
  @Listen('window:gamepadaxischange')
  protected async gamepadAxisChangeHandler(event: any) {
    clearInterval(this.loop);
    const interval = 200;
    const x = event.detail.x;
    if (x !== 0) {
      if (x === 1) {
        this.slideNext(true);
        this.loop = setInterval(() => this.slideNext(true), interval);
      }
      if (x === -1) {
        this.slidePrev(true);
        this.loop = setInterval(() => this.slidePrev(true), interval);
      }
    } 
  }

  slideNext(skip: boolean = false) {
    if (!this.deck) return;
    this.deck.slideNext(!skip);
  }

  slidePrev(skip: boolean = false) {
    if (!this.deck) return;
    this.deck.slidePrev(!skip);
  }
  
  toggleFullScreen() {
    if (!this.deck) return;
    this.deck.toggleFullScreen();
  }

  playVideo() {
    return new Promise(async (resolve) => {
      if (!this.deck) {
        resolve();
        return;
      }

      const index = await this.deck.getActiveIndex();
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
