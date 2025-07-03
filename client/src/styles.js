import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

// Styled Components
export const CustomAppBar = styled(AppBar)(({ theme }) => ({
  borderRadius: 15,
  margin: "30px 0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
}));

export const CustomHeading = styled(Typography)(({ theme }) => ({
  color: "rgba(0,183,255, 1)",
}));

export const CustomImage = styled("img")({
  marginLeft: "15px",
});
