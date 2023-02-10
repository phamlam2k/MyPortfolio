import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="keywords" content="NFTs Game Titan Hunters Monster Hunter Genshin Impact NFT Blockchain" />
          <meta
            name="description"
            // eslint-disable-next-line max-len
            content="The only official domain: titanhunters.io - TITAN HUNTERS is inspired by fun gameplay of Diablo, Voxel’s signature look and the feel of Minecraft. It is a creative and innovative game project that combines NFT (Earning Nature) and the best gaming genre of MMORPG (Fun Nature)."
          />

          <meta name="application-name" content="Titan Hunters" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="Titan Hunters" />

          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#1285d2" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://titanhunters.io" />
          <meta name="twitter:title" content="TITAN HUNTERS - FREE TO PLAY &amp; INVEST TO EARN" />
          <meta
            name="twitter:description"
            // eslint-disable-next-line max-len
            content="The only official domain: titanhunters.io - TITAN HUNTERS is inspired by fun gameplay of Diablo, Voxel’s signature look and the feel of Minecraft. It is a creative and innovative game project that combines NFT (Earning Nature) and the best gaming genre of MMORPG (Fun Nature)."
          />
          <meta name="twitter:image" content="https://titanhunters.io/app-icons/192.png" />
          <meta name="twitter:creator" content="@Titan_Hunters" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="TITAN HUNTERS - FREE TO PLAY &amp; INVEST TO EARN" />
          <meta
            property="og:description"
            // eslint-disable-next-line max-len
            content="The only official domain: titanhunters.io - TITAN HUNTERS is inspired by fun gameplay of Diablo, Voxel’s signature look and the feel of Minecraft. It is a creative and innovative game project that combines NFT (Earning Nature) and the best gaming genre of MMORPG (Fun Nature)."
          />
          <meta property="og:site_name" content="Titan Hunters" />
          <meta property="og:url" content="https://titanhunters.io" />
          <meta property="og:image" content="https://titanhunters.io/app-icons/512.png" />

          <link rel="apple-touch-icon" sizes="152x152" href="/app-icons/152.png" />
          <link rel="apple-touch-icon" sizes="167x167" href="/app-icons/167.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/app-icons/180.png" />
          <link rel="apple-touch-icon" href="/app-icons/256.png" />

          <link rel="icon" type="image/png" sizes="32x32" href="/app-icons/32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/app-icons/16.png" />

          <link rel="manifest" href="/manifest.json" />

          <link rel="icon" href="/favicon.ico" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://cdn-homepage.cloudfront.net" />
          <link
            href="https://fonts.googleapis.com/css2?family=Tomorrow:ital,wght@0,400;0,600;1,400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
