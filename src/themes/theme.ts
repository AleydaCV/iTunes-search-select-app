export const inputSX = (width: number, dark: boolean) => {
  const sx = {
    "& input": {
      minWidth: width,
      color: dark ? theme.colors.black : theme.colors.white,
      width: "100%",
    },
    "& input:-internal-autofill-selected": {
      boxShadow: `inset 0 0 0 50px #77abdd`,
      borderColor: dark ? theme.colors.black : theme.colors.white,
      width: "100%",
    },
    "& label.Mui-focused": {
      color: dark ? theme.colors.black : theme.colors.white,
      borderColor: dark ? theme.colors.black : theme.colors.white,
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: dark ? theme.colors.black : theme.colors.white,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: dark ? theme.colors.black : theme.colors.white,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: dark ? theme.colors.black : theme.colors.white,
      },
      "&:hover fieldset": {
        borderColor: dark ? theme.colors.black : theme.colors.white,
      },
      "&.Mui-focused fieldset": {
        borderColor: dark ? theme.colors.black : theme.colors.white,
      },
    },
    "@media screen and (max-width:550px)": {
      "& input": {
        width: "100%",
      },
    },
  };
  return sx;
};

export const btnSX = (
  backGround: string,
  color: string,
  colorHover?: string
) => {
  return {
    backgroundColor: backGround,
    color: color,
    borderRadius: theme.borders.radius,
    padding: "14px",
    fontWeight: 700,
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: backGround,
      boxShadow: "0 5px 10px -2px rgba(136, 140, 243, 0.9)",
      color: colorHover ? colorHover : color,
    },
  };
};

export const theme = {
  colors: {
    black: "#000000",
    white: "#ffffff",
  },
  borders: {
    radius: 3,
  },
  transitions: {
    time: ".2s",
  },
  buttons: btnSX,
  inputs: () => inputSX(380, false),
  inputsDark: () => inputSX(380, true),
  inputsDarkNoMinWidth: () => inputSX(0, true),
  centerXAndY: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  padding: {
    basic: "16px",
  },
};
