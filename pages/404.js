// pages/404.js
import React from "react";
import Head from "next/head";
import { Box, Button } from "@chakra-ui/react";

const NotFoundPage = () => {
  return (
    <Box
      backgroundColor="#FFF2D7"
      backgroundSize="cover"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <h1 style={{ color: "black" }}>404 - Page Not Found</h1>
      <p style={{ color: "black" }}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Button
        leftIcon={<EmailIcon />}
        colorScheme="teal"
        variant="solid"
      ></Button>
    </Box>
  );
};

export default NotFoundPage;
