import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
  List,
  ListItem
} from '@mui/material';
import { Stack } from '@mui/system';
import Link from 'next/link';
import { useState } from 'react';
import { townData } from '../../data/townData';
import { TownData } from '../../types';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router';

export const TownSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState<TownData[] | false>();

  console.log('tes');
  const handleSearch = () => {
    if (searchValue.length < 1) return;

    const matches = townData.filter(
      (town) =>
        town.name.toLowerCase() === searchValue.toLowerCase() ||
        town.zipCodes[0] === searchValue
    );

    if (matches.length === 1) {
      window.location = createUrl(matches[0].slug, matches[0].zipCodes);
    } else setResults(false);
  };

  const createUrl = (slug, zipCodes: string[]) => {
    const townIndicator = zipCodes.length === 1 ? slug : zipCodes[0];
    return `${process.env.NEXT_PUBLIC_BASE_URL_PREFIX}${townIndicator}.${process.env.NEXT_PUBLIC_BASE_URL_SUFFIX}`;
  };

  const handleSearchValueChange = (e) => {
    setResults([]);
    setSearchValue(e.target.value);
  };

  return (
    <Stack>
      <Box display="flex">
        <TextField
          onChange={handleSearchValueChange}
          placeholder="Zoek op naam of postcode"
          variant="outlined"
          size="small"
          fullWidth
          sx={{
            '& MuiInputBase-root': {
              borderRadius: '4px 0px 0px 4px'
            }
          }}
        />
        <Button
          onClick={handleSearch}
          variant="contained"
          sx={{ padding: '6px', minWidth: 40, borderRadius: '0px 4px 4px 0px' }}
        >
          <SearchIcon />
        </Button>
      </Box>

      {results && (
        <List>
          {results?.map(({ name, zipCodes, slug }) => (
            <ListItem>
              <Link href={createUrl(slug, zipCodes)} key={slug}>
                {name}
              </Link>
            </ListItem>
          ))}
        </List>
      )}

      {results === false && (
        <Typography mt={2} fontSize={14}>
          Helaas! De gekte is nog niet aanwezig in{' '}
          <b style={{ textTransform: 'capitalize' }}>{searchValue}</b>. Stuur
          een mail naar: suggestie@dorpsgek.shop en wij zullen je proberen te
          helpen.
        </Typography>
      )}
    </Stack>
  );
};
