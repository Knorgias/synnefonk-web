import { LitElement, html, css } from 'lit';
import 'synnefonk-web/sidebar.js';
import 'synnefonk-web/topbar.js';
import 'synnefonk-web/bookmark.js';
import { manifestData } from '../../_assets/pokemon/manifest.js';

class SynnefonkWebApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      baseUrl: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'Welcome to the Synnefonk App';
    this.assetUrl = '';
  }

  static get styles() {
    return css`
      /** Top-level section styling */
      body {
        margin: 0;
      }

      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        min-width: 100vw;
      }

      /** Header section styling */
      .header {
        min-height: 20px;
        height: 4vh; /* Use 'vh' unit instead of '%' */
        width: inherit;
      }

      /** Left sidebar section styling */
      .sidebar {
        max-height: inherit;
      }

      /** Main section styling*/
      .center {
        display: flex;
        flex: 1 1 0; /* Set flex-grow, flex-shrink, and flex-basis */
        width: inherit;
        height: 80vh;
      }

      .content {
        width: 100%;
        overflow-y: auto;
        background-color: aliceblue;
      }

      /** Footer section styling */
      .footer {
        min-height: 20px;
        height: 4vh; /* Use 'vh' unit instead of '%' */
        width: inherit;
      }

      /** Misc styling & combinations */
      .header,
      .footer {
        box-sizing: border-box;
      }
    `;
  }

  _renderHeader() {
    return html` <header class="header">
      <synnefonk-web-topbar></synnefonk-web-topbar>
    </header>`;
  }

  _renderBookmarks() {
    const bookmarks = manifestData.map(
      item => html`
        <synnefonk-bookmark>
          <h3 slot="title">${item.data.title}</h3>
          <img slot="img" src="${item.data.imagePath}" />
          <p slot="description">${item.data.description}</p>
        </synnefonk-bookmark>
      `,
    );
    return html`${bookmarks}`;
  }

  _renderMain() {
    return html` <main class="center">
      <div class="sidebar">
        <synnefonk-web-sidebar></synnefonk-web-sidebar>
      </div>

      <div class="content">
        <h1>${this.title}</h1>
        <h2>Here's a mini pokedex</h2>

        ${this._renderBookmarks()}
      </div>
    </main>`;
  }

  _renderFooter() {
    return html` <footer class="footer">
      Here's the footer.
      <a href="../../../another.html">Go to another page</a>
    </footer>`;
  }

  render() {
    return html` ${this._renderHeader()} ${this._renderMain()}
    ${this._renderFooter()}`;
  }

  connectedCallback() {
    super.connectedCallback();

    // Construct the path "/packages/images" to the images
    this.assetUrl = `${document.querySelector('base').href}packages/_assets`;
    console.log('assetUrl:', this.assetUrl);
  }
}

customElements.define('synnefonk-web', SynnefonkWebApp);
