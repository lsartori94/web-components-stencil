import { Component, h } from "@stencil/core";

@Component({
  tag: 'bebop-spinner',
  styleUrl: './bebop-spinner.scss',
  shadow: true
})
export class BebopSpinner {
  render() {
    return (
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}
