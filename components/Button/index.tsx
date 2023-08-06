import LoadingButton from '@mui/lab/LoadingButton';
import { styled } from '@mui/material';

const StyledLoadingButton = styled(LoadingButton)({
  background: '#0b0a0e',
  color: '#fff',
  height: 42,
  paddingLeft: 24,
  paddingRight: 24,

  '&:hover': {
    background: '#303032'
  },

  '& .MuiLoadingButton-loadingIndicator': {
    color: '#f7f7f7'
  }
});

export const Button = ({
  children,
  loading,
  onClick,
  fullWidth
}: ButtonProps) => (
  <StyledLoadingButton {...{ loading, onClick, fullWidth }}>
    {children}
  </StyledLoadingButton>
);

type ButtonProps = {
  children: React.ReactNode;
  loading: boolean;
  onClick: () => void;
  fullWidth?: boolean;
};
