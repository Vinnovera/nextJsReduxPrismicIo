import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <link rel='shortcut icon' href='/static/favicon.ico' type='image/x-icon' />
          <link rel='icon' href='/static/favicon.ico' type='image/x-icon' />
          <link rel='stylesheet' href='/_next/static/style.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
