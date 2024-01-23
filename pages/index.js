"use client";
import Head from "next/head";
import { Flex, Spinner } from "@chakra-ui/react";
import MainContainer from "@/components/Navigation/mainContainer";
import { theme } from "../theme";

import React from "react";
import Layout from "@/components/Layout/Layout";
import InputForm from "@/components/Task/AddTaskInput";
import TaskList from "@/components/TaskList/TaskList";
import useSWR from "swr";

const IndexPage = () => {
  const { data: tasks, isLoading, error } = useSWR("/api/tasks");

  console.log("all tasks", tasks);

  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
        <Spinner size="xl" />
      </>
    );
  }

  if (error) {
    return <div>failed to load</div>;
  }

  if (!tasks) {
    return;
  }


  return (
    <Layout title="TaskTango - Home Page">
      <MainContainer mainTitle="Add a new task" flex="1">
        <InputForm />
        <TaskList tasks={tasks} />
      </MainContainer>
    </Layout>


  );
};

export default IndexPage;
