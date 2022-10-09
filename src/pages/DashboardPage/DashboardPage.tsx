import { Box } from "@mui/material";
import { picsumMock } from "../../assets/mock/PicsumMock";
import AppCard from "./AppCard/AppCard";
import { Virtuoso } from "react-virtuoso";

const Dashboard = () => {
  return (
    <Box height="100%">
      <Virtuoso
        style={{ height: "inherit" }}
        totalCount={picsumMock.length}
        data={picsumMock}
        itemContent={(_index, data) => (
          <Box key={data.id} marginTop={2}>
            <AppCard data={data} />
          </Box>
        )}
      />
    </Box>
  );
};

export default Dashboard;
