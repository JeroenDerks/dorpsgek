import { Button } from '@react-email/button';
import { Head } from '@react-email/head';
import { Html } from '@react-email/html';
import * as React from 'react';

export default function Email() {
  return (
    <Html lang="nl" dir="ltr">
      <Head>
        <title>Het feest kan beginnen want je bestelling is binnen.</title>
      </Head>
      <Button
        pX={20}
        pY={12}
        href="https://example.com"
        style={{ background: '#000', color: '#fff' }}
      >
        Hurray
      </Button>
    </Html>
  );
}
