import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Professional photography and videography services in Amsterdam area. Specializing in weddings, events, portraits, and commercial projects."
          />
          <meta property="og:site_name" content="Studio Regina" />
          <meta
            property="og:description"
            content="Professional photography and videography services in Amsterdam area. Specializing in weddings, events, portraits, and commercial projects."
          />
          <meta property="og:title" content="Studio Regina | Creative Photography & Videography" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Studio Regina | Creative Photography & Videography" />
          <meta
            name="twitter:description"
            content="Professional photography and videography services in Amsterdam area. Specializing in weddings, events, portraits, and commercial projects."
          />
          <link 
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap"
            rel="stylesheet" 
          />
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
