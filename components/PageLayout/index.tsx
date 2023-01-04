import { Box } from '@mui/system';

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  noPadding
}) => {
  return (
    <Box
      display="flex"
      height="100%"
      justifyContent="center"
      px={3}
      py={5}
      width={1}
      sx={{ backgroundColor: 'white' }}
    >
      <Box
        display="block"
        px={!noPadding && 3}
        py={!noPadding && 5}
        width={1}
        sx={{ backgroundColor: '#f4f4f4', maxWidth: 1200 }}
      >
        {children}
      </Box>
    </Box>
  );
};

type PageLayoutProps = {
  noPadding?: boolean;
};
