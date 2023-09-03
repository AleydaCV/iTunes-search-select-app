import { Box } from "@mui/material";
import { ResType } from "../../interface/iTunes";
import CardComponent from "./Card";

interface Params {
  data: ResType;
  isVideo: boolean;
}
const CardHolder = ({ data, isVideo }: Params) => {
  return (
    <Box
      sx={{
        mt: "10px",
        padding: "10px",
        width: "90%",
        display: "grid",
        gap: 2,
        gridTemplateColumns: isVideo
          ? "repeat(3, minmax(255px, 1fr))"
          : "repeat(auto-fill, minmax(255px, 1fr))",
        justifyItems: "center",
      }}
    >
      {data.resultCount > 0 &&
        data.results.map((v) => <CardComponent data={v} isVideo={isVideo} />)}
    </Box>
  );
};

export default CardHolder;
