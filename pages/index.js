"use client";
import Head from "next/head";
import { Heading, Spinner } from "@chakra-ui/react";
import { SWRConfig } from "swr";
import useSWR from "swr";
import { useEffect } from "react";
import { Heading, Menu } from "@chakra-ui/react";
import ListContainer from "@/components/ListContainer/ListContainer";
import { Inter } from "next/font/google";

import { useTaskStore } from "@/store";
import MenuContainer from "@/components/Navigation/MenuContainer";
import { Grid, GridItem, Box, Text, Flex, Square } from "@chakra-ui/react";
import MainContainer from "@/components/Navigation/mainContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const fetcher = (url) => fetch(url).then((response) => response.json());

  const { setData, isLoading, error } = useTaskStore();

  const { data: swrData, error: swrError } = useSWR("/api/tasks", fetcher);

  useEffect(() => {
    if (swrData) {
      setData(swrData);
    }
  }, [swrData, setData]);

  if (swrError) {
    return <div>Failed to load</div>;
  }

  if (isLoading || !swrData) {
    return (
      <>
        <h1>Loading...</h1>
        <Spinner size="xl" />
      </>
    );
  }

  const listTitle = "Today";

  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <Head>
          <title>TaskTango</title>
        </Head>
        <Flex margin="8" gap="8" color="white">
          <Box bg="gray.200" maxWidth="346px" borderRadius="50px">
            <MenuContainer />
          </Box>
          <Box flex="1">
            <MainContainer mainTitle={"Upcoming"}> </MainContainer>
          </Box>
        </Flex>
      </SWRConfig>
    </>
  );
}
