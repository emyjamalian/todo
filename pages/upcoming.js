"use client";
import Layout from "@/components/Layout/Layout";
import MainContainer from "@/components/Navigation/mainContainer";
import TaskList from "@/components/TaskList/TaskList";
import useSWR from "swr";
import { Spinner } from "@chakra-ui/react";

const UpcomingPage = () => {
  const {
    data: upcomingTasks,
    isLoading,
    error,
  } = useSWR("/api/status/upcoming");

  console.log("upcoming tasks", upcomingTasks);

  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
        <Spinner size="xl" />
      </>
    );
  }

  if (error) {
    console.error(error);
    return <div>failed to load</div>;
  }

  if (!upcomingTasks) {
    return;
  }

  return (
    <Layout title="TaskTango - Upcoming">
      <MainContainer mainTitle="Upcoming">
        <TaskList tasks={upcomingTasks} />
      </MainContainer>
    </Layout>
  );
};

export default UpcomingPage;
