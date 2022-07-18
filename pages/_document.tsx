import Document, { Html, Head, Main, NextScript } from "next/document";

class _Document extends Document {
  render() {
    return (
      <Html className="scroll-smooth" style={{ scrollBehavior: "smooth" }}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
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