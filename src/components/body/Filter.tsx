import {
  Box,
  FormControl,
  Select,
  TextField,
  MenuItem,
  SelectChangeEvent,
  InputAdornment,
  IconButton,
  Grid,
  InputLabel,
  Button,
} from "@mui/material";
import { theme } from "../../themes/theme";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import { ChangeEvent } from "react";

type changeInputType = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => void;

interface Params {
  // handleChangeInput: changeInputType;
  // handleChange: (event: SelectChangeEvent<unknown>) => void;
  // filter: string;
  // loadingCities: boolean;
}
const CustomSelect = styled(Select)(() => ({
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "black",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "black",
  },
}));

const Filter = () => {
  // const { handleChangeInput, handleChange, filter, loadingCities } = params;

  return (
    <Box sx={{ padding: "10px", width: "60%" }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <TextField
            required
            placeholder="Buscar"
            name="search"
            InputLabelProps={{ style: { color: theme.colors.black } }}
            sx={theme.inputsDark}
            // onChange={(e) => handleChangeInput(e)}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon sx={{ color: theme.colors.black }} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={3} md={3}>
          <FormControl fullWidth>
            
            <CustomSelect
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={""}
              // onChange={handleChange}
              fullWidth
              displayEmpty
            >
              <MenuItem value=""> all</MenuItem>
              <MenuItem value="music">music</MenuItem>
              <MenuItem value="musicVideo">video</MenuItem>
              <MenuItem value="podcast">podcast</MenuItem>

            </CustomSelect>
          </FormControl>
        </Grid>
        <Grid item xs={3} md={3}>
          <Button
            sx={() => theme.buttons(theme.colors.black, theme.colors.white)}
            size="large"
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Filter;
