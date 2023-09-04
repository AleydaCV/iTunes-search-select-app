import { Box, SelectChangeEvent, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import Filter from "./Filter";
import CardTypeHolder from "../CardType/CardTypeHolder";
import { getSearchFilterLimit } from "../../useServices/itunesService";
import { ResType } from "../../interface/iTunes";
import CircularProgress from "@mui/material/CircularProgress";

type changeEventType = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const Body = () => {
  // ========= Data Types =======
  const [data, setData] = useState({
    song: {} as ResType,
    musicVideo: {} as ResType,
    podcast: {} as ResType,
  });

  // ========= Msg Error  =======
  const [msgError, setMessage] = useState<string | null>("");

  // ========= Loading  =======
  const [loading, setLoading] = useState<boolean>();

  // ========= Search and Filter  =======
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const handleChangeInput = (e: changeEventType) => {
    setSearch(e.target.value);
  };
  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setFilter(event.target.value as string);
  };

  // ========= Submit Search and Filter  =======

  const handleSearch = async () => {
    setLoading(true);

    setData({
      song: {} as ResType,
      musicVideo: {} as ResType,
      podcast: {} as ResType,
    });
    const encodedSearch = encodeURIComponent(search).replace(/%20/g, "+");

    if (search !== "" && filter !== "") {
      const limits = {
        songPodcast: "10",
        musicVideo: "6",
      };

      const { res, error } = await getSearchFilterLimit<ResType>(
        encodedSearch,
        filter,
        filter === "musicVideo" ? limits.musicVideo : limits.songPodcast
      );
      setData((prevData) => ({
        ...prevData,
        [filter]: res,
      }));
      setMessage(error);
      setLoading(false);
    } else if (filter === "") {
      const limits = {
        songPodcast: "5",
        musicVideo: "3",
      };
      const music = await getSearchFilterLimit<ResType>(
        encodedSearch,
        "song",
        limits.songPodcast
      );
      const resVideo = await getSearchFilterLimit<ResType>(
        encodedSearch,
        "musicVideo",
        limits.musicVideo
      );
      const podcast = await getSearchFilterLimit<ResType>(
        encodedSearch,
        "podcast",
        limits.songPodcast
      );

      setData({
        song: music.res,
        musicVideo: resVideo.res,
        podcast: podcast.res,
      });
      setMessage(music.error);
      setMessage(resVideo.error);
      setMessage(podcast.error);

      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <Box sx={{ padding: "40px" }}>
      <Filter
        handleChangeInput={handleChangeInput}
        handleChange={handleChange}
        handleSearch={handleSearch}
        filter={filter}
      />
      {!loading && msgError ! == null ? (
        <CardTypeHolder
          musicData={data.song}
          videoData={data.musicVideo}
          podcastData={data.podcast}
          searchData={search}
        />
      ) : msgError === null ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <CircularProgress color="inherit" />
        </Box>
      ) : (
        <Typography variant="h6" color="error">
          {msgError}
        </Typography>
      )}
    </Box>
  );
};

export default Body;
