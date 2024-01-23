"use client";
import { ColorModeScript } from "@chakra-ui/react";
import Head from "next/head";
import { SWRConfig } from "swr";
import MenuContainer from "@/components/Navigation/MenuContainer";
import { Flex, Spinner } from "@chakra-ui/react";
import MainContainer from "@/components/Navigation/mainContainer";
import { theme } from "../theme";

console.log("theme", theme);

export default function Home() {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <SWRConfig>
        <Head>
          <title>TaskTango</title>
        </Head>
        <Flex margin="8" gap="8">
          <MenuContainer />
          <MainContainer mainTitle={"Upcoming"} flex="1"></MainContainer>
        </Flex>
      </SWRConfig>
    </>
  );
}
