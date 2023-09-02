import { Box, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardComponent from "../body/Card";
import Typography from "@mui/material/Typography";

const CardFilter = () => {
  const numbersArray = ["1,2,3,4,5"][0].split(",").map(Number);

  return (
    <Card
      sx={{
        width: "auto",
        // minHeight: 430,
        height: "auto",
        backgroundColor: "#F8F9F9",
        padding: "20px",
        marginBottom:'20px',
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
          {" MUSIC"}
        </Typography>
        <Button sx={{}}>View All</Button>
      </Box>
      <CardContent
        sx={{
          padding: "10px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(255px, 1fr))",
          justifyContent: "center",
          justifyItems: "center",
          gap: 2,
        }}
      >
        {numbersArray.map((v) => (
          <CardComponent />
        ))}
      </CardContent>
    </Card>
  );
};

export default CardFilter;
