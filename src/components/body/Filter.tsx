import {
  Box,
  FormControl,
  Select,
  TextField,
  MenuItem,
  InputAdornment,
  Grid,
  Button,
} from "@mui/material";
import { theme } from "../../themes/theme";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import { ChangeEvent, useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";

const CustomSelect = styled(Select)(() => ({
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "black",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "black",
  },
}));

type changeEventType = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Params {
  handleChangeInput: (e: changeEventType) => void;
  handleChange: (event: SelectChangeEvent<unknown>) => void;
  handleSearch: () => Promise<void>;
  search: string;
  filter: string;
}

const Filter = (params: Params) => {
  const { handleChangeInput, handleChange, handleSearch, search, filter } =
    params;
  return (
    <Box sx={{ padding: "10px", width: "70%" }}>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <TextField
              required
              placeholder="Buscar"
              name="search"
              InputLabelProps={{ style: { color: theme.colors.black } }}
              sx={theme.inputsDark}
              onChange={(e) => handleChangeInput(e)}
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
                value={filter}
                onChange={handleChange}
                fullWidth
                displayEmpty
              >
                <MenuItem value=""> all</MenuItem>
                <MenuItem value="song">music</MenuItem>
                <MenuItem value="musicVideo">video</MenuItem>
                <MenuItem value="podcast">podcast</MenuItem>
              </CustomSelect>
            </FormControl>
          </Grid>
          <Grid item xs={3} md={3}>
            <Button
              sx={() => theme.buttons(theme.colors.black, theme.colors.white)}
              size="large"
              onClick={() => handleSearch()}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Filter;
