import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

// Styled Components

export const Root = styled(Box)(({ theme }) => ({
  "& .MuiTextField-root": {
    margin: theme.spacing(1),
  },
}));

export const CustomPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const ForM = styled("form")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
});

export const FileInput = styled("div")({
  width: "97%",
  margin: "10px 0",
});

export const ButtonSubmit = styled(Button)(({ theme }) => ({
  marginBottom: 10,
}));
