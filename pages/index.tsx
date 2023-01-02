import { useEffect, useState } from 'react';

import Spinner from '../components/spinner';
import { getPageData } from '../lib/getPageData';
import { TownOverview } from '../components/TownOverview';
import { TownData } from '../types';
import { PageLayout } from '../components/PageLayout';
import { TownSearch } from '../components/TownSearch';
import { Box, Stack } from '@mui/system';
import { Typography } from '@mui/material';

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

  return (
    <PageLayout noPadding>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
        sx={{
          minHeight: 'calc(100vh - 80px)',
          background:
            "url('../../public/richard-boyle-wu7oy6XhAoU-unsplash.jpg')"
        }}
      >
        <Stack>
          <Typography
            variant="h1"
            fontWeight={900}
            fontStyle="italic"
            fontSize={32}
            letterSpacing={-2}
            lineHeight={1}
          >
            DORPSGEK
          </Typography>
          <Typography
            variant="h2"
            fontWeight={900}
            fontStyle="italic"
            fontSize={20}
            letterSpacing={-1}
          >
            Uit liefde voor jouw dorp
          </Typography>
          <TownSearch />
        </Stack>
      </Box>
    </PageLayout>
  );
}
