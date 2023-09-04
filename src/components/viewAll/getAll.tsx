import { useEffect, useState } from "react";
import { ResType } from "../../interface/iTunes";
import { getSearchFilter } from "../../useServices/itunesService";
import ShowAll from "./showAll";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

interface Params {
  search: string;
  kind: string;
  text: string;
}

const GetAll = (params: Params) => {
  const { search, kind, text } = params;
  const isVideo = kind === "musicVideo" ? true : false;
  const [data, setData] = useState({} as ResType);
  const [loading, setLoading] = useState(true);
  // ========= Msg Error  =======
  const [msgError, setMessage] = useState<string | null>("");

  const handleGetAllData = async () => {
    setLoading(true);
    const { res, error } = await getSearchFilter<ResType>(search, kind);
    if (res) {
      setData(res);
    }
    setMessage(error);
    setLoading(false);
  };

  useEffect(() => {
    handleGetAllData();
  }, [search, kind]);

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Typography sx={{ fontSize: 25, marginTop: "20px" }} color="black">
        {text}
      </Typography>
      {!loading && msgError ! == null ? (
        <ShowAll data={data} isVideo={isVideo} />
      ) : msgError === null  || msgError !== "" ? (
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

export default GetAll;
