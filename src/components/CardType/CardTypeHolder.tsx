import React from "react";

import { Box } from "@mui/material";
import CardFilter from "./CardFilter";
import { ResType } from "../../interface/iTunes";

interface Params {
  musicData: ResType;
  videoData: ResType;
  podcastData: ResType;
}

const CardTypeHolder = ({ musicData, videoData, podcastData }: Params) => {
  console.log('video', videoData)
  return (
    <Box>
      {musicData.resultCount > 0 ? (
        <CardFilter key={1} data={musicData} text="MUSIC" isVideo={false}/>
      ) : null}
      {videoData.resultCount > 0 ? (
        <CardFilter key={2} data={videoData} text="MUSIC VIDEO" isVideo={true}/>
      ) : null}
      {podcastData.resultCount > 0 ? (
        <CardFilter key={3} data={podcastData} text="PODCAST" isVideo={false}/>
      ) : null}
    </Box>
  );
};

export default CardTypeHolder;
