import { Box, SelectChangeEvent } from "@mui/material";
import { ChangeEvent, useState } from "react";
import Filter from "./Filter";
import CardTypeHolder from "../CardType/CardTypeHolder";
import { getSearchFilterLimit } from "../../useServices/itunesService";
import {  ResType } from "../../interface/iTunes";

type changeEventType = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const Body = () => {
  // ========= Data Types =======

  const [musicData, setMusicData] = useState({} as ResType);
  const [videoData, setVideoData] = useState({} as ResType);
  const [podcastData, setPodcastData] = useState({} as ResType);

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
    setMusicData({} as ResType)
    setVideoData({} as ResType)
    setPodcastData({} as ResType)
    const encodedSearch = encodeURIComponent(search).replace(/%20/g, "+");
    if (search != "" && filter != "") {
      let limit = '10';
      if (filter=="musicVideo"){
        limit='6'
      }
      const { res } = await getSearchFilterLimit<ResType>(
        encodedSearch,
        filter,
        limit
      );
      if (filter == "song") {
        setMusicData(res);
        return;
      }

      if (filter == "musicVideo") {
        setVideoData(res);
        return;
      }
      setPodcastData(res);
      return;
    }
    if (filter == "") {
      console.log("all");
      const { res: music } = await getSearchFilterLimit<ResType>(
        encodedSearch,
        "song",
        "5"
      );
      setMusicData(music);

      const { res: resVideo } = await getSearchFilterLimit<ResType>(
        encodedSearch,
        "musicVideo",
        "3"
      );
      setVideoData(resVideo);

      const { res: podcast } = await getSearchFilterLimit<ResType>(
        encodedSearch,
        "podcast",
        "5"
      );
      setPodcastData(podcast);
    }
  };
  return (
    <Box sx={{ padding: "40px" }}>
      <Filter
        handleChangeInput={handleChangeInput}
        handleChange={handleChange}
        handleSearch={handleSearch}
        search={search}
        filter={filter}
      />

      {/* <CardHolder></CardHolder> */}
      <CardTypeHolder
        musicData={musicData}
        videoData={videoData}
        podcastData={podcastData}
      />
    </Box>
  );
};

export default Body;
