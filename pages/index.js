"use client";
import Head from "next/head";
import { SWRConfig } from "swr";
import { Inter } from "next/font/google";
import { Link } from "@chakra-ui/next-js";
import InputForm from "@/components/inputForm";
import TaskList from "@/components/TaskList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const fetcher = (url) => fetch(url).then((response) => response.json());

  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <Head>
          <title>To Do</title>
        </Head>
        <Link href="/about" color="blue.400" _hover={{ color: "blue.500" }}>
          About
        </Link>
        <InputForm></InputForm>
        <TaskList />
      </SWRConfig>
    </>
  );
}
