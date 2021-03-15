import { BaseComponent } from './../base.js';
export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    const template = `
    <section class="image">
      <div class="img__holder"><img class="image__thumbnail"></div>
      <p class="image__title"></p>
    </section>
    `;
    super(template);
    const imageElement = this.element.querySelector('.image__thumbnail')! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector('.image__title')! as HTMLParagraphElement;
    titleElement.textContent = title;
  }
}