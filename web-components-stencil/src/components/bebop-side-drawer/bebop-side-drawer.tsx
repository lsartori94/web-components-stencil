import { Component, h, Prop, State, Method } from '@stencil/core';

@Component({
  tag: 'bebop-side-drawer',
  styleUrl: './bebop-side-drawer.scss',
  shadow: true
})
export class BebopSideDrawer {
  @Prop({reflectToAttr: true}) title: string;
  @Prop({reflectToAttr: true, mutable: true}) opened: boolean;

  @State() showContactInfo = false;

  onCloseDrawer() {
    this.opened = false;
  }

  onContentChange(content: string) {
    this.showContactInfo = content === 'contact';
  }

  @Method()
  open() {
    this.opened = true;
  }

  render() {
    let mainContent = <slot />;
    if (this.showContactInfo) {
      mainContent = (
        <div id="contact-information">
          <h2>Contact Information</h2>
          <p>You can reach us via phone or email</p>
          <ul>
            <li>Phone: 498023456</li>
            <li>Email
              <a href="mailto:something@something.com">something@something.com</a>
            </li>
          </ul>
        </div>
      );
    }
    return [
      <div class="backdrop" onClick={this.onCloseDrawer.bind(this)}></div>,
      <aside>
        <header>
          <h1>{this.title}</h1>
          <button onClick={this.onCloseDrawer.bind(this)}>X</button>
        </header>
        <section id="tabs">
          <button class={!this.showContactInfo ? 'active' : ''} onClick={this.onContentChange.bind(this, 'nav')}>Navigation</button>
          <button class={this.showContactInfo ? 'active' : ''} onClick={this.onContentChange.bind(this, 'contact')}>Contact</button>
        </section>
        <main>
          {mainContent}
        </main>
      </aside>
    ];
  }
}
