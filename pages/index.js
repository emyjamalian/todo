"use client";
import Head from "next/head";
import { Inter } from "next/font/google";
import { Link } from "@chakra-ui/next-js";
import InputForm from "@/components/inputForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>To Do</title>
      </Head>
      <Link href="/about" color="blue.400" _hover={{ color: "blue.500" }}>
        About
      </Link>
      <InputForm></InputForm>
    </>
  );
}
