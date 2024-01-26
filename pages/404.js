// pages/404.js
import React from "react";
import Head from "next/head";
import { Box, Button } from "@chakra-ui/react";
import { MdReceipt } from "@chakra-ui/icons";

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
      <p style={{ color: "black" }}>Lost? There's no place like home.</p>

      <Button leftIcon={MdReceipt} colorScheme="teal" variant="solid">
        Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
