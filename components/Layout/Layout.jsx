import React from "react";
import { SWRConfig } from "swr";
import Head from "next/head";
import MenuContainer from "../Navigation/MenuContainer";
import { ColorModeScript } from "@chakra-ui/react";
import { theme } from "../../theme";

const Layout = ({ children, title }) => {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <SWRConfig>
        <Head>
          <title>{title || "TaskTango"}</title>
        </Head>
        <div style={{ display: "flex", margin: 8, gap: 8, color: "white" }}>
          <MenuContainer />
          {children}
        </div>
      </SWRConfig>
    </>
  );
};

export default Layout;
