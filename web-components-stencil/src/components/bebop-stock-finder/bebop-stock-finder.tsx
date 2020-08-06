import { Component, h, State, Event, EventEmitter } from "@stencil/core";
import {AV_API_KEY} from '../../global/global';

@Component({
  tag: 'bebop-stock-finder',
  styleUrl: './bebop-stock-finder.scss',
  shadow: true
})
export class BebopStockFinder {
  stockNameInput: HTMLInputElement;
  error: Error;

  @Event({bubbles: true, composed: true}) bebopSymbolSelected: EventEmitter<string>;

  @State() searchResults: {symbol: string, name: string}[] = [];
  @State() loading = false;

  onFindStocks(event: Event) {
    event.preventDefault();
    this.loading = true;
    const stockName = this.stockNameInput.value;
    fetch(
      `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockName}&apikey=${AV_API_KEY}`
    )
    .then(res => res.json())
    .then(parsedRes => {
      this.searchResults = parsedRes['bestMatches'].map(match => {
        return {name: match['2. name'], symbol: match['1. symbol']};
      });
      this.loading = false;
    })
    .catch(err => {
      this.error = err.message;
      this.loading = false;
    });
  }

  onSelectSymbol(symbol: string) {
    this.bebopSymbolSelected.emit(symbol);
  }

  render() {
    let content = this.searchResults.map(result => (
      <li onClick={this.onSelectSymbol.bind(this, result.symbol)}>
        <strong>{result.symbol}</strong> - {result.name}
      </li>
    ));
    if (this.loading) {
      content = <bebop-spinner></bebop-spinner>;
    }
    return [
      <form onSubmit={this.onFindStocks.bind(this)}>
        <input
          type="text"
          id="stock-symbol"
          ref={el => this.stockNameInput = el}
        />
        <button type="submit">
          Find!
        </button>
      </form>,
      <ul>
        {content}
      </ul>
    ];
  }
}
