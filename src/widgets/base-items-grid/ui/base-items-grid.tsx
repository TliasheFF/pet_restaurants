import { Box } from '@mui/material';
import { Loader } from '@shared/ui/loader';

export const BaseItemsGrid = (props: {
  loading?: boolean;
  children: React.ReactNode;
}) => {
  const { loading, children } = props;

  if (loading) {
    return <Loader isOpen={loading} />;
  }

  return (
    <Box
      paddingY={2}
      display="flex"
      flexWrap="wrap"
      justifyContent="space-evenly"
      gap={2}
    >
      {children}
    </Box>
  );
};
