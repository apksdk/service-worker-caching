import {
  AppBar,
  Avatar,
  IconButton,
  Toolbar,
  Typography,
  Chip,
  Stack,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const SiteHeader = () => {
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
            fontWeight="bold"
          >
            My Cool App
          </Typography>
          <Box flexGrow={1} />
          <Stack direction="row" spacing={1} alignItems="center">
            <Chip label={`\$1652.66`} />
            <IconButton>
              <Avatar src="" />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default SiteHeader;
