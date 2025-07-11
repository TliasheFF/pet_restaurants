import { Box, Pagination as MuiPagination } from '@mui/material';

export const Pagination = (props: {
  totalPages?: number;
  page: number;
  onChange: (page: number) => void;
}) => {
  const { totalPages, page, onChange } = props;

  if (!totalPages || totalPages === 1) {
    return null;
  }

  return (
    <Box display="flex" justifyContent="center">
      <MuiPagination
        count={totalPages}
        page={page}
        onChange={(_, pageNumber) => onChange(pageNumber)}
      />
    </Box>
  );
};
