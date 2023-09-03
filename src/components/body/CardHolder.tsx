import { Box } from "@mui/material";
import { ResType } from "../../interface/iTunes";
import CardComponent from "./Card";

interface Params {
  data : ResType,
  isVideo: boolean,
}
const CardHolder = ({data, isVideo} : Params) => {
  return (
    <Box
      sx={{
        mt:'10px',
        padding: "10px",
        width: "100%",
        display: "grid",
        gap: 2,
        gridTemplateColumns: "repeat(auto-fill, minmax(255px, 1fr))",
      }}
    >
      {data.results.map((v) => (
        <CardComponent data={v} isVideo={isVideo}/>
      ))}
    </Box>
  );
};

export default CardHolder;
