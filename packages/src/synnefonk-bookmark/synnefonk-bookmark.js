import { LitElement, html, css } from 'lit';

export class SynnefonkBookmark extends LitElement {
  static styles = css`
    .bookmark {
      padding: 12px;
    }

    ::slotted([slot='title']) {
      color: red;
      font-size: 20px;
    }

    .bookmark-content {
      display: flex;
      border-bottom: 1px solid grey;
    }
  `;

  render() {
    return html`
      <div class="bookmark">
        <slot name="title"></slot>
        <div class="bookmark-content">
          <slot name="img"></slot>
          <p><slot name="description"></slot></p>
        </div>
      </div>
    `;
  }
}
