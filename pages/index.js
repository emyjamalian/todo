"use client";
import Head from "next/head";
import { Heading } from "@chakra-ui/react";

import { Inter } from "next/font/google";
import { Link } from "@chakra-ui/next-js";
import ListContainer from "@/components/ListContainer/ListContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const listTitle = "Today";

  return (
    <>
      <Head>
        <title>TaskTango</title>
      </Head>
      <Heading p="6" >Upcoming</Heading>

      <ListContainer listTitle={listTitle} />
    </>
  );
}
