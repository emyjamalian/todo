import React from "react";
import { SWRConfig } from "swr";
import Head from "next/head";
import MenuContainer from "../Navigation/MenuContainer";
import { ColorModeScript, Box, Wrap } from "@chakra-ui/react";
import { theme } from "../../theme";

const Layout = ({ children, title }) => {
  return (
    <Box
      h="100%"
      w="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="absolute"
      minWidth="500px"
    >
      <SWRConfig>
        <Head>
          <title>{title || "TaskTango"}</title>
        </Head>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Wrap style={{ display: "flex", margin: 8, gap: 8 }}>
          <MenuContainer />
          {children}
        </Wrap>
      </SWRConfig>
    </Box>
  );
};

export default Layout;
