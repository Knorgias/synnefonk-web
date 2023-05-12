import { LitElement, html, css } from 'lit';
import 'synnefonk-web/sidebar.js';
import 'synnefonk-web/topbar.js';

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
    this.imgUrl = '';
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

      .bookmark {
        padding: 12px;
      }

      .bookmark-content {
        display: flex;
        border-bottom: 1px solid grey;
      }

      .content {
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

  _renderMain() {
    return html` <main class="center">
      <div class="sidebar">
        <synnefonk-web-sidebar></synnefonk-web-sidebar>
      </div>
      <div class="content">
        <h1>${this.title}</h1>
        <h2>Here's a mini pokedex</h2>
        <div class="bookmark">
          <h3 class="bookmark-title">Bulbasaur</h3>
          <div class="bookmark-content">
            <img src="${this.imgUrl}/001.png" />
            <p>
              There is a plant seed on its back right from the day this Pokémon
              is born. The seed slowly grows larger.
            </p>
          </div>
        </div>
        <div class="bookmark">
          <h3 class="bookmark-title">Ivysaur</h3>
          <div class="bookmark-content">
            <img src="${this.imgUrl}/002.png" />
            <p>
              When the bulb on its back grows large, it appears to lose the
              ability to stand on its hind legs.
            </p>
          </div>
        </div>
        <div class="bookmark">
          <h3 class="bookmark-title">Venusaur</h3>
          <div class="bookmark-content">
            <img src="${this.imgUrl}/003.png" />
            <p>
              Its plant blooms when it is absorbing solar energy. It stays on
              the move to seek sunlight.
            </p>
          </div>
        </div>
        <div class="bookmark">
          <h3 class="bookmark-title">Charmander</h3>
          <div class="bookmark-content">
            <img src="${this.imgUrl}/004.png" />
            <p>
              It has a preference for hot things. When it rains, steam is said
              to spout from the tip of its tail.
            </p>
          </div>
        </div>
        <div class="bookmark">
          <h3 class="bookmark-title">Charmeleon</h3>
          <div class="bookmark-content">
            <img src="${this.imgUrl}/005.png" />
            <p>
              It has a barbaric nature. In battle, it whips its fiery tail
              around and slashes away with sharp claws.
            </p>
          </div>
        </div>
        <div class="bookmark">
          <h3 class="bookmark-title">Charizard</h3>
          <div class="bookmark-content">
            <img src="${this.imgUrl}/006.png" />
            <p>
              It spits fire that is hot enough to melt boulders. It may cause
              forest fires by blowing flames.
            </p>
          </div>
        </div>
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
    this.imgUrl = `${document.querySelector('base').href}packages/images`;
    console.log('imgUrl:', this.imgUrl);
  }
}

customElements.define('synnefonk-web', SynnefonkWebApp);
