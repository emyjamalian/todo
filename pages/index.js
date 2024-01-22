"use client";
import Head from "next/head";
import { SWRConfig } from "swr";
import MenuContainer from "@/components/Navigation/MenuContainer";
import { Flex, Spinner } from "@chakra-ui/react";
import MainContainer from "@/components/Navigation/mainContainer";

export default function Home() {
  return (
    <>
      <SWRConfig>
        <Head>
          <title>TaskTango</title>
        </Head>
        <Flex margin="8" gap="8" color="white">
          <MenuContainer />
          <MainContainer mainTitle={"Upcoming"} flex="1"></MainContainer>
        </Flex>
      </SWRConfig>
    </>
  );
}
