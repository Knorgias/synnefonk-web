import { LitElement, html, css } from 'lit';

export class SynnefonkWebComponent extends LitElement {
  constructor() {
    super();
    this.title = '';
  }

  static get properties() {
    return {
      title: {
        type: String,
        value: 'Some title',
      },
    };
  }

  static get styles() {
    return css`
      .title {
        font-size: 32px;
      }
    `;
  }

  render() {
    // TODO: update (prettier) config to format HTML with nice indentation
    return html` <h1 class="title">I am the title</h1>
      <p>
        I am a paragraph that contains some words to be displayed as text.
      </p>`;
  }
}
