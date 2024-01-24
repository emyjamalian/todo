import { FormControl, FormLabel, Switch, useColorMode } from "@chakra-ui/react";

export default function DarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <FormControl
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <FormLabel htmlFor="dark-mode" mb="0">
         {colorMode === "light" ? "Dark" : "Light"} Mode
      </FormLabel>
      <Switch colorScheme='teal' id="dark-mode" onChange={toggleColorMode} />
    </FormControl>
  );
}
