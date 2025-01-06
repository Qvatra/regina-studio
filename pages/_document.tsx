import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    const lang = this.props.__NEXT_DATA__.query.lang || 'en';

    return (
      <Html lang={lang as string}>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link 
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap"
            rel="stylesheet" 
          />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://res.cloudinary.com" />
        </Head>

        <body className="bg-white antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
