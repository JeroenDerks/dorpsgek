import { useEffect, useState } from 'react';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';

import { getPageData } from '../lib/getPageData';
import { PageLayout } from '../components/PageLayout';
import { titleFont } from '../theme';
import { TownData } from '../types';
import { TownOverview } from '../components/TownOverview';
import { TownSearch } from '../components/TownSearch';
import Spinner from '../components/spinner';

export default function IndexPage() {
  const [townData, setTownData] = useState<TownData | null>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getPageData().then((data) => {
      if (data?.errorCode === 404) {
        window.location = process.env.NEXT_PUBLIC_BASE_URL as string & Location;
      }
      if (data) {
        setTownData(data || null);
      }
      setIsLoading(false);
    });

    return () => {};
  }, []);

  if (isLoading) {
    return <Spinner delay={300} />;
  }

  if (townData) {
    return <TownOverview town={townData} />;
  }

  console.log('hello');

  return (
    <PageLayout noPadding>
      <Stack alignItems="center" sx={{ minHeight: 'calc(100vh - 80px)' }}>
        <Stack
          width={300}
          height="calc(40vh - 40px)"
          justifyContent="flex-end"
          mb={2}
        >
          <Typography variant="h1" {...titleFont} fontSize={32}>
            DORPSGEK
          </Typography>
          <Typography variant="h2" {...titleFont} fontSize={20}>
            Uit liefde voor mn dorp
          </Typography>
        </Stack>
        <Stack width={300} height="calc(60vh - 40px)">
          <TownSearch />
        </Stack>
      </Stack>
    </PageLayout>
  );
}
