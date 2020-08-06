class ConfirmLink extends HTMLAnchorElement {
  connectedCallback() {
    this.addEventListener('click', event => {
      if (!confirm('Do you relly want to leave?')) {
        event.preventDefault();
      }
    });
  }
}
customElements.define('bebop-confirm-link', ConfirmLink, {extends: 'a'});
