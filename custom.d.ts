declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

declare module '*.svg' {
  const content: StaticImageData;

  export default content;
}

declare module '*.scss' {
  const content: { [key: string]: string };
  export default content;
}
