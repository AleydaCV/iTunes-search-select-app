import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ImageDefault from "../../assets/image-default-2.jpg";
import { GenericType } from "../../interface/iTunes";

interface Params {
  data: GenericType;
  isVideo: boolean;
}

const CardComponent = ({ data, isVideo }: Params) => {
  const urlImage = data.artworkUrl100?.slice(
    0,
    data.artworkUrl100.lastIndexOf("/")
  );
  const x = urlImage + "/500x500bb.jpg";
  return (
    <Card
      sx={{
        width: isVideo ? 410 : 250,
        height: isVideo ? 280 : 350,
        backgroundColor: "#1c1c1c",
      }}
    >
      <CardContent sx={{ padding: "10px" }}>
        {data.artworkUrl100 ? (
          <img
            src={x}
            alt="cover"
            width={isVideo ? 390 : 230}
            height={isVideo ? 200 : 250}
          />
        ) : (
          <img
            src={ImageDefault}
            alt="cover"
            width={isVideo ? 390 : 230}
            height={isVideo ? 200 : 250}
          />
        )}

        <Typography sx={{ fontSize: 15 }} color="white">
          {data.trackName}
        </Typography>
        <Typography sx={{ fontSize: 11 }} color="white">
          {data.artistName}
        </Typography>
        <Typography sx={{ fontSize: 11 }} color="white">
          $ {data.trackPrice}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
