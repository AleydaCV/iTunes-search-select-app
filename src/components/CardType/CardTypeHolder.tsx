import React from "react";

import { Box } from "@mui/material";
import CardFilter from "./CardFilter";
import { ResType } from "../../interface/iTunes";

interface Params {
  musicData: ResType;
  videoData: ResType;
  podcastData: ResType;
  searchData: string;
}

const CardTypeHolder = ({
  musicData,
  videoData,
  podcastData,
  searchData,
}: Params) => {
  return (
    <Box>
      {musicData.resultCount > 0 ? (
        <CardFilter
          key={1}
          data={musicData}
          text="MUSIC"
          isVideo={false}
          search={searchData}
          kind={"song"}
        />
      ) : null}
      {videoData.resultCount > 0 ? (
        <CardFilter
          key={2}
          data={videoData}
          text="MUSIC VIDEO"
          isVideo={true}
          search={searchData}
          kind={"musicVideo"}
        />
      ) : null}
      {podcastData.resultCount > 0 ? (
        <CardFilter
          key={3}
          data={podcastData}
          text="PODCAST"
          isVideo={false}
          isPodcast={true}
          search={searchData}
          kind={"podcast"}
        />
      ) : null}
    </Box>
  );
};

export default CardTypeHolder;
