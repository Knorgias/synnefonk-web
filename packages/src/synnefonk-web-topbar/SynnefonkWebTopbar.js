import { LitElement, html, css } from 'lit';

export class SynnefonkWebTopbar extends LitElement {
  static get properties() {
    return {
      items: {
        type: Array,
      },
    };
  }

  constructor() {
    super();
    this.items = ['home', 'another', 'another2'];
  }

  static get styles() {
    return css`
      :host {
        display: block; /** Otherwise, it's displayed inline and not visible */
        height: inherit;
        background-color: grey;
      }

      .topbar-container {
        display: flex;
        height: inherit;
        justify-content: space-evenly;
      }

      .link-1:hover,
      .link-2:hover,
      .link-3:hover {
        background-color: teal;
      }
    `;
  }

  render() {
    return html`<div class="topbar-container">
      <div class="link-1">
        <a href="../../../index.html">Homepage</a>
      </div>
      <div class="link-2"><a></a>Another Page</div>
      <div class="link-3"><a></a>Github Repo</div>
    </div>`;
  }
}
