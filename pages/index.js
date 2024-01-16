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
import { Grid, GridItem } from "@chakra-ui/react";

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
        <Grid
          h="100%"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(6, 1fr)"
          gap={4}
        >
          {" "}
          <GridItem rowSpan={2} colSpan={2} bg="tomato">
            <MenuContainer />
          </GridItem>
          <GridItem h="500px" rowSpan={1} colSpan={4} bg="papayawhip">
            {/* how to fit this into this one Grid? */}
            <div>
              <Heading p="6">Upcoming</Heading>
              <ListContainer listTitle={listTitle} />
            </div>
          </GridItem>
          <GridItem rowSpan={2} colSpan={2} bg="blue"></GridItem>
          <GridItem rowSpan={2} colSpan={2} bg="green"></GridItem>
        </Grid>
      </SWRConfig>
    </>
  );
}
