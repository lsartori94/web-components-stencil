# Web components + Stencil.Js Course

Just a few demo items for both vanilla web components & Stencil.Js generated ones.

## Organization
On the [vanilla](./vanilla) folder there a few demo items, written without any framework. A `modal` (on it's separate folder), a `confirm link` and a `tooltip`.

On the [web-components-stencil](./web-components-stencil) folder there's a Stencil.Js project with a few demos around [Alpha Vantage API](https://www.alphavantage.co/) for stocks. Please make sure to replace the needed API key (you can easily get one in AV page) on the [global file](./web-components-stencil/src/global/global.ts) in order to make the API calls work.
Running the dev server is as easy as `npm start`. Please remember to `npm i` first.

## Running the Stencil components on build mode
In order to use the final compiled Stencil components you'll need first to run `npm run build` on the project root. After that a `dist` folder will be created.
Then you can run `prepareDemo.sh` in order to copy the files to the [available folder for the demo](./vanilla/demo/scripts).
Finally you need to serve the [`index.html`](vanilla/demo/index.html) file with some lightserver. My to-go choice is [http-server](https://www.npmjs.com/package/http-server) but any other option will work.
