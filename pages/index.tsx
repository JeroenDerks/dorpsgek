import { useEffect, useState } from 'react';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';

import { getPageData } from '../lib/getPageData';
import { PageLayoutHome } from '../components/PageLayout';
import { titleFont } from '../theme';
import { TownData } from '../types';
import { TownOverview } from '../components/TownOverview';
import { TownSearch } from '../components/TownSearch';
import Spinner from '../components/spinner';
import Head from 'next/head';

export default function IndexPage() {
  const [townData, setTownData] = useState<TownData | null>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const getData = async () => {
      const data = await getPageData();
      console.log(data);
      if (data?.errorCode === 404) {
        window.location = process.env.NEXT_PUBLIC_BASE_URL as string & Location;
      }
      if (data) {
        setTownData(data || null);
      }
      setIsLoading(false);
    };

    getData();

    return () => {};
  }, []);

  if (isLoading) {
    return <Spinner delay={300} />;
  }

  if (townData) {
    return <TownOverview town={townData} />;
  }

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
          <Stack width={320} height="calc(60vh - 60px)">
            <TownSearch />
          </Stack>
        </Stack>
      </PageLayoutHome>
    </>
  );
}
