"use client";
import { Spinner } from "@chakra-ui/react";
import MainContainer from "@/components/Navigation/mainContainer";
import React from "react";
import Layout from "@/components/Layout/Layout";
import InputForm from "@/components/Task/AddTaskInput";
import TaskList from "@/components/TaskList/TaskList";
import useSWR from "swr";
import { useTaskStore } from "@/store";

const IndexPage = () => {
  const { data: tasks, isLoading, error } = useSWR("/api/tasks");

  const setActiveList = useTaskStore((state) => state.setActiveList);
  setActiveList("TaskTango - Home Page");

  const setCountingTasks = useTaskStore((state) => state.setCountingTasks);
  setCountingTasks(tasks);

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
      <MainContainer mainTitle="All Tasks" flex="1">
        <InputForm />
        <TaskList tasks={tasks} />
      </MainContainer>
    </Layout>
  );
};

export default IndexPage;
