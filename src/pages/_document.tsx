import React from 'react';
import Document, { Html, Head, Main, NextScript, type DocumentContext } from 'next/document';

import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  // static async getInitialProps(ctx: DocumentContext) {
  //   const originalRenderPage = ctx.renderPage;
  //   ctx.renderPage = () =>
  //     originalRenderPage({
  //       enhanceApp: (App) => App,
  //       enhanceComponent: (Component) => Component,
  //     });
  //   const initialProps = await Document.getInitialProps(ctx);

  //   return initialProps;
  // }

  static async getInitialProps(context: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = context.renderPage;

    try {
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(context);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
