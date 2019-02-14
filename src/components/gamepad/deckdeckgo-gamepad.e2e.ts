import { newE2EPage } from '@stencil/core/testing';

describe('deckgo-gamepad', () => {
    it('renders', async () => {
        const page = await newE2EPage();

        await page.setContent('<deckgo-gamepad></deckgo-gamepad>');
        const element = await page.find('deckgo-gamepad');
        expect(element).toHaveClass('hydrated');
    });
});