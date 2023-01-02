import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Uit de liefde voor ons dorp" />
        <meta property="og:title" content="Dorpsgek" />
        <meta property="og:description" content="Uit de liefde voor ons dorp" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
