"use client";
import Head from "next/head";
import { SWRConfig } from "swr";
import useSWR from "swr";
import { useEffect } from "react";
import { Inter } from "next/font/google";
import { useTaskStore } from "@/store";
import MenuContainer from "@/components/Navigation/MenuContainer";
import { Box, Flex, Spinner } from "@chakra-ui/react";
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
          <MenuContainer />
          <MainContainer mainTitle={"Upcoming"} flex="1"></MainContainer>
        </Flex>
      </SWRConfig>
    </>
  );
}
