"use client";
import Head from "next/head";
import { SWRConfig } from "swr";
import { Heading } from "@chakra-ui/react";
import { Inter } from "next/font/google";

import ListContainer from "@/components/ListContainer/ListContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const fetcher = (url) => fetch(url).then((response) => response.json());

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
