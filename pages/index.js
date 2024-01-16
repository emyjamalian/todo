"use client";
import Head from "next/head";
import { Heading, Spinner } from "@chakra-ui/react";
import { SWRConfig } from "swr";
import useSWR from "swr";
import { useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import ListContainer from "@/components/ListContainer/ListContainer";
import { useTaskStore } from "@/store";

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
        <Heading p="6">Upcoming</Heading>
        <ListContainer listTitle={listTitle} />
      </SWRConfig>
    </>
  );
}
