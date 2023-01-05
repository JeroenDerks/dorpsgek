import { Box } from '@mui/system';

export const PageLayoutProduct = ({ children }) => {
  return (
    <Box
      display="flex"
      height="100%"
      justifyContent="center"
      p={[2, 3, 5]}
      width={1}
      sx={{ backgroundColor: '#f4f4f4' }}
    >
      <Box display="block" p={[2, 3, 5]} width={1} maxWidth={1200}>
        {children}
      </Box>
    </Box>
  );
};
