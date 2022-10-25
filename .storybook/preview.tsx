import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../chakra-theme";

const ChakraProviderDecorator = (Story) => (
  <ChakraProvider theme={theme}>
    <Story />
  </ChakraProvider>
);

export const decorators = [ChakraProviderDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
