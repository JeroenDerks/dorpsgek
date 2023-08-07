import Head from 'next/head';
import { Stack } from '@mui/system';
import {
  Box,
  Card,
  Grid,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import Link from 'next/link';

import { PageLayoutHome } from '../components/PageLayout';
import { townData } from '../data/townData';
import { titleFont } from '../theme';
import { chosenVillages } from '../data/chosenVillages';

export default function IndexPage({ selectedTowns }) {
  const towns = selectedTowns.sort((a, b) => a.zipCodes[0] - b.zipCodes[0]);

  return (
    <>
      <Head key="home">
        <title>Dorpsgek</title>
        <meta name="description" content="Uit liefde voor mn dorp" />
      </Head>
      <PageLayoutHome>
        <Stack alignItems="center">
          <Stack
            maxWidth={800}
            justifyContent="flex-end"
            mt={[2, 4, 10]}
            p={[2, 3, 4]}
          >
            <Typography variant="h1" {...titleFont} fontSize={32}>
              M'N DORP
            </Typography>
            <Typography
              mb={10}
              mt={2}
              variant="h5"
              fontStyle="italic"
              fontSize={16}
              fontWeight={500}
            >
              Daar staan ze. De 10 beste dorpen van Nederland. <br />
              En om het nog mooier te maken, heeft elk dorp zn eigen hoodie.
            </Typography>
            <Grid container spacing={2}>
              {towns.map(({ slug, zipCodes, name }) => (
                <Grid item xs={12} sm={6} md={4} key={slug}>
                  <Link
                    href={`https://${slug}.mndorp.nl`}
                    style={{ textDecoration: 'none' }}
                  >
                    <Card variant="outlined">
                      <Stack p={1}>
                        <Typography variant="h5" fontStyle="italic">
                          {zipCodes[0]}
                        </Typography>
                        <Typography
                          variant="h5"
                          fontStyle="italic"
                          fontSize={16}
                          fontWeight={500}
                        >
                          {name}
                        </Typography>
                      </Stack>
                    </Card>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Stack>
      </PageLayoutHome>
    </>
  );
}

export async function getStaticProps({ params }) {
  const selectedTowns = townData.filter((town) =>
    chosenVillages.includes(town.zipCodes[0])
  );
  return {
    props: { selectedTowns } // will be passed to the page component as props
  };
}
