import { FormControl, FormLabel, Switch } from "@chakra-ui/react";

export default function DarkMode() {
  return (
    <FormControl
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <FormLabel htmlFor="email-alerts" mb="0">
        Enable Dark Mode?
      </FormLabel>
      <Switch id="email-alerts" />
    </FormControl>
  );
}
