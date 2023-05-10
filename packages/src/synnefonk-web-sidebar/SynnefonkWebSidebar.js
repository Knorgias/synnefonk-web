import { LitElement, html, css } from 'lit';

export class SynnefonkWebSidebar extends LitElement {
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
        height: 100%;
      }

      .sidebar {
        height: inherit;
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        border: 2px solid black;
        box-sizing: border-box; /** Include border px in dimensions */
        width: 200px;
        overflow-y: scroll;
        position: sticky;
      }

      .sidebar a {
        margin-left: 20px;
      }
    `;
  }

  render() {
    return html`
      <div class="sidebar">
        <a href="p1.html">Go to p1</a>
        <a href="p2.html">Go to p2</a>
        <a href="p3.html">Go to p3</a>
        <a href="p1.html">Go to p1</a>
        <a href="p2.html">Go to p2</a>
        <a href="p3.html">Go to p3</a>
        <a href="p1.html">Go to p1</a>
        <a href="p2.html">Go to p2</a>
        <a href="p3.html">Go to p3</a>
        <a href="p1.html">Go to p1</a>
        <a href="p2.html">Go to p2</a>
        <a href="p3.html">Go to p3</a>
        <a href="p1.html">Go to p1</a>
        <a href="p2.html">Go to p2</a>
        <a href="p3.html">Go to p3</a>
        <a href="p1.html">Go to p1</a>
        <a href="p2.html">Go to p2</a>
        <a href="p3.html">Go to p3</a>
        <a href="p1.html">Go to p1</a>
        <a href="p2.html">Go to p2</a>
        <a href="p3.html">Go to p3</a>
        <a href="p1.html">Go to p1</a>
        <a href="p2.html">Go to p2</a>
        <a href="p3.html">Go to p3</a>
        <a href="p1.html">Go to p1</a>
        <a href="p2.html">Go to p2</a>
        <a href="p3.html">Go to p3</a>
        <a href="p1.html">Go to p1</a>
        <a href="p2.html">Go to p2</a>
        <a href="p3.html">Go to p3</a>
      </div>
    `;
  }
}
