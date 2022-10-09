import { Container, Box } from "@mui/material";
import { ReactNode } from "react";
import SiteHeader from "../SiteHeader/SiteHeader";

type SiteLayoutProps = {
  children: ReactNode;
};

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <SiteHeader />
      <Container sx={{ flexGrow: 1, padding: 2 }} maxWidth="xl">
        {children}
      </Container>
    </Box>
  );
};

export default SiteLayout;
