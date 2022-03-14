import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head />
        <body className="bg-white dark:bg-black text-gray-800 dark:text-gray-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;