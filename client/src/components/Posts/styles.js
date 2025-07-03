import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

// Styled Components

export const MainContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
});

export const SmMargin = styled(Box)(({ theme }) => ({
  margin: theme.spacing(1),
}));

export const ActionDiv = styled(Box)({
  textAlign: "center",
});
