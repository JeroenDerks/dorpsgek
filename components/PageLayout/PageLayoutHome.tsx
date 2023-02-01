import { Box } from '@mui/system';

export const PageLayoutHome = ({ children }) => {
  return (
    <Box
      display="flex"
      height="100vh"
      justifyContent="center"
      p={[2, 3, 5]}
      width={1}
      sx={{
        backgroundImage: "url('/richard-boyle-wu7oy6XhAoU-unsplash.jpg')",
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
      }}
    >
      <Box
        display="block"
        width={1}
        maxWidth={1200}
        sx={{ backgroundColor: '#f4f4f4', opacity: 0.9 }}
      >
        {children}
      </Box>
    </Box>
  );
};
