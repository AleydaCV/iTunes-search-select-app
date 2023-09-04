import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ImageDefault from "../../assets/image-default-2.jpg";
import { GenericType } from "../../interface/iTunes";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import IconButton from "@mui/material/IconButton";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { Box } from "@mui/material";
import { useRef, useState } from "react";
import ReactAudioPlayer from "react-audio-player";

interface Params {
  data: GenericType;
  isVideo: boolean;
  isPodcast?: boolean;
}

const CardComponent = ({ data, isVideo, isPodcast }: Params) => {
  const urlImage = data.artworkUrl100?.slice(
    0,
    data.artworkUrl100.lastIndexOf("/")
  );
  const x = urlImage + "/500x500bb.jpg";

  // ===== Play and Pause
  const audioRef: any = useRef<HTMLAudioElement>(null);

  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    setPlay(!play);
    if (audioRef.current) {
      if (play) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  const handleSongEnded = () => {
    setPlay(false);
  };
  return (
    <Card
      sx={{
        width: isVideo ? 410 : 260,
        height: isVideo ? 290 : 370,
        backgroundColor: "#fbfcfc",
      }}
    >
      <CardContent sx={{ padding: "10px" }}>
        {data.artworkUrl100 ? (
          <img
            src={x}
            alt="cover"
            width={isVideo ? 390 : 240}
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Box sx={{ marginTop: "6px" }}>
            <Typography sx={{ fontSize: 15 }} color="dark">
              {data.trackName}
            </Typography>
            <Typography sx={{ fontSize: 11 }} color="#1c1c1c">
              {data.artistName}
            </Typography>
            <Typography sx={{ fontSize: 11 }} color="#1c1c1c">
              $ {data.trackPrice}
            </Typography>
          </Box>
          {!isVideo && !isPodcast && (
            <IconButton sx={{ color: "black" }} onClick={handlePlay}>
              {play ? (
                <PauseCircleIcon sx={{ fontSize: "35px" }} />
              ) : (
                <PlayCircleIcon sx={{ fontSize: "35px" }} />
              )}
              {data.previewUrl && (
                <audio
                  ref={audioRef}
                  src={data.previewUrl}
                  onEnded={handleSongEnded}
                ></audio>
              )}
            </IconButton>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
