import React from "react";
import { Title } from "@mantine/core";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Lebenslauf = () => {
  return (
    <Layout>
      <Seo title="Lebenslauf" description="Lebenslauf" />
      <Title order={1}>Lebenslauf</Title>
    </Layout>
  );
};

export default Lebenslauf;
