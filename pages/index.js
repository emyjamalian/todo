"use client";
import Head from "next/head";
import { SWRConfig } from "swr";
import useSWR from "swr";
import MenuContainer from "@/components/Navigation/MenuContainer";
import { Flex, Spinner } from "@chakra-ui/react";
import MainContainer from "@/components/Navigation/mainContainer";

export default function Home() {
  const fetcher = (url) => fetch(url).then((response) => response.json());

  const {
    data: tasks,
    error,
    isLoading,
    mutate,
  } = useSWR("/api/tasks", fetcher);

  console.log("DEBUG SWRDATA: ", tasks);

  if (error) {
    return <div>Failed to load</div>;
  }

  if (isLoading || !tasks) {
    return (
      <>
        <h1>Loading...</h1>
        <Spinner size="xl" />
      </>
    );
  }

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
