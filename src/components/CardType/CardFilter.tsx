import { Box, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardComponent from "../body/Card";
import Typography from "@mui/material/Typography";
import { ResType } from "../../interface/iTunes";

interface Params {
  data: ResType;
  text: string;
  isVideo: boolean;
}

const CardFilter = ({ data, text, isVideo }: Params) => {
  return (
    <Card
      sx={{
        width: "auto",
        // minHeight: 430,
        height: "auto",
        backgroundColor: "#F8F9F9",
        padding: "20px",
        marginBottom: "20px",
        marginTop: "20px",
      }}
    >
      <Box
        sx={{
          fontSize: 20,
          display: "flex",
          justifyContent: "space-between",
          paddingRight: "30px",
          paddingLeft: "30px",
        }}
      >
        <Typography variant="h6" color="initial">
          {text}
        </Typography>
        <Button >View All</Button>
      </Box>
      <CardContent
        sx={{
          padding: "10px",
          display: "grid",
          gridTemplateColumns: isVideo 
            ? "repeat(auto-fill, minmax(350px, 1fr))"
            : "repeat(auto-fill, minmax(255px, 1fr))",
          justifyContent: "center",
          justifyItems: "center",
          gap: 2,
        }}
      >
        {data.resultCount > 0
          ? data.results.map((v) => (
              <CardComponent data={v} isVideo={isVideo} />
            ))
          : null}
      </CardContent>
    </Card>
  );
};

export default CardFilter;
