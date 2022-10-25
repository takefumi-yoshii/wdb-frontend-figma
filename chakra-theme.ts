import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import dtoken from "./design-tokens.json";

export const theme = extendTheme(
  { colors: tokenToColor() },
  withDefaultColorScheme({
    colorScheme: "brand",
  })
);

export default theme;

function tokenToColor() {
  return Object.fromEntries(
    Object.entries(dtoken.color).map(([key, color]) => [
      key,
      Object.fromEntries(
        Object.entries(color).map(([key, { value }]) => [key, value])
      ),
    ])
  );
}
