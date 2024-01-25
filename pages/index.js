"use client";
import {
  Spinner,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import MainContainer from "@/components/Navigation/mainContainer";
import { React } from "react";
import Layout from "@/components/Layout/Layout";
import TaskList from "@/components/TaskList/TaskList";
import useSWR from "swr";
import { useTaskStore } from "@/store";
import AddTaskInput from "@/components/Task/AddTaskInput";

const IndexPage = () => {
  const { data: tasks, isLoading, error } = useSWR("/api/tasks");

  const setActiveList = useTaskStore((state) => state.setActiveList);
  const setupMode = useTaskStore((state) => state.setupMode);
  const finishSetup = useTaskStore((state) => state.finishSetup);
  setActiveList("TaskTango - Home Page");

  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: setupMode });
  const closeWelcomeScreenAndFinishSetup = () => {
    onClose();
    finishSetup();
  };

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
        <AddTaskInput />
        <TaskList tasks={tasks} />
      </MainContainer>
      <Modal isOpen={isOpen} onClose={closeWelcomeScreenAndFinishSetup}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Welcome to Task Tango!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddTaskInput
              afterSubmit={() => closeWelcomeScreenAndFinishSetup()}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="teal"
              mr={3}
              onClick={closeWelcomeScreenAndFinishSetup}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Layout>
  );
};

export default IndexPage;
