import { Box } from '@mui/system';

const backgroundColors = {
  grey: '#eaeaec',
  white: '#f7f7f7'
};

export const Section: React.FC<PageLayoutProps> = (props) => {
  const backgroundColor = backgroundColors[props.bgVariant] || '#f7f7f7';
  const { pb } = props;

  return (
    <Box
      display="flex"
      height="100%"
      justifyContent="center"
      px={[1, 2, 5]}
      py={[3, 3, 5]}
      width={1}
      sx={{ backgroundColor }}
    >
      <Box
        display="block"
        p={[1, 2, 5]}
        pt={[0, 0, 0]}
        pb={[pb, pb, pb]}
        width={1}
        maxWidth={1200}
      >
        {props.children}
      </Box>
    </Box>
  );
};

type PageLayoutProps = {
  bgVariant?: 'grey' | 'white';
  pb?: string | number;
};
