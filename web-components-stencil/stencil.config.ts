import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'Bebop',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme',
      footer: '*Built with love!*',
    },
    // {
    //   type: 'www',
    //   serviceWorker: null // disable service workers
    // }
  ],
  plugins: [
    sass()
  ]
};
