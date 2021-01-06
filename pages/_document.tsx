import Document, { Html, Head, Main, NextScript } from "next/document";

import React, { Component } from "react";

interface Props {}
interface State {}

class _document extends Document {
  state = {};

  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default _document;
