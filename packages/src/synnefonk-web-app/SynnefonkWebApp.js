import { LitElement, html, css } from 'lit';
import 'synnefonk-web/sidebar.js';
import 'synnefonk-web/topbar.js';

class SynnefonkWebApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'Synnefonk App';
  }

  static get styles() {
    return css`
      body {
        margin: 0;
      }

      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        min-width: 100vw;
      }

      .header {
        min-height: 20px;
        height: 4vh; /* Use 'vh' unit instead of '%' */
        width: inherit;
      }

      .center {
        display: flex;
        flex: 1 1 0; /* Set flex-grow, flex-shrink, and flex-basis */
        width: inherit;
        height: 80vh;
      }

      .sidebar {
        max-height: inherit;
      }

      .footer {
        min-height: 20px;
        height: 4vh; /* Use 'vh' unit instead of '%' */
        width: inherit;
      }

      .header,
      .footer {
        box-sizing: border-box;
      }
    `;
  }

  render() {
    return html`
      <header class="header">
        Here's the header<synnefonk-web-topbar></synnefonk-web-topbar>
      </header>
      <div class="center">
        <div class="sidebar">
          <synnefonk-web-sidebar></synnefonk-web-sidebar>
        </div>
        <div class="content">
          <h1>This title: ${this.title}</h1>
          <p>First paragraph in main content</p>
        </div>
      </div>
      <footer class="footer">
        Here's the footer.
        <a href="../../../another.html">Go to another page</a>
      </footer>
    `;
  }
}

customElements.define('synnefonk-web', SynnefonkWebApp);
