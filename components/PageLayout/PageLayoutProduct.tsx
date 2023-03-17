import { Box } from '@mui/system';

const backgroundColors = {
  grey: '#eaeaec'
};

export const PageLayoutProduct: React.FC<PageLayoutProps> = (props) => {
  const backgroundColor = backgroundColors[props.bgVariant] || '#f4f4f4';
  const { pb } = props;

  return (
    <Box
      display="flex"
      height="100%"
      justifyContent="center"
      p={[1, 2, 5]}
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
  bgVariant?: 'grey';
  pb?: string | number;
};
