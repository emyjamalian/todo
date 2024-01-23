"use client";
import React from "react";
import Layout from "@/components/Layout/Layout";
import MainContainer from "@/components/Navigation/mainContainer";
import TaskList from "@/components/TaskList/TaskList";
import useSWR from "swr";
import { Spinner } from "@chakra-ui/react";

const DonePage = () => {
  const {
    data: doneTasks,
    mutate: mutate,
    isLoading,
    error,
  } = useSWR("/api/status/done");

  if (!doneTasks) {
    return;
  }

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

  return (
    <Layout title="TaskTango - Done">
      <MainContainer mainTitle="Done">
        <TaskList tasks={doneTasks} mutate={mutate} />
      </MainContainer>
    </Layout>
  );
};

export default DonePage;
