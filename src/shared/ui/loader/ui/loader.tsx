import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";
import type { FC } from "react";

interface LoaderProps {
  isOpen: boolean;
  text: string;
}

export const Loader: FC<LoaderProps> = (props) => {
  const { isOpen, text = "Загрузка..." } = props;

  return (
    <Backdrop sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })} open={isOpen}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
        <Typography sx={{ mt: 2 }}>{text}</Typography>
      </Box>
    </Backdrop>
  );
};
