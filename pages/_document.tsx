import Document, { Html, Head, Main, NextScript } from "next/document";

class _Document extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="preload"
            as="font"
            href="/public/fonts/Karla-VariableFont_wght.ttf"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default _Document;
