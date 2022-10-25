import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../chakra-theme";
import "./App.css";
import { Button } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Button
          borderColor="brand.101"
          backgroundColor="teal.600"
          borderWidth={3}
          color={"fuga.50"}
          size={"lg"}
        >
          Button
        </Button>
      </div>
    </ChakraProvider>
  );
}

export default App;
