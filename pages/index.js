// pages/index.js
import React from "react";
import Layout from "@/components/Layout/Layout";
import MainContainer from "@/components/Navigation/mainContainer";

const IndexPage = () => {
  return (
    <Layout title="TaskTango - Upcoming">
      <MainContainer mainTitle="Upcoming" flex="1" />
    </Layout>
  );
};

export default IndexPage;
