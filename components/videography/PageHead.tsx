import Head from 'next/head'

export default function PageHead() {
  return (
    <Head>
      <title>Videography Portfolio | Studio Regina</title>
      <meta 
        name="description" 
        content="Watch our collection of professional video work including wedding films, commercials, events, and creative productions." 
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Videography Portfolio" />
      <meta property="og:image" content="/thumbnail.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
} 