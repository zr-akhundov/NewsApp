import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      muted: string;
      primary: string;
      error: string;
    };
    spacing: {
      s: number;
      m: number;
      l: number;
    };
    radius: {
      s: number;
      m: number;
      l: number;
    };
  }
}
