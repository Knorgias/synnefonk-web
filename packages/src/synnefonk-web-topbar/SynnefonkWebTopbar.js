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
      .topbar {
        width: 100%;
        height: 200px;
        background-color: grey;
      }
    `;
  }

  render() {
    html`
      <div>
        <a href=""></a><a href=""></a><a href=""></a><a href=""></a
        ><a href=""></a><a href=""></a><a href=""></a><a href=""></a
  
      </div>
    `;
  }
}
