import Head from 'next/head';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';

import { PageLayoutHome } from '../components/PageLayout';
import { titleFont } from '../theme';

export default function IndexPage() {
  return (
    <>
      <Head key="home">
        <title>Dorpsgek</title>
        <meta name="description" content="Uit liefde voor mn dorp" />
      </Head>
      <PageLayoutHome>
        <Stack alignItems="center">
          <Stack
            width={320}
            height="calc(40vh - 60px)"
            justifyContent="flex-end"
            mb={2}
          >
            <Typography variant="h1" {...titleFont} fontSize={32}>
              DORPSGEK
            </Typography>
            <Typography
              variant="h2"
              {...titleFont}
              fontSize={20}
              letterSpacing="-0.02em"
            >
              Uit liefde voor mn dorp
            </Typography>
          </Stack>
        </Stack>
      </PageLayoutHome>
    </>
  );
}
